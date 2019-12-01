import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(private _httpClient: HttpClient) { }

  get(url, params?: any): Observable<any> {
    return this._httpClient.get(url);
  }
}
