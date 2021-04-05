import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { webAppUrl } from 'src/app/app.config';
import { RequestOptionsModel } from '../models/request-options.models';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';

@Injectable()
export class RestService {

  public activeRequestsCount: number = 0;
  constructor(
    private _httpClient: HttpClient
  ) { }

  get(url: string, options?: any): Observable<any> {
    options = this.buildOptions(options);
    options.responseType = "json";
    url = webAppUrl + url;
    return this._httpClient.get(url, options).pipe(map(this.handleResponse), catchError(this.handleError));
  }

  post(url: string, body: any, options?: any): Observable<any> {
    options = this.buildOptions(options);
    options.responseType = "json";
    url = webAppUrl + url;
    return this._httpClient.post<any>(url, body, options).pipe(map(this.handleResponse), catchError(this.handleError));
  }

  delete(url: string, options?: any): Observable<any> {
    options = this.buildOptions(options);
    options.responseType = "json";
    url = webAppUrl + url;
    return this._httpClient.delete(url, options).pipe(map(this.handleResponse), catchError(this.handleError));
  }

  private handleResponse(res: any) {
    this.activeRequestsCount = this.activeRequestsCount - 1;
    return res.data;
  }

  private handleError(error: HttpErrorResponse) {
    this.activeRequestsCount = this.activeRequestsCount - 1;
    return throwError(error);
  }

  private buildOptions(options: RequestOptionsModel) {
    this.activeRequestsCount = this.activeRequestsCount + 1;
    let session: any = JSON.parse(String(localStorage.getItem('user')));
    if (!options) {
      options = new RequestOptionsModel();
      options.headers = new HttpHeaders().append("authorization", 'Bearer' + btoa(session != null ? session.jwt : '')).append("content-type", "application/json")
    }
    else {
      let headers: any = Object.keys(options).length > 0 ? (Object.keys(options.headers).length > 0 ? options.headers : {}) : {};
      options.headers = new HttpHeaders().append("authorization", headers["authorization"]).append("content-type", headers["content-type"])
    }
    return options;
  }
}
