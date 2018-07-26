import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsComponent } from './movements/movements.component';
import { MovementDetailsComponent } from './movement-details/movement-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovementsComponent, MovementDetailsComponent]
})
export class MovementModule { }
