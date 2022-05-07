import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'https://amongparts.ga/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  registry(body: any): Observable<any> {
    return this.http.post('https://amongparts.ga/api/auth/register', body)
  }

  login(body: any): Observable<any> {
    return this.http.post(this.headers + 'https://amongparts.ga/api/auth/jwt/login', body)
  }

  signIn(body: any){
    let formData = new FormData();
    formData.append('username', body.username);
    formData.append('password', body.password);
    return this.http
      .post<any>(`${this.endpoint}/auth/jwt/login`, formData, {
          withCredentials: true},
        )
      .subscribe((res:any) => {

        console.log(localStorage.getItem('fastapiusersauth'));
        this.getUserProfile().subscribe((res) => {
          console.log(res);
        });
      });
  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.endpoint}/users/me`,
      {
        withCredentials: true,
      }).pipe(
        map((res) => {
          console.log(res);
        }),
      catchError(this.handleError)
    )
    }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {

      msg = error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
