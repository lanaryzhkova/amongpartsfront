import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registry(body: any): Observable<any> {
    return this.http.post('https://amongparts.ga/api/auth/register', body)
  }

  login(body: any): Observable<any> {
    return this.http.post('https://amongparts.ga/api/auth/jwt/login', body)
  }

}
