import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { BlogsService } from "../../Services/blogs.service";

@Component({
  selector: "app-detailsblog",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./detailsblog.component.html",
  styleUrl: "./detailsblog.component.css",
})
export class DetailsblogComponent implements OnInit {
  blog: any;

  liked: boolean = false;
  disliked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.getBlogDetails();
    // Set page title dynamically based on blog title
    const pageTitle = this.route.snapshot.data["title"] || "PixelBlog";
    const blogTitle = this.blog?.title || "Blog Details";
    this.titleService.setTitle(`${pageTitle} - ${blogTitle}`);
  }

  async getBlogDetails() {
    const idString = this.route.snapshot.paramMap.get("id");
    console.log("idString", idString);

    if (idString) {
      const id = +idString;
      console.log(id);

      this.blog = await this.blogService.getBlogById(id);
      console.log(this.blog);
    } else {
      console.error("Blog ID not provided");
    }
  }

  likeBlog() {
    this.liked = !this.liked;
    if (this.liked) {
      this.disliked = false; // Reset dislike if liked
    }
  }

  dislikeBlog() {
    this.disliked = !this.disliked;
    if (this.disliked) {
      this.liked = false; // Reset like if disliked
    }
  }
}
