import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
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

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.firstName = obj && obj.firstName || null;
    this.biography = obj && obj.biography || null;
    this.birthDate = obj && obj.birthDate || null;
    this.deathDate = obj && obj.deathDate || null;
    this.birthPlace = obj && obj.birthPlace || null;
    this.deathPlace = obj && obj.deathPlace || null;
    this.picture = obj && obj.picture || null;
  }
}
