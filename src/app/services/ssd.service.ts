import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SsdService {

  constructor(  private http: HttpClient
  ) {   }
  getSsd(skip?: number, limit?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }

    return this.http.get('https://amongparts.ga/api/ssd/all', {params})
  }
}
