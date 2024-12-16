import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgClass, RouterLink],
})
export class HeaderComponent {
  isScrolled = false;
  isDashboard = false;

  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events.subscribe(() => {
      this.isDashboard = this.router.url.startsWith('/dashboard');
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  navigateOrScroll(sectionId: string) {
    this.scrollService.navigateOrScroll(sectionId, this.isDashboard);
  }
}
