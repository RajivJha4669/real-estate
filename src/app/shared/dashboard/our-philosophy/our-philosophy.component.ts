import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-philosophy',
  templateUrl: './our-philosophy.component.html',
  styleUrls: ['./our-philosophy.component.css'],
})
export class OurPhilosophyComponent implements OnInit {
  textArray: string[] = [
    'Contemporary Real Estate',
    'Conventional design',
    'Affordable Homes',
    'Unimmaginative Living spaces',
  ];
  typingDelay: number = 100;
  erasingDelay: number = 100;
  newTextDelay: number = 2000;
  textArrayIndex: number = 0;
  charIndex: number = 0;
  typedText: string = '';
  isTyping: boolean = false;

  ngOnInit(): void {
    if (this.textArray.length) {
      setTimeout(() => this.type(), this.newTextDelay + 250);
    }
  }

  type(): void {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      this.isTyping = true;
      this.typedText += this.textArray[this.textArrayIndex].charAt(
        this.charIndex
      );
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      this.isTyping = false;
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }

  erase(): void {
    if (this.charIndex > 0) {
      this.isTyping = true;
      this.typedText = this.textArray[this.textArrayIndex].substring(
        0,
        this.charIndex - 1
      );
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.isTyping = false;
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) this.textArrayIndex = 0;
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }
}
