import { Component, Input, Output, EventEmitter } from "@angular/core";
import { HomeComponent } from "../Home/home.component";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../Services/auth.service";

@Component({
	selector: "app-blog",
	standalone: true,
	imports: [HomeComponent, CommonModule],
	templateUrl: "./blog.component.html",
	styleUrl: "./blog.component.css",
})
export class BlogComponent {
	isAdmin: boolean = true;
	@Input() image: any;
	@Input() title: string;
	@Input() description: string;
	@Input() date: string;
	@Input() readingTime: string;
	@Output() readMoreClicked = new EventEmitter<void>();
	@Output() deleteClicked: EventEmitter<void> = new EventEmitter<void>();
	@Output() editClicked = new EventEmitter<void>();
	loggedIn: boolean = false;
	userDetails: any;
	role: any;

	constructor(private router: Router, private authService: AuthService) {
		this.image = "";
		this.title = "";
		this.description = "";
		this.date = "";
		this.readingTime = "";
	}

	ngOnInit() {
		// Check if the user is an admin (you can implement your own logic here)
		this.fetchLoginStatus();
	}

	fetchLoginStatus() {
		if (typeof sessionStorage !== "undefined") {
			this.loggedIn = !!sessionStorage.getItem("loggedIn");
		}
		this.checkAdminOrNot();
	}

	onReadMoreClick() {
		this.readMoreClicked.emit();
	}

	deleteBlog(): void {
		// Emit an event to notify the parent component that the delete button was clicked
		this.deleteClicked.emit();
	}

	checkAdminOrNot() {
		this.userDetails = this.authService.getUserDetails();
		if (this.userDetails) {
			const role = this.userDetails.role;
			console.log("Role:", role);
			this.isAdmin = role === "admin";
		} else {
			console.log("User details not available");
			this.isAdmin = false; // Assuming non-authenticated users are not admins
		}
	}

	editBlog() {
		this.editClicked.emit();
		console.log("Edit icon clicked");
	}
}
