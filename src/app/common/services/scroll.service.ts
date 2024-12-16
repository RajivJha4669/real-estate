import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {}

  scrollTo(sectionId: string) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navigateOrScroll(sectionId: string, isDashboard: boolean) {
    if (isDashboard) {
      this.scrollTo(sectionId);
    } else {
      this.router.navigate(['/dashboard']).then(() => {
        setTimeout(() => this.scrollTo(sectionId), 100);
      });
    }
  }
}
