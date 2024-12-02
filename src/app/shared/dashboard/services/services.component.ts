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
      heading: 'Parking Space',
      title: 'Secure & Spacious Parking',
      description: 'Shaded, secure, and spacious car parking.',
    },
    {
      heading: 'Kids Play Area',
      title: 'Fun Space for Kids',
      description: 'Safe and exciting play zones for children.',
    },
    {
      heading: 'Swimming Pool',
      title: 'Relax & Refresh',
      description: 'Clean and well-maintained swimming pools.',
    },
    {
      heading: 'Spacious Living Areas',
      title: 'Roomy Living Spaces',
      description: 'Ample space for relaxation and gatherings.',
    },
    {
      heading: 'Modern Kitchens',
      title: 'Functional Kitchens',
      description: 'Efficient and user-friendly kitchen layouts.',
    },
    {
      heading: 'Elevators and Staircases',
      title: 'Easy Floor Access',
      description: 'Well-maintained lifts and staircases.',
    },
    {
      heading: 'Secure Entrances',
      title: 'Safe Entrances',
      description: 'Gated and secure entryways.',
    },
    {
      heading: 'Balconies',
      title: 'Scenic Balconies',
      description: 'Relax with beautiful outdoor views.',
    },
  ];
}
