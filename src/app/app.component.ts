// import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, HostListener } from "@angular/core";
import { CommonModule, ViewportScroller } from "@angular/common";
import {
	RouterLink,
	RouterLinkActive,
	RouterOutlet,
	Router,
	ActivatedRoute,
	NavigationEnd,
} from "@angular/router";
import { ScrollToTopComponent } from "./Common/ScrollToTop/scroll-to-top/scroll-to-top.component";
import { HeaderComponent } from "./Common/Header/header.component";
import { filter } from "rxjs/operators";
import { DarkmodetoggleComponent } from "./Common/DarkModeToggle/darkmodetoggle.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		ScrollToTopComponent,
		HeaderComponent,
		DarkmodetoggleComponent,
	],
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	currentYear!: number;
	scrolled: boolean = false;
	constructor(
		private router: Router,
		private viewportScroller: ViewportScroller
	) {}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		this.scrolled = window.scrollY > 0;
	}

	ngOnInit(): void {
		this.currentYear = new Date().getFullYear();
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				this.viewportScroller.scrollToPosition([0, 0]);
			});
	}

	scrollToSubscribe() {
		const footer = document.getElementById("subscribe");
		if (footer) {
			footer.scrollIntoView({ behavior: "smooth" });
		}
	}

	isErrorPage(): boolean {
		return this.router.url.includes("404");
	}
}
