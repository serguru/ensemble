import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../models/search-result.model';
import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private remoteService: RemoteService) { }

  public searchByTitle(title: string): Observable<SearchResult> {
    return this.remoteService.get(`s=${encodeURI(title)}`)
  }
}
