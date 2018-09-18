import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
@Injectable()
export class HomeService {
  private api_host : any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers();
}