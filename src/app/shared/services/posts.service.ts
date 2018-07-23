import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + '/posts');
  }
}
