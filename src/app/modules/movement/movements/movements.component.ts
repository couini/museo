import { Component, OnInit } from '@angular/core';

import { Movement } from '../../../shared/models/movement';
import {MovementsService} from '../../../shared/services/movements.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  movements: Movement[] = [];

  constructor(
    private movementService: MovementsService
  ) { }

  ngOnInit() {
    this.getAllMovements();
  }

  getAllMovements() {
    this.movementService.getMovements().subscribe((movements: Movement[]) => {
      this.movements = movements;
    });
  }

}
