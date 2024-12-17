import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ScrollService } from '../../common/services/scroll.service';
import { filter } from 'rxjs';
import { MetaService } from '../../common/services/meta.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule],
})
export class DetailsComponent implements OnInit {
  project: any;
  selectedImage: string = '';

  projectDetails = [
    {
      id: 1,
      name: 'BHAGWATI ELYSIA I',
      description: 'Modern building nearing completion (December 2024).',
      location: 'Plot-39, Sector 5, Pushpak Nagar (Dapoli)',
      details: {
        type: 'CIDCO Tender Plot',
        storey: 'G+12 Storey Project',
        projects: [
          {
            bhk: '2BHK',
            price: '81.00 L + Taxes (Taxes Stamp Duty & Regis.)',
          },
        ],
        possession: 'Dec 2024',
        parking: '1 Covered Stack Parking Including',
        basicDetails: [
          { title: 'Bedrooms', iconPath: 'assets/svg/bed.svg' },
          { title: 'Bathrooms', iconPath: 'assets/svg/bath.svg' },
          {
            title: 'Living / Dining Rooms',
            iconPath: 'assets/svg/fireplace.svg',
          },
          { title: 'Kitchen', iconPath: 'assets/svg/restaurant.svg' },
          { title: 'Natural Terrace', iconPath: 'assets/svg/terrace.svg' },
          { title: 'Balcony', iconPath: 'assets/svg/balcony.svg' },
        ],
        amenities: [
          { name: 'Parking', iconPath: 'assets/svg/parking.svg' },
          { name: 'Swimming Pool', iconPath: 'assets/svg/swimmer.svg' },
          { name: 'Kids Play Area', iconPath: 'assets/svg/baseball.svg' },
          {
            name: 'Fitness Center',
            iconPath: 'assets/svg/dumbbell-fitness.svg',
          },
        ],
      },
      brochureLink: 'assets/pdf/ELYSIA I WITH ELEVATION.pdf',
      images: [
        'assets/image/elsiya-1.png',
        'assets/image/elsysia-1-1.png',
        'assets/image/elsysia-1-2.png',
        'assets/image/elsysia-1-3.png',
      ],
      animation: 'fade-right',
    },
    {
      id: 2,
      name: 'BHAGWATI ELYSIA II',
      description: 'Proposed Residential and Commercial Building',
      location: 'Plot-20, Sector 04, Pushpak Nagar (Dapoli)',
      details: {
        type: 'CIDCO TP Plot',
        projects: [
          {
            bhk: '1BHK',
            price: '48.19 L + Taxes (Stamp Duty, Regis., GST)',
          },
          {
            bhk: '2BHK',
            price: '67.95 L + Taxes (Stamp Duty, Regis., GST)',
          },
        ],
        possession: 'Dec 2025',
        parking: '2BHK including 1 Covered Stack Parking',
        basicDetails: [
          { title: 'Bedrooms', iconPath: 'assets/svg/bed.svg' },
          { title: 'Bathrooms', iconPath: 'assets/svg/bath.svg' },
          {
            title: 'Living / Dining Rooms',
            iconPath: 'assets/svg/fireplace.svg',
          },
          { title: 'Kitchen', iconPath: 'assets/svg/restaurant.svg' },
          { title: 'Natural Terrace', iconPath: 'assets/svg/terrace.svg' },
          { title: 'Balcony', iconPath: 'assets/svg/balcony.svg' },
        ],
        amenities: [
          { name: 'Parking', iconPath: 'assets/svg/parking.svg' },
          { name: 'Swimming Pool', iconPath: 'assets/svg/swimmer.svg' },
          { name: 'Kids Play Area', iconPath: 'assets/svg/baseball.svg' },
          {
            name: 'Fitness Center',
            iconPath: 'assets/svg/dumbbell-fitness.svg',
          },
        ],
      },
      brochureLink: 'assets/pdf/ELYSIA II WITH ELEVATION.pdf',
      images: [
        'assets/image/hero.jpg',
        'assets/image/elsysia-2-1.png',
        'assets/image/elsysia-2-2.png',
        'assets/image/elsysia-2-3.png',
      ],
      animation: 'fade-right',
    },
    {
      id: 3,
      name: 'BHAGWATI ELYSIA III',
      description: 'Proposed Residential and Commercial Building',
      location: 'Plot-39, Sector 5, Pushpak Nagar (Navi Mumbai)',
      details: {
        type: 'CIDCO Tender Plot',
        storey: 'G+12 Storey Project',
        projects: [
          {
            bhk: '1BHK',
            price: '47.44 L + Taxes (Stamp Duty, Regis., GST)',
          },
          {
            bhk: '2BHK',
            price: '75.15 L + Taxes (Stamp Duty, Regis., GST)',
          },
          {
            bhk: '3BHK',
            price: 'Price upon request',
          },
        ],
        possession: 'June 2027',
        parking: '2BHK including 1 Covered Stack Parking',
        basicDetails: [
          { title: 'Bedrooms', iconPath: 'assets/svg/bed.svg' },
          { title: 'Bathrooms', iconPath: 'assets/svg/bath.svg' },
          {
            title: 'Living / Dining Rooms',
            iconPath: 'assets/svg/fireplace.svg',
          },
          { title: 'Kitchen', iconPath: 'assets/svg/restaurant.svg' },
          { title: 'Natural Terrace', iconPath: 'assets/svg/terrace.svg' },
          { title: 'Balcony', iconPath: 'assets/svg/balcony.svg' },
        ],
        amenities: [
          { name: 'Parking', iconPath: 'assets/svg/parking.svg' },
          { name: 'Swimming Pool', iconPath: 'assets/svg/swimmer.svg' },
          { name: 'Kids Play Area', iconPath: 'assets/svg/baseball.svg' },
          {
            name: 'Fitness Center',
            iconPath: 'assets/svg/dumbbell-fitness.svg',
          },
        ],
      },
      brochureLink: 'assets/pdf/ELYSIA III WITH ELEVATION.pdf',
      images: [
        'assets/image/elsiya-3.png',
        'assets/image/elsysia-3-1.png',
        'assets/image/elsysia-3-2.png',
        'assets/image/elsysia-3-3.png',
      ],
      animation: 'fade-right',
    },
    {
      id: 4,
      name: 'BHAGWATI ELYSIA IV',
      description: 'Proposed Residential and Commercial Building',
      location: 'Plot-27, Sector 5, Pushpak Nagar (Dapoli)',

      details: {
        type: 'CIDCO Tender Plot',
        storey: 'G+13 Storey Project',
        projects: [
          {
            bhk: '1BHK',
            price: '47.15 L + Taxes (Stamp Duty, Regis., GST)',
          },
          {
            bhk: '2BHK',
            price: '68.36 L + Taxes (Stamp Duty, Regis., GST)',
          },
        ],
        possession: 'June 2027',
        parking: '2BHK including 1 Covered Stack Parking',
        basicDetails: [
          { title: 'Bedrooms', iconPath: 'assets/svg/bed.svg' },
          { title: 'Bathrooms', iconPath: 'assets/svg/bath.svg' },
          {
            title: 'Living / Dining Rooms',
            iconPath: 'assets/svg/fireplace.svg',
          },
          { title: 'Kitchen', iconPath: 'assets/svg/restaurant.svg' },
          { title: 'Natural Terrace', iconPath: 'assets/svg/terrace.svg' },
          { title: 'Balcony', iconPath: 'assets/svg/balcony.svg' },
        ],
        amenities: [
          { name: 'Parking', iconPath: 'assets/svg/parking.svg' },
          { name: 'Swimming Pool', iconPath: 'assets/svg/swimmer.svg' },
          { name: 'Kids Play Area', iconPath: 'assets/svg/baseball.svg' },
          {
            name: 'Fitness Center',
            iconPath: 'assets/svg/dumbbell-fitness.svg',
          },
        ],
      },
      brochureLink: 'assets/pdf/ELYSIA IV WITH ELEVATION.pdf',
      images: [
        'assets/image/elsiya-4.png',
        'assets/image/elysia-4-1.png',
        'assets/image/elysia-4-2.png',
        'assets/image/elysia-4-3.png',
      ],
      animation: 'fade-right',
    },
  ];

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projectDetails.find((p) => p.id === id);
    if (this.project && this.project.images) {
      this.selectedImage = this.project.images[0];
    }
    this.route.data.subscribe((data: any) => {
      this.metaService.updateMeta(data);
    });
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
  isDashboard = false;

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private route: ActivatedRoute,
    private metaService: MetaService
  ) {
    this.router.events.subscribe(() => {
      this.isDashboard = this.router.url.startsWith('/dashboard');
    });
  }

  navigateOrScroll(sectionId: string) {
    this.scrollService.navigateOrScroll(sectionId, this.isDashboard);
  }
}
