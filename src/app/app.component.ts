import { Component } from '@angular/core';
import { catchError, debounceTime, map, mergeMap, Observable, of, Subject, takeUntil, tap, throwError } from 'rxjs';
import { AutoUnsubscribeComponentBase } from './components/bases/auto-unsubscribe.component.base';
import { SearchResultItem } from './models/search-result-item.model';
import { SearchResult } from './models/search-result.model';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AutoUnsubscribeComponentBase {

  value: string;
  valueSubject = new Subject<string>();
  searchResultItems: SearchResultItem[] = [];

  constructor(private searchService: SearchService) {
    super();
    this.setSearch();
  }

  setSearch(): void {
    this.valueSubject
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(300),
        mergeMap((value: string) => {
          if (!value || value.length < 3) {
            return of([])
          }

          return this.searchService.searchByTitle(value);

        }),
        catchError(err => {
          this.setSearch();
          return throwError(() => err);
        })
      )
      .subscribe((x: SearchResult) =>
        this.searchResultItems = x?.Search || []);
  }


  valueChanged() {
    this.valueSubject.next(this.value);
  }

}
