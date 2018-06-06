import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const api_url = 'http://172.16.11.71/Monitor/getId_api.php';
const data_url = 'http://172.16.11.71/Monitor/getPing_api.php';
@Injectable()
export class PingService {

  constructor(private http: HttpClient) { }
  getIdPing(): Observable<any> {
    // this.headers.set
    return this.http.get<any>(api_url);
  }
  getDataPing(id: number): Observable<any> {

    return this.http.post<any>(data_url, id);
  }
}
