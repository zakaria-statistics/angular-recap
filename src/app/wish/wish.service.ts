import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions():any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getWishes(): Observable<any>{
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
    return this.http.get<WishItem[]>('assets/wishes.json', options).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error('There is an issue with the client or network:', error.error)
    } else {
      console.error('Sever-side error', error.error);
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again'));
  }

  addWish(wish: WishItem) {
    let options = this.getStandardOptions()
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/wishes.json', wish, options);
  }
}
