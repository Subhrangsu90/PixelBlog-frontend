import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GETurl, POSTurl, DELETEurl, UPDATEurl } from "../config";

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

	postBlog(blogData: any) {
		return this.http.post(POSTurl.postBlog, blogData);
	}

	deleteBlogById(id: any) {
		return this.http.delete(`${DELETEurl.deleteById}/${id}`);
	}

	updateBlogById(id: any, updatedBlog: any) {
		return this.http.put(`${UPDATEurl.updateById}/${id}`, updatedBlog);
	}
}
