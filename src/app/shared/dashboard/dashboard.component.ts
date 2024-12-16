import { NearbyAreaComponent } from './nearby-area/nearby-area.component';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    HeroComponent,
    FeatureComponent,
    ContactUsComponent,
    NearbyAreaComponent,
    ServicesComponent,
    OurPhilosophyComponent,
  ],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
