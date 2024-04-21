import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "../Blog/blog.component";
import { BlogsService } from "../../Services/blogs.service";
import { Blog } from "../../blog";
import { SpainerComponent } from "../../Common/Spainer/spainer.component";
import { RegistrationModalComponent } from "../../Modal/registration-modal/registration-modal.component";

@Component({
	selector: "app-blogs",
	standalone: true,
	imports: [
		BlogComponent,
		CommonModule,
		SpainerComponent,
		RegistrationModalComponent,
	],
	templateUrl: "./blogs.component.html",
	styleUrl: "./blogs.component.css",
})
export class BlogsComponent implements OnInit {
	blogs: any = [];
	loading: boolean = true;
	isRegistrationModalVisible: boolean = false;
	update: any;
	loggedIn: boolean = false;

	constructor(private router: Router, private blogsService: BlogsService) {}
	ngOnInit(): void {
		this.fetchBlogs();
	}

	fetchBlogs() {
		this.blogsService.getBlogs().subscribe((data: any) => {
			// console.log(data.data);
			this.blogs = data.data;
		});
		this.update = this.blogs;
	}

	onDeleteBlog(index: number): void {
		const idToDelete = this.blogs[index].id;
		this.blogsService.deleteBlogById(idToDelete).subscribe(() => {
			// Remove the deleted blog from the array
			this.blogs.splice(index, 1);
		});
	}

	editBlog(blogId?: number) {
		this.isRegistrationModalVisible = true;
		if (blogId !== undefined) {
			this.router.navigate(["/blogedit", blogId]);
		} else {
			this.router.navigate(["/blogedit"]);
		}
	}

	// showRegistrationModal() {
	// 	console.log("Edit clicked");
	// 	this.isRegistrationModalVisible = true;
	// }

	truncateDescription(description: string): string {
		return description.length > 100
			? description.substring(0, 100) + "..."
			: description;
	}

	closeRegistrationModal() {
		this.isRegistrationModalVisible = false;
	}

	handleLoginSuccess() {
		this.loggedIn = true;
		sessionStorage.setItem("loggedIn", "true");
	}

	async openBlog(blog: Blog) {
		// console.log("Opening blog with index: ", blog.id);
		this.router.navigate(["/detailsblog", blog.id]);
	}
}
