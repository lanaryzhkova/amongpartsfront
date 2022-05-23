import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  constructor(
    private http: HttpClient
  ) {
  }
  searchProduct(name: string, limit: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if(name){
      params=params.set('name', name)
    }
    if (limit) {
      params = params.set('limit', limit);
    }

    return this.http.get('https://amongparts.ga/api/search', {params})
  }

  searchProductCategory(category: string, name: string, limit: number, skip?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if(category){
      params=params.set('category', category)
    }
    if(name){
      params=params.set('name', name)
    }
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }

    return this.http.get('https://amongparts.ga/api/search/'+category, {params})
  }
}
