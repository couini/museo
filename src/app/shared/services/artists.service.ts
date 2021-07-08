import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  apiUrl = environment.apiUrl;
  nodeApiUrl = environment.nodeApiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiUrl + '/artists')
      .pipe(
        map((response: Artist[]) => {
          return response.map((artist: Artist) => {
            return new Artist(artist);
          });
        })
      );
  }

  getArtist(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(this.apiUrl + '/artists/' + id)
      .pipe(
        map((artist: Artist) => {
          return new Artist(artist);
        })
      );
  }

}
