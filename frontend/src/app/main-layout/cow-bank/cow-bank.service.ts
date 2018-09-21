import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class CowBankService {
  private api_host : any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers();
 
  // get(data : any) {
  //   return this.http.post(`${this.api_host}login`, data);
  // }

  // get(apiUrl) {
  //   const url = this.api_host + apiUrl;
  //   return this.http.get(url);
  // }
  // getParam(apiUrl, data) {
  //   const url = this.api_host + apiUrl;
  //   let Params = new HttpParams();
  //   for (const key in data) {
  //     Params = Params.append(key, data[key]);
  //   }
  //   // Begin assigning parameters
  //   return this.http.get(url, { params: Params });
  // }
}