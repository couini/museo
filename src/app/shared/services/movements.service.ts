import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Movement } from '../models/movement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMovements(): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(this.apiUrl + '/movements')
      .pipe(
        map((response: Movement[]) => {
          return response.map((movement: Movement) => {
            return new Movement(movement);
          });
        })
      );
  }

  show(id: number): Observable<Movement> {
    return this.httpClient.get<Movement>(this.apiUrl + '/movements/' + id)
      .pipe(
        map((movement: Movement) => {
          return new Movement(movement);
        })
      );
  }
}
