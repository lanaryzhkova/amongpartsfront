import { Injectable }             from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable }             from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMotherboard(skip?: number, limit?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }

    return this.http.get('https://amongparts.ga/api/motherboard/all', {params})
  }

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
  getRam(skip?: number, limit?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }

    return this.http.get('https://amongparts.ga/api/ram/all', {params})
  }
  getGpu(skip?: number, limit?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }

    return this.http.get('https://amongparts.ga/api/gpu/all', {params})
  }
  getPsu(skip?: number, limit?: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (skip) {
      params = params.set('skip', skip);
    }

    return this.http.get('https://amongparts.ga/api/psu/all', {params})
  }
}
