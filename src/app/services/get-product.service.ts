import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  getProduct(category: string, skip?: number, limit?: number, sort?: string, direction?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }
    if (sort) {
      params = params.set('sort', sort);
    }
    if (direction) {
      params = params.set('direction', direction);
    }

    return this.http.get(`https://amongparts.ga/api/${category}/all`, {params})
  }

  getProductByLink(category?: string, name?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }

    return this.http.get('https://amongparts.ga/api/' + category + '/get/' + name, {params})
  }
}
