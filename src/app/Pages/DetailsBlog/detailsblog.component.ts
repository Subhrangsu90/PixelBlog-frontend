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
    // console.log("idString", idString);

    if (idString) {
      const id = +idString;
      // console.log(id);

      try {
        this.blog = await this.blogService.getBlogById(id).toPromise();
        const pageTitle = this.route.snapshot.data["title"] || "PixelBlog";
        const blogTitle = this.blog?.title || "Blog Details";
        this.titleService.setTitle(`${pageTitle} - ${blogTitle}`);
      } catch (error) {
        console.error("Error fetching blog details:", error);
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
