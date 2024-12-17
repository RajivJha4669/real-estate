import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageMeta {
  title: string;
  description?: string;
  keywords?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private titleService: Title, private metaService: Meta) {}

  updateMeta(meta: PageMeta): void {
    if (meta.title) {
      this.titleService.setTitle(meta.title);
    }
    if (meta.description) {
      this.metaService.updateTag({
        name: 'description',
        content: meta.description,
      });
    }
    if (meta.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: meta.keywords });
    }
  }
}
