import { Component, Input, Output, EventEmitter } from "@angular/core";
import { HomeComponent } from "../Home/home.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [HomeComponent],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.css",
})
export class BlogComponent {
  @Input() image: any;
  @Input() title: string;
  @Input() description: string;
  @Input() date: string;
  @Input() readingTime: string;
  @Output() readMoreClicked = new EventEmitter<void>();

  constructor(private router: Router) {
    this.image = "";
    this.title = "";
    this.description = "";
    this.date = "";
    this.readingTime = "";
  }

  onReadMoreClick() {
    this.readMoreClicked.emit();
  }
}
