import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable }              from "rxjs";
import { Router }                  from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'https://amongparts.ga/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser?: any;

  constructor(private http: HttpClient, public router: Router) {
  }

  registry(body: any): Observable<any> {
    return this.http.post('https://amongparts.ga/api/auth/register', body)
  }

  login(body: any): Observable<any> {
    return this.http.post(this.headers + 'https://amongparts.ga/api/auth/jwt/login', body)
  }

  signIn(body: any): Observable<any> {
    let formData = new FormData();
    formData.append('username', body.username);
    formData.append('password', body.password);
    return this.http.post<any>(`${this.endpoint}/auth/jwt/login`, formData, {
        withCredentials: true
      },
    )
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('fastapiusersauth');
    return authToken !== null;
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.endpoint}/users/me`,
      {
        withCredentials: true,
      })
  }

  getUserBuilds(): Observable<any> {
    return this.http.get(`${this.endpoint}/users/builds`,
      {
        withCredentials: true,
      })
  }

  logOutUser(): Observable<any> {
    return this.http.post(`${this.endpoint}/auth/jwt/logout`, null,
      {
        withCredentials: true,
      })
  }

  resetPassword(body: any): Observable<any> {
    console.log(localStorage.getItem('Cookie'))
    return this.http.patch(`${this.endpoint}/user/me`, body,
      {
        withCredentials: true,
      })
  }
}
