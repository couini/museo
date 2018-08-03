import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Movement } from '../../../shared/models/movement';
import { MovementsService } from '../../../shared/services/movements.service';
import {hasOwnProperty} from 'tslint/lib/utils';

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

      _.forEach(movements, (movement: Movement, index) => {

        // Check if a movement has a movement parent or children
        const noParent = !_.isEmpty(movement.parent);
        const noChildren = !_.isEmpty(movement.children);

        // If a movement has no parent, remove the parent property
        if (!noParent) {
          delete movement.parent;
        }

        // If a movement has no children, remove the children property
        if (!noChildren) {
          delete movement.children;
        }
      });

      this.movements = movements;

      console.log(this.movements);

    });
  }

}
