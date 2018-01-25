import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { HttpHeadersService } from './http-headers.service';
import { MessageService } from './message.service';

class Author {
  id: number;
  first_name: string;
  last_name: string;
}

export class Ebook {
  id: number;
  name: string;
  author: Author;
  isbn: string;
  description: string;
  image: string;
  image_url: string;
}

export class Loan {
  key: string;
  expired_at: string;
  ebook_object: Ebook;
}

@Injectable()
export class EbookService {

  api_url: string = '/api/v1/library/';

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  listAllEbooks(): Observable<Ebook[]> {
    return this.http.get<Ebook[]>(`${this.api_url}ebooks/`, { headers: HttpHeadersService.get() })
      .pipe(
        catchError(this.handleError<Ebook[]>('list all ebooks'))
      );
  }
  
  getEbook(id: number): Observable<Ebook> {
    return this.http.get<Ebook>(`${this.api_url}ebooks/${id}/`, { headers: HttpHeadersService.get() })
      .pipe(
        catchError(this.handleError<Ebook>('get ebook'))
      );
  }

  borrowEbook(ebookId: number): Observable<Loan> {
    return this.http.post<Loan>(`${this.api_url}loans/`, { ebook: ebookId }, { headers: HttpHeadersService.get() })
    .pipe(
      tap(_ => this.message.log(`Wypożyczono ebooka`)),
      catchError(this.handleError<Loan>('borrow ebook'))
    );
  }

  listAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.api_url}loans/`, { headers: HttpHeadersService.get() })
      .pipe(
        catchError(this.handleError<Loan[]>('list all loans'))
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
