import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    this.http.post(`/authentication/login/`, { username: username, password: password }, httpOptions)
      .subscribe(result => localStorage.setItem('authenticationData', JSON.stringify(result)))
  }

  register(user) {
    this.http.post(`/authentication/register/`, user, httpOptions)
      .subscribe(result => this.login(user.username, user.password));
  }

}
