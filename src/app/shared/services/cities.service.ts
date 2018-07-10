import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getMuseums(): Observable<Museum> {
    return this.httpClient.get<Museum[]>(this.apiUrl + '/cities');
  }
}
