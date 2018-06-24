import {Injectable} from '@angular/core';
import {Artist} from './artist';

@Injectable()
export class Painting {
  id: number;
  name: string;
  year: string;
  description: string;
  technique: string;
  picture: string;
  artist: Artist;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.year = obj && obj.year || null;
    this.description = obj && obj.description || null;
    this.technique = obj && obj.technique || null;
    this.picture = obj && obj.picture || null;
    this.artist = obj && obj.artist || new Artist();
  }
}
