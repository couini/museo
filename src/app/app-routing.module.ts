import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArtistPreviewComponent } from './modules/artist/components/artist-preview/artist-preview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'artist/:id',
    component: ArtistPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
