import { Injectable } from "@angular/core";
import { Blog } from "../blog";

@Injectable({
  providedIn: "root",
})
export class BlogsService {
  url = "http://localhost:3000/locations";

  constructor() {}

  async getBlogs(): Promise<Blog[]> {
    // return this.blogs;
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getBlogById(id: number): Promise<Blog[]> {
    console.log("ID:", id);
    const data = await fetch(`${this.url}/${id}`);
    console.log(data);

    return (await data.json()) ?? {};
  }
}
