import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import bootstrap from "./src/main.server";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  const indexHtml = join(serverDistFolder, "index.server.html");

  const commonEngine = new CommonEngine();

  server.set("view engine", "html");
  server.set("views", browserDistFolder);

  // const blogs = [
  //   {
  //     id: 0,
  //     image: "../../../assets/img/Blog1.jpg",
  //     title: "Welcome to PixelBlog!",
  //     description:
  //       "Welcome to PixelBlog, your favorite destination to discover the dynamic world of software development, web development and app development. Whether you're an aspiring developer, a seasoned professional, or simply curious about the intricacies of coding, PixelBlog is here to enlighten and inspire you on your journey through the digital landscape.",
  //     date: "13/03/2024",
  //     readingTime: "5 mins",
  //   },
  //   {
  //     id: 1,
  //     image: "../../../assets/img/blog2.jpg",
  //     title: "The Importance of Mobile App Development",
  //     description:
  //       "Discover the key reasons why mobile app development is essential in today's digital landscape. Learn about the benefits, challenges, and best practices for creating successful mobile applications",
  //     date: "14/03/2024",
  //     readingTime: "7 mins",
  //   },
  //   {
  //     id: 2,
  //     image: "../../../assets/img/blog2.jpg",
  //     title: "The Importance of Mobile App Development",
  //     description:
  //       "Discover the key reasons why mobile app development is essential in today's digital landscape. Learn about the benefits, challenges, and best practices for creating successful mobile applications",
  //     date: "14/03/2024",
  //     readingTime: "7 mins",
  //   },
  //   {
  //     id: 3,
  //     image: "../../../assets/img/blog2.jpg",
  //     title: "The Importance of Mobile App Development",
  //     description:
  //       "Discover the key reasons why mobile app development is essential in today's digital landscape. Learn about the benefits, challenges, and best practices for creating successful mobile applications",
  //     date: "14/03/2024",
  //     readingTime: "7 mins",
  //   },
  // ];
  // Example Express Rest API endpoints
  // server.get("/blogs", (req, res) => {
  //   res.json(blogs);
  // });

  // Serve static files from /browser
  server.get(
    "*.*",
    express.static(browserDistFolder, {
      maxAge: "1y",
    })
  );

  // All regular routes use the Angular engine
  server.get("*", (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env["PORT"] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
