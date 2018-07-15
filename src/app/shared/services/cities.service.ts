import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.apiUrl + '/cities');
  }
}
