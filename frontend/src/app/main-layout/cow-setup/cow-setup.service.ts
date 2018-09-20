import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class CompanySetupService {
  private api_host : any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers();
  // login
  saveCompanyDetails(data : any) {
    return this.http.post(`${this.api_host}company/add_company`, data);
  }
  // Get all country
  getAllCountry() {
    return this.http.get(`${this.api_host}country`);
  }
}