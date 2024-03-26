import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "../Blog/blog.component";
import { BlogsService } from "../../Services/blogs.service";
import { Blog } from "../../blog";
import { SpainerComponent } from "../../Common/Spainer/spainer.component";

@Component({
  selector: "app-blogs",
  standalone: true,
  imports: [BlogComponent, CommonModule, SpainerComponent],
  templateUrl: "./blogs.component.html",
  styleUrl: "./blogs.component.css",
})
export class BlogsComponent implements OnInit {
  blogs: any = [];

  constructor(private router: Router, private blogsService: BlogsService) {}
  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogsService.getBlogs().subscribe((data: any) => {
      console.log(data.data);
      this.blogs = data.data;
    });
  }

  truncateDescription(description: string): string {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  }

  async openBlog(blog: Blog) {
    // console.log("Opening blog with index: ", blog.id);
    this.router.navigate(["/detailsblog", blog.id]);
  }
}
