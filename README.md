# Downloads Site

A Gumroad-style free downloads page built with Astro. Product grid + individual product pages with image galleries, descriptions, and download buttons.

---

## First time setup

```bash
npm install
npm run dev
```

Then open http://localhost:4321 in your browser.

---

## Folder structure

```
downloads-site/
├── src/
│   ├── content/
│   │   ├── config.ts           ← defines the fields each product can have
│   │   └── products/           ← ONE .md FILE PER PRODUCT — add yours here
│   │       ├── template-pack-01.md
│   │       ├── preset-pack-v2.md
│   │       └── icon-set-mono.md
│   ├── layouts/
│   │   └── Base.astro          ← shared HTML wrapper (fonts, CSS vars)
│   └── pages/
│       ├── index.astro         ← storefront / product grid
│       └── product/
│           └── [slug].astro    ← product page template (don't rename)
├── public/
│   ├── files/                  ← put your downloadable files here
│   └── images/                 ← put your preview images here
├── astro.config.mjs
└── package.json
```

---

## How to add a product

**1. Add your files to `public/`**

```
public/files/my-pack.zip
public/images/my-pack.jpg     ← recommended: 1200×800px
```

**2. Create a new markdown file in `src/content/products/`**

The filename becomes the URL slug. e.g. `my-pack.md` → `/product/my-pack`

```md
---
name: "My Pack"
tagline: "A one-line description shown on the card."
image: "/images/my-pack.jpg"
images: []
file: "/files/my-pack.zip"
fileLabel: "Download ZIP · 12 MB"
tags: ["templates", "design"]
date: "April 2025"
---

Write your longer description here in normal markdown.

## What's included

- Item one
- Item two
- Item three
```

**3. Save the file** — the dev server hot-reloads instantly, or push to GitHub to deploy.

---

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → sign in with GitHub → Add New Project → import the repo
3. Vercel detects Astro automatically — just click Deploy

No `vercel.json` needed. Vercel handles everything.

---

## Customise the site title

Open `src/pages/index.astro` and edit the `<h1>` tag near the bottom of the file.

---

## Tips

- **Tags**: keep names consistent across products — they become the filter buttons automatically
- **Gallery images**: add extra images to the `images: []` array — they appear as clickable thumbnails on the product page
- **No image?**: leave `image` as `""` and a placeholder shows instead
- **Large files** (over 100 MB): upload to Google Drive and use a direct-download link in the `file` field
