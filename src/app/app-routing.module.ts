import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArtistPreviewComponent } from './modules/artist/artist-preview/artist-preview.component';
import { MovementsComponent } from './modules/movement/movements/movements.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'artists/:id',
    component: ArtistPreviewComponent
  },
  {
    path: 'movements',
    component: MovementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
