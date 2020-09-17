import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Config } from './config.enum';
import { HelloData } from './models/hello';

@Injectable({
  providedIn: 'root'
                 })
export class ApiService {

  constructor(private http: HttpClient) { }

  helloUrl = Config.API_HOST + "/api/data";

  getHello(): Observable<string> {
    return this.http.get<HelloData>(this.helloUrl).pipe(
      tap(response => console.log(response)),
      map((response: HelloData) => { return response.data })
    );
  }
}
