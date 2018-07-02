import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import {ArtistsService} from '../../shared/services/artists.service';
import {PaintingsService} from '../../shared/services/paintings.service';
import {Artist} from '../../shared/models/artist';
import {Painting} from '../../shared/models/painting';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: Artist[] = [];
  paintings: Painting[] = [];

  constructor(
    private artistService: ArtistsService,
    private paintingService: PaintingsService
  ) { }

  ngOnInit() {
    this.getArtists();
    this.getPaintings();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(
      (artists: Artist[]) => {
        console.log(artists);
        // Get only the first four artists of the list
        this.artists = _.slice(artists, 0, 4);
      }
    );
  }

  getPaintings() {
    this.paintingService.getPaintings().subscribe(
      (paintings: Painting[]) => {
        // Get only the first four paintings of the list
        this.paintings = _.slice(paintings, 0, 4);
      }
    );
  }

}
