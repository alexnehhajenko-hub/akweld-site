import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akweldsteel.com";

  const routes = [
    "",
    "/ru",
    "/en",
    "/services",
    "/ru/services",
    "/en/services",
    "/about",
    "/ru/about",
    "/en/about",
    "/contact",
    "/ru/contact",
    "/en/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" || route === "/ru" || route === "/en" ? 1 : 0.8,
  }));
}
