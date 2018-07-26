import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';

import { MovementsComponent } from './movements/movements.component';
import { MovementDetailsComponent } from './movement-details/movement-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    MovementsComponent,
    MovementDetailsComponent
  ],
  exports: [
    MovementsComponent,
    MovementDetailsComponent
  ]
})
export class MovementModule { }
