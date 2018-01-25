import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { HttpHeadersService } from './http-headers.service';
import { MessageService } from './message.service';
import { User } from './authentication.service';
import { Ebook } from './ebook.service';

export class Review {
  id: number;
  content: string;
  object_review: number;
  review_object: Ebook;
  created_by: User;
  created_at: string;
  updated_at: string;
}

@Injectable()

export class ReviewService {

  api_url: string = '/api/v1/review/reviews/';

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  getEbookReviews(ebookId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.api_url}?object_review=${ebookId}`, { headers: HttpHeadersService.get() })
      .pipe(
        catchError(this.handleError<Review[]>(`get ebook's reviews`))
      );
  }

  getUserReviews(userId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.api_url}?created_by=${userId}`, { headers: HttpHeadersService.get() })
      .pipe(
        catchError(this.handleError<Review[]>(`get user's reviews`))
      );
  }
  
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.api_url}`, review, { headers: HttpHeadersService.get() })
      .pipe(
        tap(_ => this.message.log(`Dodano recenzje`)),
        catchError(this.handleError<Review>(`add ebook's review`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error, any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      for(var key in error.error) {
        this.message.error(error.error[key]);
      }
      return of(result as T);
    }
  }

}
