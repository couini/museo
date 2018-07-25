import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Museum } from '../models/museum';

@Injectable({
  providedIn: 'root'
})
export class MuseumsService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getMuseums(): Observable<Museum[]> {
    return this.httpClient.get<Museum[]>(this.apiUrl + '/museums');
  }
}
