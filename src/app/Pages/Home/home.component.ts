import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BlogComponent } from "../Blog/blog.component";
import { CommonModule } from "@angular/common";
import { BlogsService } from "../../Services/blogs.service";
import { FormsModule, NgForm } from "@angular/forms";
import { AppComponent } from "../../app.component";
import { Blog } from "../../blog";
import { SpainerComponent } from "../../Common/Spainer/spainer.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [BlogComponent, CommonModule, FormsModule, SpainerComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  blogs: any = [];

  constructor(
    private router: Router,
    private blogService: BlogsService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogService.getBlogs().subscribe((data: any) => {
      console.log(data.data);
      this.blogs = data.data.slice(0, 2);
    });
  }

  truncateDescription(description: string): string {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
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
