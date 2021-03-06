import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { Subscriber } from './subscriber';
import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class NewsletterService {
  private newsletterUrl = 'api/v1/newsletter';

  constructor(
	private http: HttpClient,
    private message: MessageService
  ) { }

  addSubscriber(subscriber: Subscriber): Observable<Subscriber> {
	  return this.http.post<Subscriber>(`${this.newsletterUrl}/subscribers/`, subscriber, httpOptions)
      .pipe(
        tap((subscriber: Subscriber) => this.message.log(`Dodano do subskrypcji`)),
        catchError(this.handleError<Subscriber>('add subscriber'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error, any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      for(var key in error.error) {
        error.error[key].forEach(msg => this.message.error(key + ': ' + msg));
      }
      return of(result as T);
    }
  }

}
