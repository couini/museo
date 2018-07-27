import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '../../shared/shared.module';

import { ArtistPreviewComponent } from './artist-preview/artist-preview.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMasonryModule,
    SharedModule
  ],
  declarations: [ArtistPreviewComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ArtistModule { }
