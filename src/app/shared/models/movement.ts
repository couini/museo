import {Injectable} from '@angular/core';

@Injectable()
export class Movement {
  id: number;
  name: string;
  period: string;
  description: string;
  picture: string;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.period = obj && obj.period || null;
    this.description = obj && obj.description || null;
    this.picture = obj && obj.picture || null;
  }
}
