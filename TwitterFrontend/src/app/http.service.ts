import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly PORT = 3000;
  readonly LINK = 'http://localhost'
  readonly CONNECTION = this.LINK + this.PORT;

  constructor(private http: HttpClient) {

  }

  isSessionActive(session: number): Observable<any>{
    return this.http.get(this.CONNECTION + `/sessionActive/`+session);
  }
}