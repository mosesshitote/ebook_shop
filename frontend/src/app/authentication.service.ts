import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeadersService } from './http-headers.service';

const httpOptions = {
  headers: HttpHeadersService.get()
};

export class User {
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
}

class LoginData {
  user_instance: User;
  key: string;
  created: Date;
}

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    this.http.post<LoginData>(`/authentication/login/`, { username: username, password: password }, httpOptions)
      .subscribe(result => this.setLoginData(result));
  }

  setLoginData(loginData: LoginData) {
    localStorage.setItem('token', loginData.key);
    localStorage.setItem('user', JSON.stringify(loginData.user_instance));
  }

  logout() {
    this.http.post(`/authentication/logout/`, {}, httpOptions)
      .subscribe(_ => this.removeLoginData());
  }

  removeLoginData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  register(user) {
    this.http.post(`/authentication/register/`, user, httpOptions)
      .subscribe(result => this.login(user.username, user.password));
  }

  getUser(): Object {
    let user: any = localStorage.getItem('user');
    if(user !== null) {
      return JSON.parse(user);
    }
    return new User();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
