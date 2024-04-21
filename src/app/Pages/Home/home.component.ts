import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BlogComponent } from "../Blog/blog.component";
import { CommonModule } from "@angular/common";
import { BlogsService } from "../../Services/blogs.service";
import { FormsModule, NgForm } from "@angular/forms";
import { AppComponent } from "../../app.component";
import { Blog } from "../../blog";
import { SpainerComponent } from "../../Common/Spainer/spainer.component";
import { DialogModule } from "primeng/dialog";
import { RegistrationModalComponent } from "../../Modal/registration-modal/registration-modal.component";
import { LoginModalComponent } from "../../Modal/login-modal/login-modal.component";
import { AuthService } from "../../Services/auth.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		BlogComponent,
		CommonModule,
		FormsModule,
		SpainerComponent,
		DialogModule,
		RegistrationModalComponent,
		LoginModalComponent,
	],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
	blogs: any = [];
	isRegistrationModalVisible: boolean = false;
	isLoginModalVisible: boolean = false;
	loggedIn: boolean = false;

	name: any;
	userDetails: any;

	constructor(
		private router: Router,
		private blogService: BlogsService,
		private appComponent: AppComponent,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.fetchLoginStatus();
		this.fetchBlogs();
		this.getUserDetails();
	}

	fetchLoginStatus() {
		if (typeof sessionStorage !== "undefined") {
			this.loggedIn = !!sessionStorage.getItem("loggedIn");
		}
	}

	getUserDetails() {
		this.userDetails = this.authService.getUserDetails();
		if (this.userDetails) {
			this.name = this.userDetails.name;
			console.log("Detail:", this.name);
		}
	}

	getFirstWord(name: string): string {
		// Check if name exists and is not empty
		if (name && name.trim() !== "") {
			// Split the name by spaces and return the first part
			return name.trim().split(" ")[0];
		}
		return ""; // Return empty string if name is empty
	}

	fetchBlogs() {
		this.blogService.getBlogs().subscribe((data: any) => {
			this.blogs = data.data.slice(0, 2);
			console.log(this.blogs);
		});
	}

	truncateDescription(description: string): string {
		return description.length > 100
			? description.substring(0, 100) + "..."
			: description;
	}

	async openBlog(blog: Blog): Promise<void> {
		// console.log("Opening blog with index: ", blog.id);
		this.router.navigate(["/detailsblog", blog.id]);
	}

	scrollToSubscribe() {
		// this.appComponent.scrollToSubscribe();
		this.router.navigate(["/blogs"]);
	}

	submitContactForm(contactForm: NgForm) {
		contactForm.resetForm();
	}

	showRegistritionModal() {
		this.isRegistrationModalVisible = true;
	}

	closeRegistrationModal() {
		this.isRegistrationModalVisible = false;
	}

	handleLoginSuccess() {
		this.loggedIn = true;
		sessionStorage.setItem("loggedIn", "true");
	}

	//   handleLogout() {
	//     this.loggedIn = false;
	//     sessionStorage.removeItem('loggedIn');
	// }
}
