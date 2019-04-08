import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GooglebooksApiService {

  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

  constructor(private _http: HttpClient) {
    
  }

  getBookData(isbn: string): Observable<IBookResponse>{
    //console.log("URL: "+this._siteURL+isbn);

    return this._http.get<IBookResponse>(this._siteURL+isbn).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    console.log('GoogleBooksApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
