import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { ScrollTopComponent } from '../../common/scroll-top/scroll-top.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollTopComponent],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
