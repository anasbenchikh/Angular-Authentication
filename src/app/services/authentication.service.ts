import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestPayload} from '../model/login-request-payload';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private errorMessage = '';
  login(loginRequest: LoginRequestPayload): Observable<boolean> {
    return this.http.post('http://localhost:8080/api/v1/auth/authenticate', loginRequest, {responseType: 'text'})
              .pipe(map(data => {
                localStorage.setItem('access_token', data);
                this.errorMessage = 'Login ou Mot de Passe incorrect';
                return true;
              }));
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  isLoggedIn(): boolean {
    return this.getToken() != null;
  }
}
