import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Aos.init({});
  }
  title = 'booming-back';
}
