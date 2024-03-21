import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "../Blog/blog.component";
import { BlogsService } from "../../Services/blogs.service";
import { Blog } from "../../blog";

@Component({
  selector: "app-blogs",
  standalone: true,
  imports: [BlogComponent, CommonModule],
  templateUrl: "./blogs.component.html",
  styleUrl: "./blogs.component.css",
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private router: Router, private blogsService: BlogsService) {}
  ngOnInit(): void {
    this.getBlogs();
  }

  async getBlogs(): Promise<void> {
    try {
      const blogs = await this.blogsService.getBlogs();
      this.blogs = blogs.map((blog) => ({
        ...blog,
        description:
          blog.description.slice(0, 100) +
          (blog.description.length > 100 ? "..." : ""),
      }));
      console.log(this.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  async openBlog(blog: Blog) {
    console.log("Opening blog with index: ", blog.id);
    this.router.navigate(["/detailsblog", blog.id]);
  }
}
