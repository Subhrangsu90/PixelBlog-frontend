import { Routes } from "@angular/router";
import { HomeComponent } from "./Pages/Home/home.component";
import { BlogsComponent } from "./Pages/Blogs/blogs.component";
import { ContactComponent } from "./Pages/Contact/contact.component";
import { DetailsblogComponent } from "./Pages/DetailsBlog/detailsblog.component";
import { NotfoundComponent } from "./Common/NotFound/notfound.component";
import { BlogEditComponent } from "./Pages/BlogEdit/blog-edit.component";
import { AuthGuard } from "./Common/auth.guard";

export const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{
		path: "home",
		title: "PixelBlog - Home",
		component: HomeComponent,
		// canActivate: [AuthGuard],
	},
	{
		path: "blogs",
		title: "PixelBlog - Blogs",
		component: BlogsComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "detailsblog/:id",
		component: DetailsblogComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "contact",
		title: "PixelBlog - Contact",
		component: ContactComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "blogedit",
		title: "PixelBlog - Create New Post",
		component: BlogEditComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "blogedit/:id",
		title: "PixelBlog - Edit",
		component: BlogEditComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "404",
		title: "PixelBlog - 404 Not Found",
		component: NotfoundComponent,
	},
	{ path: "**", redirectTo: "/404" },
];
