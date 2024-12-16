import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  imports: [RouterLink],
})
export class FeatureComponent {
  projects = [
    {
      id: 1,
      title: 'BHAGWATI ELYSIA I',
      description: 'Modern building nearing completion (December 2024).',
      location: 'Plot-39,Sector 5, Pushpak Nagar (Dapoli)',
      imageUrl: 'assets/image/elsiya-1.png',
      brochureUrl: 'assets/pdf/ELYSIA I WITH ELEVATION.pdf',
      animation: 'fade-right',
    },
    {
      id: 2,
      title: 'BHAGWATI ELYSIA II',
      description: 'Proposed Residential and Commercial Building',
      location: 'Plot-20, Sector 04, Pushpak Nagar (Dapoli)',
      imageUrl: 'assets/image/hero.jpg',
      brochureUrl: 'assets/pdf/ELYSIA II WITH ELEVATION.pdf',
      animation: 'fade-right',
    },
    {
      id: 3,
      title: 'BHAGWATI ELYSIA III',
      description: 'Proposed Residential and Commercial Building',
      location: 'Plot-39,Sector 5, Pushpak Nagar (Navi Mumbai)',
      imageUrl: 'assets/image/elsiya-3.png',
      brochureUrl: 'assets/pdf/ELYSIA III WITH ELEVATION.pdf',
      animation: 'fade-left',
    },
    {
      id: 4,
      title: 'BHAGWATI ELYSIA IV',
      description: 'Proposed Residential and Commercial Building',
      location: 'Plot-27,Sector 5, Pushpak Nagar (Dapoli)',
      imageUrl: 'assets/image/elsiya-4.png',
      brochureUrl: 'assets/pdf/ELYSIA IV WITH ELEVATION.pdf',
      animation: 'fade-left',
    },
  ];
}
