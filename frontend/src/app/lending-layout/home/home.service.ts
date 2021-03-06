import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class HomeService {
  private api_host : any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers();

  // Get all country
  getAllCountry() {
    return this.http.get(`${this.api_host}country`);
  }
  // Add user intrest
  addUserInterest(data : any) {
    return this.http.post(`${this.api_host}user_interest`, data);
  }
}