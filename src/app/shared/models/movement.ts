import {Injectable} from '@angular/core';
import {City} from './city';

@Injectable()
export class Movement {
  id: number;
  name: string;
  dates: string;
  description: string;
  picture: string;
  parent: any;
  children; any;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.dates = obj && obj.dates || null;
    this.description = obj && obj.description || null;
    this.picture = obj && obj.picture || null;
    this.parent = obj && obj.parent || [];
    this.children = obj && obj.children || [];
  }
}
