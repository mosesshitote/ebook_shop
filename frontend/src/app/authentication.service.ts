import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { HttpHeadersService } from './http-headers.service';
import { MessageService } from './message.service';


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
    private http: HttpClient,
    private message: MessageService
  ) { }

  login(username: string, password: string): Observable<LoginData> {
    return this.http.post<LoginData>(`/authentication/login/`, { username: username, password: password }, { headers: HttpHeadersService.get() })
      .pipe(
        tap((data: LoginData) => this.setLoginData(data)),
        tap((data: LoginData) => this.message.log(`Zalogowano poprawne`)),
        catchError(this.handleError<LoginData>('login'))
      );
  }

  setLoginData(loginData: LoginData) {
    localStorage.setItem('token', loginData.key);
    localStorage.setItem('user', JSON.stringify(loginData.user_instance));
  }

  logout(): Observable<any> {
    return this.http.post(`/authentication/logout/`, {}, { headers: HttpHeadersService.get() })
      .pipe(
        tap(_ => this.removeLoginData()),
        tap(_ => this.message.log(`Wylogowano poprawnie`)),
        catchError(this.handleError<any>('logout'))
      );
  }

  removeLoginData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  register(user): Observable<User> {
    return this.http.post<User>(`/authentication/register/`, user, { headers: HttpHeadersService.get() })
      .pipe(
        tap(_ => this.message.log(`Zarejestrowano poprawnie`)),
        tap(_ => this.login(user.username, user.password).subscribe()),
        catchError(this.handleError<User>('register'))
      );
  }

  getUser(): User {
    let userJson  = localStorage.getItem('user');
    let user = new User();
    if(userJson !== null) {
      user = JSON.parse(userJson) as User;
    }
    return user;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
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
