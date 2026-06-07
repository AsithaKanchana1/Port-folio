# Asitha Kanchana — Portfolio

Personal portfolio and blog for **Asitha Kanchana**, Software Engineering student at OUSL, Sri Lanka.

**Live:** [asitha.site](https://www.asitha.site)

---

## Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router v6 | Client-side routing |
| react-markdown + remark-gfm | Blog post rendering |
| EmailJS | Contact form |
| Cloudflare Pages | Hosting & CDN |

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploying to Cloudflare Pages

### First-time setup
1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → **Create a project** → **Connect to Git**
3. Select your repository
4. Set the following build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18` (set in Environment Variables: `NODE_VERSION = 18`)
5. Hit **Save and Deploy**

### Environment Variables
Set these in Cloudflare Pages **Settings → Environment variables**:

```
VITE_EMAILJS_SERVICE_ID   = your_service_id
VITE_EMAILJS_TEMPLATE_ID  = your_template_id
VITE_EMAILJS_PUBLIC_KEY   = your_public_key
```

### Continuous Deployment
After the first deploy, every push to your `main` branch automatically triggers a new deployment. ✅

---

## Blog System

### How it works
- Blog posts are Markdown files stored in `public/blog/`
- Post metadata (title, date, excerpt, tags, readTime) is in `public/blog/index.json`
- Posts are fetched at runtime — **no build step needed** to add new posts

### Writing a new post

**Step 1** — Create the Markdown file:
```
public/blog/my-new-post.md
```

```markdown
# My New Post Title

Introduction paragraph here...

## Section 1

Content here. You can use **bold**, *italic*, `inline code`, and more.

## Code Example

\```javascript
const hello = () => console.log("Hello, world!");
\```

> Blockquotes look like this.


1. Numbered list
2. Second item
---

## Adding Projects, Experience & Education

### Add a Project
- Open `src/components/Works.jsx` and add a new object to the `projects` array. Fields: `name`, `description`, `tags` (array), `image` (imported asset), `github` (optional), `demo` (optional).
- Put project images in `src/assets/projects/` (create the folder if it doesn't exist) and import them at the top of `Works.jsx` or use the existing `src/assets/index.js` exports.
- Example item:
```js
{
  name: "My Project",
  description: "Short description",
  tags: ["React", "Node.js"],
  image: myProjectImage,
  github: "https://github.com/username/repo",
  demo: "https://example.com/demo"
}
```

### Add Work / Education / Certification
- Open `src/components/Experience.jsx`.
- The file defines three arrays: `workExperience`, `education`, and `certifications`.
- Add a new entry to the appropriate array. Each entry supports:
  - `title` (string)
  - `org` (string)
  - `date` (string)
  - `type` ("work" | "education" | "certification")
  - `icon` (optional imported asset)
  - `description` (array of bullet strings)
  - `link` (optional URL to certificate or proof)

Example:
```js
workExperience.push({
  title: "IT Technician",
  org: "New Lanka Clothing PVT(LTD)",
  date: "Current",
  type: "work",
  description: [
    "Building HR and payroll modules",
    "Developing mobile and desktop apps",
  ],
  link: null
});
```

### Certifications
- Add objects to the `certifications` array in `src/components/Experience.jsx`.
- For certificate images/icons, place them under `src/assets/company/` and import at the top of the file (see existing `ethicalhacker` example).

---
```

**Step 2** — Add metadata to `public/blog/index.json`:
```json
{
  "slug": "my-new-post",
  "title": "My New Post Title",
  "date": "2025-08-01",
  "excerpt": "A short description of what this post is about.",
  "tags": ["General", "Tutorial"],
  "readTime": "5 min read"
}
```

**Step 3** — Push to GitHub. Cloudflare auto-deploys. Done! 🎉

### Supported Markdown features
- Headings (H1–H4)
- **Bold**, *italic*, ~~strikethrough~~
- `Inline code` and fenced code blocks with language hints
- Links, images
- Ordered and unordered lists
- Tables
- Blockquotes
- Horizontal rules

---

## Theme

The site has a **light/dark theme toggle** (default: light).
- Click the 🌙/☀️ icon in the navbar
- Preference is saved to `localStorage`

---

## Project Structure

```
src/
  components/     # All page sections (Hero, About, Skills, etc.)
  context/        # ThemeContext (dark/light)
  pages/          # Blog list and post pages
public/
  blog/
    index.json    # Blog metadata index
    *.md          # Individual blog posts
  _redirects      # Cloudflare SPA routing
  _headers        # Cache-control headers
  Resume.pdf      # Your resume
```

---

## Contact Form (EmailJS)

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — message body
   - `{{to_name}}` — your name
4. Copy Service ID, Template ID, and Public Key
5. Add them as environment variables (see Deploying section)
