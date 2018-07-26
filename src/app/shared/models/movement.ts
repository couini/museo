import { Injectable } from '@angular/core';
import { Painting } from './painting';

@Injectable()
export class Movement {
  id: number;
  name: string;
  dates: string;
  description: string;
  picture: string;
  period: string;
  chronology: string;
  paintings: Painting[];

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.dates = obj && obj.dates || null;
    this.description = obj && obj.description || null;
    this.picture = obj && obj.picture || null;
    this.period = obj && obj.period || null;
    this.chronology = obj && obj.chronology || null;
    this.paintings = (obj && obj.paintings) ? obj.paintings.map(painting => new Painting(painting)) : [];
  }
}
