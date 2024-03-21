import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BlogComponent } from "../Blog/blog.component";
import { CommonModule } from "@angular/common";
import { BlogsService } from "../../Services/blogs.service";
import { FormsModule, NgForm } from "@angular/forms";
import { AppComponent } from "../../app.component";
import { FooterComponent } from "../../Common/Footer/footer.component";
import { Blog } from "../../blog";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [BlogComponent, CommonModule, FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    private router: Router,
    private blogService: BlogsService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  async getBlogs(): Promise<void> {
    try {
      const blogs = await this.blogService.getBlogs();
      // Truncate description to 100 characters
      this.blogs = blogs
        .map((blog) => ({
          ...blog,
          description:
            blog.description.slice(0, 100) +
            (blog.description.length > 100 ? "..." : ""),
        }))
        .slice(0, 2); // Get only the first two blogs
      console.log(this.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  async openBlog(blog: Blog): Promise<void> {
    console.log("Opening blog with index: ", blog.id);
    this.router.navigate(["/detailsblog", blog.id]);
  }

  scrollToSubscribe() {
    this.appComponent.scrollToSubscribe();
  }

  submitContactForm(contactForm: NgForm) {
    console.log(contactForm.value);

    contactForm.resetForm();
  }
}
