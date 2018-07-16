import {Injectable} from '@angular/core';
import {Painting} from './painting';
import {Movement} from './movement';

@Injectable()
export class Artist {
  id: number;
  name: string;
  firstName: string;
  biography: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  picture: string;
  paintings: Painting[];
  movements: Movement[];

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.firstName = obj && obj.firstName || null;
    this.biography = obj && obj.biography || null;
    this.birthDate = obj && obj.birthDate || null;
    this.deathDate = obj && obj.deathDate || null;
    this.birthPlace = obj && obj.birthPlace || null;
    this.deathPlace = obj && obj.deathPlace || null;
    this.paintings = (obj && obj.paintings) ? obj.paintings.map(painting => new Painting(painting)) : [];
    this.movements = (obj && obj.movements) ? obj.movements.map(movement => new Movement(movement)) : [];
  }
}
