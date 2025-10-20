# Deployment Guide

This guide will help you deploy your portfolio website to production.

## Pre-Deployment Checklist

Before deploying, make sure you've completed these steps:

- [ ] Updated all GitHub URLs with your actual username
- [ ] Added project screenshots to `public/projects/`
- [ ] Updated project image paths in `app/page.tsx`
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the production version successfully (`npm run build`)
- [ ] Verified all links work correctly
- [ ] Checked mobile responsiveness

## Option 1: Deploy to Vercel (Recommended)

Vercel is created by the makers of Next.js and provides the best performance and developer experience.

### Step 1: Push to GitHub

1. Initialize a git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it (e.g., "portfolio")
   - Don't initialize with README (you already have one)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Visit https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select your portfolio repository from the list
   - Click "Import"

3. **Configure Project** (usually auto-detected):
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard:
   - Go to "Settings" → "Domains"
   - Click "Add"
   - Enter your domain (e.g., `yourname.com`)
   - Follow the DNS configuration instructions

2. Common domain providers:
   - **Namecheap**: Add A record and CNAME
   - **GoDaddy**: Configure DNS settings
   - **Cloudflare**: Add DNS records

### Automatic Deployments

Every time you push to your `main` branch on GitHub:
- Vercel automatically builds and deploys your changes
- Preview deployments are created for pull requests
- Rollback to previous versions anytime in the dashboard

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub

Follow the same GitHub steps as Option 1 above.

### Step 2: Deploy to Netlify

1. **Sign up/Login to Netlify**:
   - Visit https://www.netlify.com
   - Click "Sign Up" and choose GitHub

2. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Your site is live**:
   - Available at `random-name.netlify.app`
   - Change the site name in "Site settings" → "Change site name"

---

## Option 3: Self-Hosting (Advanced)

### Using a VPS (DigitalOcean, AWS, etc.)

1. **Build your app**:
```bash
npm run build
```

2. **Set up your server**:
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2
```

3. **Deploy files**:
```bash
# Copy files to server via SCP or git clone
scp -r .next package.json package-lock.json user@your-server:/var/www/portfolio
```

4. **Start the app**:
```bash
cd /var/www/portfolio
npm install --production
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

5. **Set up Nginx as reverse proxy**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables

If you need to add environment variables (API keys, etc.):

### Vercel:
- Go to project "Settings" → "Environment Variables"
- Add your variables
- Redeploy

### Netlify:
- Go to "Site settings" → "Environment variables"
- Add your variables
- Trigger a new deploy

### Local `.env.local`:
```bash
# Create .env.local file
NEXT_PUBLIC_YOUR_VAR=value
```

**Important**: Never commit `.env.local` to GitHub!

---

## Performance Optimization Tips

1. **Add Project Images**:
   - Optimize images before uploading (use TinyPNG, Squoosh)
   - Use 16:9 aspect ratio
   - Keep file sizes under 500KB

2. **Enable Analytics**:
   - Vercel Analytics: Built-in, just enable in dashboard
   - Google Analytics: Add tracking code to `app/layout.tsx`

3. **SEO Optimization**:
   - Add `robots.txt` in `public/` folder
   - Add `sitemap.xml` in `public/` folder
   - Ensure metadata is correct in `app/layout.tsx`

4. **Social Media Preview**:
   - Create an Open Graph image (1200x630px)
   - Add to metadata in `app/layout.tsx`:
   ```tsx
   export const metadata: Metadata = {
     // ... existing metadata
     openGraph: {
       images: ['/og-image.png'],
     },
   };
   ```

---

## Monitoring & Maintenance

### Check Site Health:
- **Vercel**: Built-in analytics and error tracking
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Built into Chrome DevTools

### Regular Updates:
```bash
# Update dependencies every few months
npm update
npm audit fix
```

---

## Troubleshooting

### Build Fails on Vercel:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Images Not Loading:
- Check image paths (should start with `/`)
- Verify images exist in `public/` folder
- Check file names match exactly (case-sensitive)

### Styling Issues:
- Clear browser cache
- Check Tailwind config is correct
- Verify `globals.css` is imported

### Slow Loading:
- Optimize images (compress, resize)
- Check bundle size: `npm run build` shows sizes
- Use Next.js Image component (already implemented)

---

## Next Steps After Deployment

1. **Share Your Portfolio**:
   - Add link to LinkedIn
   - Add to GitHub profile README
   - Include in resume

2. **Monitor Performance**:
   - Set up analytics
   - Track visitor behavior
   - Check Core Web Vitals

3. **Iterate & Improve**:
   - Update projects regularly
   - Add blog posts (future enhancement)
   - Gather feedback and refine

---

## Support

If you encounter issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Docs: https://docs.netlify.com/

Good luck with your deployment! 🚀
