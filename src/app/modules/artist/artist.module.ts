import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';

import { ArtistPreviewComponent } from './artist-preview/artist-preview.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMasonryModule
  ],
  declarations: [ArtistPreviewComponent]
})
export class ArtistModule { }
