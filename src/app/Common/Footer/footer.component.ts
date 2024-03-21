import { Component, OnInit } from '@angular/core';
import { ScrollToTopComponent } from '../ScrollToTop/scroll-to-top/scroll-to-top.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollToTopComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  currentYear!: number;

  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  scrollToSubscribe() {
    const footer = document.getElementById('subscribe');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
