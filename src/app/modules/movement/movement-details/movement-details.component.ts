import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movement } from '../../../shared/models/movement';
import { MovementsService } from '../../../shared/services/movements.service';

@Component({
  selector: 'app-movement-details',
  templateUrl: './movement-details.component.html',
  styleUrls: ['./movement-details.component.scss']
})
export class MovementDetailsComponent implements OnInit, AfterViewInit {

  movement: Movement;
  movementId: number;

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

  ngAfterViewInit() {

  }

  getMovement() {
    this.movementService.show(this.movementId).subscribe((movement: Movement) => {
      this.movement = movement;
      console.log(this.movement);
    });
  }

}
