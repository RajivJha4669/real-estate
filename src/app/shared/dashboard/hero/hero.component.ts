import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  fulfilledProjects: number = 0;
  satisfiedCustomers: number = 0;
  yearsOnMarket: number = 0;

  private intervals: any[] = [];

  ngOnInit() {
    this.startCounting('fulfilledProjects', 200, 50);
    this.startCounting('satisfiedCustomers', 100, 50);
    this.startCounting('yearsOnMarket', 15, 15);
  }

  ngOnDestroy() {
    this.intervals.forEach((interval) => clearInterval(interval));
  }

  startCounting(
    property: 'fulfilledProjects' | 'satisfiedCustomers' | 'yearsOnMarket',
    target: number,
    duration: number
  ) {
    const stepTime = duration / target;

    const interval = setInterval(() => {
      if (this[property] < target) {
        this[property]++;
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    this.intervals.push(interval);
  }

  scrollTo(sectionId: string) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
