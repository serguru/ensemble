import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(
    public http: HttpClient
  ) {
  }

  public get apiUrl(): string {
    return `${environment.apiUrl}/?apikey=${environment.apiKey}&`;
  }

  public get apiImage(): string {
    return `${environment.apiUrlImage}/?apikey=${environment.apiKey}&`;
  }

  public get<T>(path: string, options?: Object): Observable<T> {
    return this.http.get<T>(`${this.apiUrl + path}`, options);
  }

}
