import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { BlogsService } from "../../Services/blogs.service";
import { SpainerComponent } from "../../Common/Spainer/spainer.component";

@Component({
  selector: "app-detailsblog",
  standalone: true,
  imports: [CommonModule, SpainerComponent],
  templateUrl: "./detailsblog.component.html",
  styleUrl: "./detailsblog.component.css",
})
export class DetailsblogComponent implements OnInit {
  blog: any | null = null;
  liked: boolean = false;
  disliked: boolean = false;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.getBlogDetails();
  }

  async getBlogDetails() {
    const idString = this.route.snapshot.paramMap.get("id");

    if (idString) {
      const id = +idString;
      let timeout: any;

      try {
        timeout = setTimeout(() => {
          window.location.reload();
        }, 3000);

        this.blog = await this.blogService.getBlogById(id).toPromise();
        clearTimeout(timeout);
        this.loading = false;

        const pageTitle = this.route.snapshot.data["title"] || "PixelBlog";
        const blogTitle = this.blog?.title || "Blog Details";
        this.titleService.setTitle(`${pageTitle} - ${blogTitle}`);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        clearTimeout(timeout);
        this.loading = false;
      }
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
