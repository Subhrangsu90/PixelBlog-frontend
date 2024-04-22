import { Component, Input, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Blog } from "./blog-post";
import { CommonModule } from "@angular/common";
import { BlogsService } from "../../Services/blogs.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "blog-edit",
	standalone: true,
	imports: [ReactiveFormsModule, FormsModule, CommonModule],
	templateUrl: "./blog-edit.component.html",
	styleUrl: "./blog-edit.component.css",
})
export class BlogEditComponent implements OnInit {
	image: string | ArrayBuffer | null = null;
	imageSizeError: string | null = null;
	saveDisabled: boolean = false;
	blog: Blog = {
		title: "",
		description: "",
		image: "",
		content: [],
		date: this.getCurrentDate(),
		readingTime: "",
	};

	constructor(
		private blogsService: BlogsService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		const postId = this.route.snapshot.params["id"];
		this.fetchBlogPost(postId);
	}

	async fetchBlogPost(postId: number) {
		try {
			const res: any = await this.blogsService.getBlogById(postId).toPromise();
			this.blog = res;
		} catch (error) {
			console.error("Error fetching blog post:", error);
		}
	}

	saveBlog() {
		this.blogsService.postBlog(this.blog).subscribe(
			(res: any) => {
				console.log("Blog posted successfully:", res);
				// Reset the form or any other necessary action after successful posting
				this.resetForm();
			},
			(error) => {
				console.error("Error posting blog:", error);
				// Handle error
			}
		);
		this.calculateReadingTime();
	}
	resetForm() {
		// Reset the blog object to its initial state
		this.blog = {
			title: "",
			description: "",
			image: "",
			content: [],
			date: this.getCurrentDate(),
			readingTime: "",
		};
	}

	addContentSection() {
		this.blog.content.push({
			heading: "",
			paragraphs: [],
			points: [],
		});
		this.calculateReadingTime();
	}
	trackByIndex(index: number, obj: any): any {
		return index;
	}

	addPoint(contentIndex: number) {
		this.blog.content[contentIndex].points.push("");
		this.calculateReadingTime();
	}

	removePoint(contentIndex: number, pointIndex: number) {
		this.blog.content[contentIndex].points.splice(pointIndex, 1);
		this.calculateReadingTime();
	}

	getCurrentDate(): string {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
		const yyyy = today.getFullYear();
		return dd + "/" + mm + "/" + yyyy;
	}

	calculateReadingTime() {
		let totalWords = 0;

		// Count words in title and description
		totalWords += this.blog.title.trim().split(/\s+/).length;
		totalWords += this.blog.description.trim().split(/\s+/).length;

		// Iterate over each content section in the blog
		this.blog.content.forEach((content) => {
			// Count words in paragraphs
			content.paragraphs.forEach((paragraph) => {
				totalWords += paragraph.trim().split(/\s+/).length;
			});

			// Count words in points
			if (content.points) {
				content.points.forEach((point) => {
					totalWords += point.trim().split(/\s+/).length;
				});
			}
		});
		console.log(totalWords);

		const wordsPerMinute = 200;
		const minutes = Math.ceil(totalWords / wordsPerMinute);
		this.blog.readingTime = `${minutes} min read`;
	}

	onFileSelected(event: any) {
		const file: File = event.target.files[0];
		if (file) {
			// Check if the file size exceeds the maximum allowed size
			const maxFileSizeInBytes = 2 * 1024 * 1024; // 2 MB
			if (file.size > maxFileSizeInBytes) {
				this.imageSizeError =
					"Image file size exceeds the maximum allowed size (2 MB). Please select a smaller image.";
				// this.image = null;
				this.saveDisabled = true;
				console.log("Save disabled:", this.saveDisabled);
			} else {
				this.saveDisabled = false;
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => {
					this.blog.image = reader.result as string;
					// this.blog.image = reader.result;
					this.imageSizeError = null;
				};
			}
		}
	}
}
