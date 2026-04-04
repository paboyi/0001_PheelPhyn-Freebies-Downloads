# Downloads Site

A Gumroad-style free downloads page built with Astro.
Pastel design, product grid, image galleries, tag filtering, and individual product pages.

---

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:4321

---

## Project structure

```
downloads-site/
├── src/
│   ├── content/
│   │   ├── config.ts               ← defines product fields
│   │   └── products/               ← one .md file per product
│   │       └── my-product.md
│   ├── layouts/
│   │   └── Base.astro              ← shared HTML shell
│   ├── pages/
│   │   ├── index.astro             ← storefront / grid
│   │   └── product/
│   │       └── [slug].astro        ← product page template
│   ├── scripts/
│   │   ├── filter.js               ← tag filter behaviour
│   │   └── gallery.js              ← image thumbnail switcher
│   └── styles/
│       ├── global.css              ← design tokens, reset, shared components
│       ├── index.css               ← storefront styles
│       └── product.css             ← product page styles
├── public/
│   ├── files/                      ← downloadable files go here
│   └── images/                     ← product preview images go here
├── astro.config.mjs
└── package.json
```

---

## Adding a product

**1. Add your files to `public/`**
```
public/files/my-pack.zip
public/images/my-pack.jpg    ← recommended 1200×800px
```

**2. Create `src/content/products/my-pack.md`**

The filename → the URL. `my-pack.md` = `/product/my-pack`

```markdown
---
name: "My Pack"
tagline: "Short description shown on the card."
image: "/images/my-pack.jpg"
images: []
color: "blush"
file: "/files/my-pack.zip"
fileLabel: "ZIP archive · 12 MB"
tags: ["templates", "design"]
date: "April 2025"
---

Write your full description here in markdown.

## What's included

- Item one
- Item two
```

**Color options for the placeholder background:**
`blush` · `sage` · `sky` · `lavender` · `butter` · `cream`

**3. Save and push** — Vercel auto-deploys.

---

## Deploy to Vercel

1. Push to GitHub
2. vercel.com → Add New Project → import repo
3. Vercel detects Astro automatically → Deploy

No extra config needed.

---

## Customising

- **Site title / header** — edit `src/pages/index.astro`
- **Colors / fonts** — edit `src/styles/global.css` (CSS variables at the top)
- **Card layout** — edit `src/styles/index.css`
- **Product page layout** — edit `src/styles/product.css`
