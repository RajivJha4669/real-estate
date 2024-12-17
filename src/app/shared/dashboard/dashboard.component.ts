import { NearbyAreaComponent } from './nearby-area/nearby-area.component';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { MetaService } from '../../common/services/meta.service';

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
  constructor(
    private titleService: Title,
    private metaService: MetaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.metaService.updateMeta(data);
    });
  }
}
