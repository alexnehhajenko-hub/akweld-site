// app/sitemap.xml/route.ts
export const runtime = "nodejs";

export async function GET() {
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

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const url = `${baseUrl}${route}`;
    const priority = route === "" || route === "/ru" || route === "/en" ? "1.0" : "0.8";
    return `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
