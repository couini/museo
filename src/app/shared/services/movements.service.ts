import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Movement } from '../models/movement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getMovements(): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(this.apiUrl + '/movements');
  }
}
