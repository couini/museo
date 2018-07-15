import { City } from './city';
import {Injectable} from '@angular/core';

@Injectable()
export class Museum {
  id: number;
  name: string;
  address: string;
  picture: string;
  city: City;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.address = obj && obj.address || null;
    this.picture = obj && obj.picture || null;
    this.city = obj && obj.city || new City();
  }
}
