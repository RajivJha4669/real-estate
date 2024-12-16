import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isDashboard = false;
  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events.subscribe(() => {
      this.isDashboard = this.router.url.startsWith('/dashboard');
    });
  }

  navigateOrScroll(sectionId: string) {
    this.scrollService.navigateOrScroll(sectionId, this.isDashboard);
  }
}
