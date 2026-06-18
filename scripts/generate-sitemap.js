import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const packageJsonPath = resolve(rootDir, "package.json");
const blogIndexPath = resolve(rootDir, "public/blog/index.json");
const sitemapPath = resolve(rootDir, "public/sitemap.xml");

const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
const blogPosts = JSON.parse(readFileSync(blogIndexPath, "utf8"));

const siteUrl = (packageJson.homepage || "https://asitha.site").replace(/\/$/, "");

const urls = [
  { loc: `${siteUrl}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/blog`, changefreq: "weekly", priority: "0.8" },
  ...blogPosts.map((post) => ({
    loc: `${siteUrl}/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: "monthly",
    priority: "0.7",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    const lines = [
      `  <url>`,
      `    <loc>${url.loc}</loc>`,
    ];

    if (url.lastmod) {
      lines.push(`    <lastmod>${url.lastmod}</lastmod>`);
    }

    lines.push(`    <changefreq>${url.changefreq}</changefreq>`);
    lines.push(`    <priority>${url.priority}</priority>`);
    lines.push(`  </url>`);

    return lines.join("\n");
  })
  .join("\n")}
</urlset>
`;

writeFileSync(sitemapPath, xml, "utf8");
console.log(`Generated ${sitemapPath.replace(rootDir + "/", "")}`);