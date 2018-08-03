import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [],
  exports: [
    NgbModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
