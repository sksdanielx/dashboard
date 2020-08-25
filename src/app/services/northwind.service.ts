import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

const URL_BASE = environment.ENDPOINTS.NORTHWIND.urlBase;

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {

  constructor(private http: HttpClient) { }

  getDataTopN(topN: number, dimension: string, order: string) {
    return this.http.get(`${URL_BASE}/TopN/${topN}/${dimension}/${order}`);
  }

  getDimensions() {
    //console.log('assets/json/dimensions.json')
    return this.http.get('assets/json/dimensions.json');
  }
}
