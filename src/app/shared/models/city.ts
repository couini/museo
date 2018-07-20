import { Injectable } from '@angular/core';
import { Museum } from './museum';

@Injectable()
export class City {
  id: number;
  name: string;
  picture: string;
  country: string;
  museums: Museum[];

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.picture = obj && obj.picture || null;
    this.country = obj && obj.country || null;
    this.museums = (obj && obj.museums) ? obj.museums.map(museum => new Museum(museum)) : [];
  }
}
