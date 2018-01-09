import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Subscriber } from './subscriber';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class NewsletterService {
  private newsletterUrl = 'http://localhost/api/v1/newsletter';

  constructor(
	private http: HttpClient
  ) { }

  addSubscriber(subscriber: Subscriber): Observable<Subscriber> {
	return this.http.post<Subscriber>(`${this.newsletterUrl}/subscribers/`, subscriber, httpOptions);
  }

}
