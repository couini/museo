import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { MovementsComponent } from './movements/movements.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MovementsComponent]
})
export class MovementModule { }
