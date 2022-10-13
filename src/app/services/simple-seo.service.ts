import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SimpleSeoService {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }


  setSEOTags(title: string, description: string, author: string, image: string): void{
    const sanitizedDescription = description;
    this.titleService.setTitle(title);
    this.metaTagService.addTags([
      {name: 'description', content: sanitizedDescription },
      {name: 'author', content: author },
      {name: 'image', content: image},
      {name: 'og:description', content: sanitizedDescription },
      {name: 'og:author', author },
      {name: 'og:image', content: image},
      {name: 'twitter:card', content: 'summary' },
      {name: 'twitter:title', content: title },
      {name: 'twitter:site', content: 'https://app.wafrn.net' },
      {name: 'twitter:description', content: sanitizedDescription },
      {name: 'twitter:image', content: image},
    ]);    
  }
}
