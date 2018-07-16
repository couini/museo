import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class SharedModule { }
