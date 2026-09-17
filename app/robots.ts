import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/account", "/profile"],
      },
    ],
    sitemap: "https://aelsa.se/sitemap.xml",
  };
}