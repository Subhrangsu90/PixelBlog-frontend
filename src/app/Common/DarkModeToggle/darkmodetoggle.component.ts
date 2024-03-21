import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-darkmodetoggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './darkmodetoggle.component.html',
  styleUrl: './darkmodetoggle.component.css',
})
export class DarkmodetoggleComponent implements OnInit {
  darkMode: boolean = true;

  ngOnInit(): void {
    this.applyDarkMode();
  }

  toggleMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    this.applyDarkMode();
  }

  private applyDarkMode() {
    document.body.classList.toggle('dark-mode', this.darkMode);
    document.body.classList.toggle('light-mode', !this.darkMode);
  }
}
