import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Painting} from '../models/painting';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(this.apiUrl + '/artists');
  }
}
