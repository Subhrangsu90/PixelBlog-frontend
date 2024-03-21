import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-darkmodetoggle",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./darkmodetoggle.component.html",
  styleUrl: "./darkmodetoggle.component.css",
})
export class DarkmodetoggleComponent implements OnInit {
  darkMode: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.applyDarkMode();
    }
  }

  toggleMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isPlatformBrowser(this.platformId)) {
      this.applyDarkMode();
    }
  }

  private applyDarkMode() {
    document.body.classList.toggle("dark-mode", this.darkMode);
    document.body.classList.toggle("light-mode", !this.darkMode);
  }
}
