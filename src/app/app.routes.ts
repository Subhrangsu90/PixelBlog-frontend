import { Routes } from "@angular/router";
import { HomeComponent } from "./Pages/Home/home.component";
import { BlogsComponent } from "./Pages/Blogs/blogs.component";
import { ContactComponent } from "./Pages/Contact/contact.component";
import { DetailsblogComponent } from "./Pages/DetailsBlog/detailsblog.component";
import { NotfoundComponent } from "./Common/NotFound/notfound.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    title: "PixelBlog - Home",
    component: HomeComponent,
  },
  { path: "blogs", title: "PixelBlog - Blogs", component: BlogsComponent },
  {
    path: "detailsblog/:id",
    component: DetailsblogComponent,
  },
  {
    path: "contact",
    title: "PixelBlog - Contact",
    component: ContactComponent,
  },
  {
    path: "404",
    title: "PixelBlog - 404 Not Found",
    component: NotfoundComponent,
  },
  { path: "**", redirectTo: "/404" },
];
