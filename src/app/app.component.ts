// import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { ScrollToTopComponent } from './Common/ScrollToTop/scroll-to-top/scroll-to-top.component';
import { HeaderComponent } from './Common/Header/header.component';
import { FooterComponent } from './Common/Footer/footer.component';
import { DarkmodetoggleComponent } from './Common/DarkModeToggle/darkmodetoggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ScrollToTopComponent,
    HeaderComponent,
    DarkmodetoggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentYear!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  scrollToSubscribe() {
    const footer = document.getElementById('subscribe');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isErrorPage(): boolean {
    return this.router.url.includes('404');
  }
}
