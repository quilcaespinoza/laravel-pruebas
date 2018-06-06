import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const id_api = 'http://172.16.11.71/Monitor/getDiskId_api.php';
const diskData_api = 'http://172.16.11.71/Monitor/getDisksState_api.php';
@Injectable()
export class DiscosService {

  constructor( private httpcli: HttpClient) { }
  getIds(): Observable<any> {
    return this.httpcli.get<any>(id_api);
  }
  getDiskData(id): Observable<any> {
    return this.httpcli.post<any>(diskData_api, id);
  }
}
