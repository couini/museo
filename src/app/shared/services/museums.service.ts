import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MuseumsService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

}
