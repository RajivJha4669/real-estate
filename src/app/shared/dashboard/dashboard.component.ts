import { NearbyAreaComponent } from './nearby-area/nearby-area.component';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ScrollTopComponent } from '../../common/scroll-top/scroll-top.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeatureComponent,
    ContactUsComponent,
    NearbyAreaComponent,
    ServicesComponent,
    OurPhilosophyComponent,
    ScrollTopComponent,
  ],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
