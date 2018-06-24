import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import {ArtistsService} from '../../shared/services/artists.service';
import {Artist} from '../../shared/models/artist.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: Artist[] = [];

  constructor(
    private artistService: ArtistsService
  ) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(
      (artist: Artist[]) => {
        // Get only the first four artists of the list
        this.artists = _.slice(artist, 0, 4);
      }
    );
  }

}
