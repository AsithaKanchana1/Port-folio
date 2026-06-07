# Asitha Kanchana — Portfolio

Personal portfolio and blog for **Asitha Kanchana**, Software Engineering student at OUSL, Sri Lanka.

**Live:** https://asitha.site (or your configured Cloudflare Pages domain)

---

## Overview

This repository is a Vite + React portfolio and blog built with Tailwind CSS and Framer Motion. It supports:
- Static blog posts written as Markdown in `public/blog/`
- A contact form using EmailJS (client-side)
- Projects, experience, and certifications sections editable in code
- Deployments to Cloudflare Pages (recommended)

---

## Quick start (local)

1. Install dependencies and run dev server:

```bash
npm install
npm run dev
```

2. Open http://localhost:5173

Build for production:

```bash
npm run build
```

The `build` script also creates a `dist/404.html` for SPA fallback (see `scripts/copy-404.js`).

---

## Blogging — Add a new post (step-by-step)

1. Create a Markdown file in `public/blog/` named with a slug, e.g. `my-new-post.md`.

2. Write your post using standard Markdown. Example top of the file:

```markdown
# My New Post Title

Write your introduction here.

## Section

More content...
```

3. Add an entry to `public/blog/index.json` describing the post (this file is used to build the post list):

```json
{
  "slug": "my-new-post",
  "title": "My New Post Title",
  "date": "2026-06-07",
  "excerpt": "Short summary shown on the blog list.",
  "tags": ["General"],
  "readTime": "3 min read"
}
```

4. Commit and push. If you host on Cloudflare Pages the site will auto-deploy and the new post will be visible.

Notes:
- The site renders Markdown client-side, so publishing a new `.md` plus `index.json` is sufficient — no additional build step is required for content changes.

Images in posts
---------------

You can include images in your blog posts in two common ways. The site serves files placed in the `public/` folder directly at the site root, so these are the easiest to reference.

1) Image next to the post (recommended for single-post assets)

- Put the image file inside the same folder as the Markdown post, for example:

```
public/blog/my-new-post.md
public/blog/my-new-post-image.jpg
```

Then reference it in the Markdown using a relative path:

```markdown
![Screenshot of feature](./my-new-post-image.jpg)
```

2) Shared images folder (recommended for reusable assets)

- Create a shared images folder such as `public/blog/images/` and commit your images there:

```
public/blog/images/project-1.png
public/blog/images/project-2.webp
```

Reference with an absolute path from the site root:

```markdown
![Project screenshot](/blog/images/project-1.png)
```

Best practices
- Optimize images (resize, compress, convert to `webp` where possible) before committing. Keep individual images under ~500KB for performance; smaller is better.
- Use descriptive filenames and alt text for accessibility and SEO.
- Prefer `webp` for photographs and `svg` for vector graphics (icons, logos).
- If you need responsive images, add multiple sizes and use HTML `<picture>` in Markdown or custom components in React pages.

Large media & storage options
- If your blog will host many large images, consider using dedicated object storage or an image CDN instead of committing very large binaries to the Git repo.
  - Cloudflare R2: object storage that works well with Cloudflare Pages (recommended for large media). Upload images to R2 and reference their public URLs in posts.
  - S3 or other object storage: host large assets externally and reference absolute URLs in Markdown.
- If you keep images in the repo and they are large, use Git LFS to avoid bloating the Git history:

```bash
# Install and initialize Git LFS once on your machine
git lfs install
git lfs track "public/blog/images/*"
git add .gitattributes
git add public/blog/images/*
git commit -m "Add blog images via Git LFS"
git push
```

Cloudflare Pages free-tier storage & limits (guidance)
--------------------------------------------------

- Cloudflare Pages does not enforce a small per-site static file storage quota like traditional shared hosts — Pages stores the built site artifacts produced at deploy time. However:
  - Large files committed to your Git repo increase repository size and can slow CI/builds; prefer optimized images or external object storage for many/large assets.
  - Bandwidth and build limits vary by Pages plan. For the most accurate, up-to-date limits (build minutes, monthly bandwidth, and R2 free tier), check Cloudflare's official docs or your Pages project's quota page in the dashboard.
- If you expect heavy media (video, many large images), use Cloudflare R2 (object storage) + Cloudflare Images or another CDN to offload bandwidth and storage from the repo and Pages builds.

Optional utilities
- `scripts/new-post.sh` can be added to scaffold new posts and copy images into `public/blog/`.
- An example post with a responsive `<picture>` block can be provided for reference.

---

## Projects, Experience & Certifications

Where to edit:
- Projects: `src/components/Works.jsx` (add project objects to the `projects` array).
- Experience/Certifications: `src/components/Experience.jsx` (modify the `workExperience`, `education`, and `certifications` arrays).

Project object example:

```js
{
  name: "My Project",
  description: "Brief description",
  tags: ["React", "Tailwind"],
  image: myProjectImage, // import from src/assets/projects/
  github: "https://github.com/username/repo",
  demo: "https://demo.example.com"
}
```

Experience/certification entry example:

```js
{
  title: "IT Technician",
  org: "New Lanka Clothing PVT(LTD)",
  date: "2024 — Present",
  description: ["Building HR & payroll modules", "Maintaining infra"],
  link: "https://example.com/cert.pdf"
}
```

Image assets:
- Put images under `src/assets/projects/` or `src/assets/company/` and import them where used. Keep files reasonably sized to avoid large bundles.

---

## Contact form (EmailJS)

How it works:
- The contact form uses the EmailJS client library to send messages directly from the browser.

Required EmailJS setup:
1. Create an EmailJS account at https://www.emailjs.com/
2. Add an Email Service (Gmail / SMTP provider)
3. Create an Email Template. Example template subject/body:

Subject: New message from {{from_name}}

HTML body:

```html
<h2>New contact form message</h2>
<p><strong>From:</strong> {{from_name}} &lt;{{from_email}}&gt;</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

4. Copy Service ID, Template ID and Public Key from the EmailJS dashboard.

Local dev (.env.local):

```bash
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx
```

Cloudflare Pages (production): set the same three variables in Project Settings → Environment variables.

The code already disables the Submit button and shows a `mailto:` fallback if these variables are not set.

---

## Deploying & Cloudflare Pages

Recommended: use Cloudflare Pages to host the built `dist/` output.

Build settings in Pages:
- Build command: `npm run build`
- Build output directory: `dist`
- (Optional) Node version: 18

Environment variables (Pages → Settings → Environment variables):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Custom domain:
1. Add your custom domain in Cloudflare Pages (the Pages project UI).
2. Cloudflare will provide DNS records (typically a CNAME for `www` and instructions for the root). Add them under Cloudflare DNS.
3. Keep records proxied (orange cloud) for CDN + TLS; Cloudflare will manage certificates for Pages sites.

If you see an SSL error (e.g. 525 SSL handshake failed): see Troubleshooting below.

---

## Troubleshooting DNS / SSL (Cloudflare)

Quick checks when TLS/SSL fails:
1. Are you using Cloudflare Pages? If yes, make sure the domain is added in the Pages project and DNS points to Pages as instructed.
2. If your site is served from your own origin (VM, VPS), ensure the origin answers HTTPS correctly and the certificate is valid.
3. In Cloudflare → SSL/TLS choose `Full (strict)` if your origin has a valid certificate, or `Full` if using Cloudflare Origin Certificate on the origin. Avoid `Flexible` for production.
4. Temporarily set DNS to DNS-only (gray cloud) to test your origin directly:

```bash
curl -Iv https://asitha.online
curl -Iv https://www.asitha.online
```

If the origin responds correctly with a valid certificate when bypassing Cloudflare, the issue is Cloudflare configuration (SSL mode or Pages setup). If the origin still fails, fix the origin TLS/certificate and firewall settings.

If you want help debugging DNS records or adjusting SSL settings, gather your Cloudflare DNS records (names, types, values, proxied yes/no) and the hosting type (Cloudflare Pages or custom origin) and open an issue.

---

## Linting & Formatting

- `npm run lint` is available but requires an ESLint config; add or update `.eslintrc.*` if you want to enforce lint rules.

---

## Contributing

- Fork, make changes, and open a PR. Keep changes small and focused. For content updates (blog posts) add `.md` and update `public/blog/index.json`.

---

Support
- To request a helper script for new posts or assistance with DNS/SSL debugging, open an issue or submit a pull request with details.
