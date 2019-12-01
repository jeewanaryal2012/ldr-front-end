import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this._httpClient.get("/test");
  }
}
