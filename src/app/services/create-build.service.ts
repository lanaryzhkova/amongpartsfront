import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateBuildService {
  endpoint: string = 'https://amongparts.ga/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  sendBuild(body: any): Observable<any> {
    return this.http.post('https://amongparts.ga/api/build/', body,
      {
        withCredentials: true
      })
  }

}




