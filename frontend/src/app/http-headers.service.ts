import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpHeadersService {

  constructor() { }

  static get(): HttpHeaders {
    let header: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    let token = localStorage.getItem('token');
    if(token !== null) {
      header = header.append('Authorization', 'Token ' + token);
    }
    return header;
  }

}
