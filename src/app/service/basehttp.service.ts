import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasehttpService {

  constructor(private http:HttpClient) { }

  public doGetCall(url: string): Observable<string> {
    return this.http.get<string>(url).pipe(catchError(this.handleError));
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    console.error(error);
    return throwError(() => new Error(error.error));
  }
}
