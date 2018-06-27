import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Painting} from '../models/painting';
import {Artist} from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPaintings(): Observable<Painting[]> {
    return this.httpClient.get<Painting[]>(this.apiUrl + '/paintings');
  }
}
