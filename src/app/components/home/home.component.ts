import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import Packery from 'packery';

import {ArtistsService} from '../../shared/services/artists.service';
import {PaintingsService} from '../../shared/services/paintings.service';
import {MuseumsService} from '../../shared/services/museums.service';
import {CitiesService} from '../../shared/services/cities.service';

import {Artist} from '../../shared/models/artist';
import {Painting} from '../../shared/models/painting';
import {City} from '../../shared/models/city';
import {Museum} from '../../shared/models/museum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('grid') grid;

  artists: Artist[] = [];
  paintings: Painting[] = [];
  city: City;
  museums: Museum[] = [];

  constructor(
    private artistService: ArtistsService,
    private paintingService: PaintingsService,
    private cityService: CitiesService,
    private museumService: MuseumsService
  ) { }

  ngOnInit() {
    this.getArtists();
    this.getPaintings();
    this.getRandomCity();
    this.getMuseums();
  }

  ngAfterViewInit() {
    /*let packery = new Packery(this.grid.nativeElement, {
      itemSelector: '.grid-item'
    });*/

    console.log(this.grid);
  }

  getArtists() {
    this.artistService.getArtists().subscribe(
      (artists: Artist[]) => {
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

  getRandomCity() {
   this.cityService.getCities().subscribe((cities: City[]) => {
     this.city = cities[Math.floor(Math.random() * cities.length)];
   });
  }

  getMuseums() {
    this.museumService.getMuseums().subscribe((museums: Museum[]) => {
      this.museums = museums;
      console.log(this.museums);
    });
  }

}
