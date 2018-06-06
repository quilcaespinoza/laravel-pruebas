import { Injectable } from '@angular/core';
// import {SessionStorageService} from 'ngx-webstorage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const login_api = 'http://172.16.11.71/Monitor/signup_api.php';
let headers;

@Injectable()
export class LoginService {
  constructor( private http: HttpClient) { }
  signup( data ): Observable<any> {

     headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
     return this.http.post<any>(login_api, data, { headers: headers } );
  }
}
