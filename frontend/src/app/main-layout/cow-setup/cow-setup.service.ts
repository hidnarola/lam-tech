import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()

export class CowSetupService {

  private api_host: any = environment.API_URL;
  constructor(private http: HttpClient) { }

  private headers = new Headers();

  get(apiUrl) {
    const url = `${this.api_host}` + `${apiUrl}`;
    return this.http.get(url);
  }
  get_by_post(apiUrl,data) {
    const url = `${this.api_host}` + `${apiUrl}`;
    return this.http.post(url, data);
  }
  getParam(apiUrl, data) {
    const url = this.api_host + apiUrl;
    let Params = new HttpParams();
    for (const key in data) {
      Params = Params.append(key, data[key]);
    }
    // Begin assigning parameters
    return this.http.get(url, { params: Params });
  }
  // save company details
  saveCompanyDetails(data: any) {
    return this.http.put(`${this.api_host}company`, data);
  }
  // Get all country
  getAllCountry() {
    return this.http.get(`${this.api_host}country`);
  }
  // get company detail
  getCompanyDetails() {
    return this.http.get(`${this.api_host}company`);
  }
  // Get all region
  getAllRegion() {
    return this.http.get(`${this.api_host}region`);
  }
  // Add farm
  addNewFarm(data) {
    return this.http.post(`${this.api_host}company/farm`, data);
  }
}