import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  ourFacilities = [
    {
      img: 'assets/image/parking-space.jpg',
      heading: 'Parking Space',
      title: 'Secure & Spacious Parking',
      description: 'Shaded, secure, and spacious car parking.',
    },
    {
      img: 'assets/image/kids-play-area.jpg',
      heading: 'Kids Play Area',
      title: 'Fun Space for Kids',
      description: 'Safe and exciting play zones for children.',
    },
    {
      img: 'assets/image/swimming-pool.jpg',
      heading: 'Swimming Pool',
      title: 'Relax & Refresh',
      description: 'Clean and well-maintained swimming pools.',
    },
    {
      img: 'assets/image/spacious-spaces.jpg',
      heading: 'Spacious Living Areas',
      title: 'Roomy Living Spaces',
      description: 'Ample space for relaxation and gatherings.',
    },
    {
      img: 'assets/image/kitchen.jpg',
      heading: 'Modern Kitchens',
      title: 'Functional Kitchens',
      description: 'Efficient and user-friendly kitchen layouts.',
    },
    {
      img: 'assets/image/elevator-staircase.jpg',
      heading: 'Elevators and Staircases',
      title: 'Easy Floor Access',
      description: 'Well-maintained lifts and staircases.',
    },
    {
      img: 'assets/image/security.jpg',
      heading: 'Secure Entrances',
      title: 'Safe Entrances',
      description: 'Gated and secure entryways.',
    },
    {
      img: 'assets/image/balconies.jpg',
      heading: 'Balconies',
      title: 'Scenic Balconies',
      description: 'Relax with beautiful outdoor views.',
    },
  ];
}
