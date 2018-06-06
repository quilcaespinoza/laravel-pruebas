import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const idDisk_api = 'http://172.16.11.71/Monitor/getIdCarpetas_api.php';
const dataDisk_api = 'http://172.16.11.71/Monitor/getPathCarpetas_api.php';
@Injectable()
export class CarpetasService {

  constructor(private http: HttpClient ) { }
  getIdCarpetas(): Observable<any> {
    return this.http.get(idDisk_api);
  }

  getDataCarpeta(id: number): Observable<any> {
    return this.http.post(dataDisk_api, id);
  }
}

