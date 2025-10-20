# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Immediate Next Steps

### 1. Update Your Information (5 min)

Open `app/page.tsx` and update:

**GitHub URLs** (search for "yourusername"):
```tsx
// Line 58, 173, 187, 202, 216, 291
href="https://github.com/YOUR-ACTUAL-USERNAME"
```

### 2. Add Project Images (10 min)

1. Take screenshots of your projects
2. Optimize them (use [TinyPNG](https://tinypng.com/))
3. Save to `public/projects/` with these names:
   - `viral-hunter.png`
   - `face-detection.png`
   - `snow-globe.png`
   - `bankruptcy.png`

4. Update `app/page.tsx` to use your images:
```tsx
<ProjectCard
  title="Viral Hunter"
  image="/projects/viral-hunter.png"  // Add this line
  // ... rest of props
/>
```

### 3. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- [x] All sections display correctly
- [x] Links work
- [x] Images load (if added)
- [x] Mobile view looks good (use browser DevTools)

### 4. Deploy to Vercel (5 min)

**Fast track deployment:**

```bash
# 1. Push to GitHub
git add .
git commit -m "Portfolio ready for deployment"
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com, sign in with GitHub
# 3. Click "Import Project"
# 4. Select your repo
# 5. Click "Deploy"
```

Done! Your site will be live at `your-project.vercel.app`

---

## Optional Enhancements

### Add Google Analytics (5 min)

1. Get tracking ID from analytics.google.com
2. Add to `app/layout.tsx` in the `<head>`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

### Add Custom Domain (10 min)

1. Buy domain from Namecheap/GoDaddy
2. In Vercel: Settings → Domains → Add
3. Follow DNS instructions
4. Wait for propagation (5-48 hours)

### Add More Projects

Duplicate a `ProjectCard` in `app/page.tsx`:
```tsx
<FadeIn delay={0.5}>
  <ProjectCard
    title="New Project"
    description="Description here"
    techStack={["React", "Node.js"]}
    highlights={[
      "Achievement 1",
      "Achievement 2"
    ]}
    githubUrl="https://github.com/you/project"
  />
</FadeIn>
```

### SEO Optimization (5 min)

Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Common Customizations

### Change Accent Color

Edit `tailwind.config.ts`:
```ts
colors: {
  sage: "#YOUR-COLOR",  // Change this hex code
}
```

### Add Resume Download

1. Add `resume.pdf` to `public/`
2. In Hero section, add:
```tsx
<PrimaryButton href="/resume.pdf">
  Download Resume
</PrimaryButton>
```

### Update Metadata (SEO)

Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name | ML Engineer",
  description: "Your custom description",
};
```

---

## File Structure Quick Reference

```
portfolio/
├── app/
│   ├── page.tsx              ← YOUR CONTENT HERE
│   └── layout.tsx            ← Metadata & fonts
├── components/               ← Reusable UI components
├── public/
│   ├── projects/             ← ADD IMAGES HERE
│   ├── robots.txt            ← SEO (optional)
│   └── sitemap.xml           ← SEO (optional)
├── README.md                 ← Full documentation
├── DEPLOYMENT.md             ← Deployment guide
└── QUICKSTART.md             ← You are here!
```

---

## Getting Help

- Full docs: See `README.md`
- Deployment: See `DEPLOYMENT.md`
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

---

## Checklist Before Going Live

- [ ] Updated all "yourusername" GitHub URLs
- [ ] Added project images
- [ ] Updated email/LinkedIn links
- [ ] Tested on mobile
- [ ] Spell-checked all content
- [ ] Verified all external links work
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to Vercel

That's it! Your portfolio is ready to impress. 🎉
