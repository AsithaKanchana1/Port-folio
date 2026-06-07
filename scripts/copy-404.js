import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html was not found after build.");
}

copyFileSync(indexPath, notFoundPath);
console.log("Copied dist/index.html to dist/404.html");
