import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Ebook } from './ebook';
import { HttpHeadersService } from '../http-headers.service';


@Injectable()
export class EbookService {

  api_url: string = '/api/v1/library/';

  constructor(
    private http: HttpClient
  ) { }

  listAll(): Observable<Ebook[]> {
    return this.http.get<Ebook[]>(`${this.api_url}ebooks/`, { headers: HttpHeadersService.get() });
  }

}
