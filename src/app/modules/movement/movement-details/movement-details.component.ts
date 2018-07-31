import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movement } from '../../../shared/models/movement';
import { MovementsService } from '../../../shared/services/movements.service';
import { Painting } from '../../../shared/models/painting';
import { Artist } from '../../../shared/models/artist';

@Component({
  selector: 'app-movement-details',
  templateUrl: './movement-details.component.html',
  styleUrls: ['./movement-details.component.scss']
})
export class MovementDetailsComponent implements OnInit {

  movement: Movement;
  movementId: number;
  paintings: Painting[] = [];
  artists: Artist[] = [];

  constructor(
    private route: ActivatedRoute,
    private movementService: MovementsService
  ) { }

  ngOnInit() {

    // Get the movement ID based on the ID params in the URl
    this.route.params.subscribe(params => {
      this.movementId = params['id'];
    });

    this.getMovement();
  }

  getMovement() {
    this.movementService.show(this.movementId).subscribe((movement: Movement) => {
      this.movement = movement;

      this.paintings = movement.paintings; // Get the related paintings to the movement
      this.artists = movement.artists; // Get the related artists to the movement
    });
  }

}
