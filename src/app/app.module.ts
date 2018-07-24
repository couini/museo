import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';

import { ArtistModule } from './modules/artist/artist.module';
import { MovementModule } from './modules/movement/movement.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    ArtistModule,
    MovementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
