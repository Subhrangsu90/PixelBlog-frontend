import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GETurl } from "../config";

@Injectable({
  providedIn: "root",
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get(GETurl.getBlogs);
  }

  getBlogById(id: number) {
    const url = `${GETurl.getBlogById}/${id}`;
    return this.http.get(url);
  }
}
