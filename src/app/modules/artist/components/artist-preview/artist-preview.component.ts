import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistsService } from '../../../../shared/services/artists.service';
import { Artist } from '../../../../shared/models/artist';

@Component({
  selector: 'app-artist-preview',
  templateUrl: './artist-preview.component.html',
  styleUrls: ['./artist-preview.component.scss']
})
export class ArtistPreviewComponent implements OnInit {

  artistId: number;
  artist: Artist;

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
      console.log(artist);
    });
  }

}
