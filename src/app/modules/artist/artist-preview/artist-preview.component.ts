import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions as MasonryOptions } from 'ngx-masonry';
import * as _ from 'lodash';

import { ArtistsService } from '../../../shared/services/artists.service';
import { Artist } from '../../../shared/models/artist';
import { Movement } from '../../../shared/models/movement';
import { Painting } from '../../../shared/models/painting';

@Component({
  selector: 'app-artist-preview',
  templateUrl: './artist-preview.component.html',
  styleUrls: ['./artist-preview.component.scss']
})
export class ArtistPreviewComponent implements OnInit {

  artistId: number;
  artist: Artist;
  paintings: Painting[] = [];
  movements: Movement[] = [];

  public options: MasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 15
  };

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.artistId = params['id'];
    });

    this.getArtist();
  }

  getArtist() {
    this.artistService.getArtist(this.artistId).subscribe((artist: Artist) => {
      this.artist = artist;

      // Get all the artist's paintings
      _.forEach(this.artist.paintings, (painting: Painting) => {
        const artistPaintings = new Painting(painting);
        this.paintings.push(artistPaintings);

        // Get all the painting's movements
        _.forEach(painting.movements, (movement: Movement) => {
          const paintingsMovements = new Movement(movement);
          this.movements.push(paintingsMovements);
          this.movements = _.uniqBy(this.movements, 'name'); // Remove duplicates movements
        });
      });
    });
  }

}
