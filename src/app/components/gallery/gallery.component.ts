import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { NgxMasonryOptions as MasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  @Input() data;
  @Input() type;

  public options: MasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 15,
  };

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  ngAfterViewInit() {
    console.log(this.data);
  }

}
