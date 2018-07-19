import { Injectable } from '@angular/core';

@Injectable()
export class Post {
  id: number;
  title: string;
  summary: string;
  content: string;
  published_at: number;
  picture: string;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.title = obj && obj.title || null;
    this.summary = obj && obj.summary || null;
    this.content = obj && obj.content || null;
    this.published_at = obj && Number(obj.published_at) || null;
    this.picture = obj && obj.picture || null;
  }
}
