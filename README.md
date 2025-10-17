# Zigao Zeng - Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a single-page layout with smooth scrolling, elegant animations, and a Zen-inspired design philosophy.

## Design Philosophy

**Theme: "Clarity and Intent"**

This portfolio follows a minimalist aesthetic where every element serves a purpose. The design emphasizes:
- Generous whitespace for breathability
- Monochromatic color palette with muted sage green accent
- Clean Inter typography with weight-based hierarchy
- Purposeful animations that enhance the narrative

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## Features

- Single-page application with smooth scrolling navigation
- Fully responsive design (mobile, tablet, desktop)
- Fade-in animations on scroll
- Modular, reusable component architecture
- SEO-optimized metadata
- Accessibility-compliant (WCAG AA)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Button/             # Primary/Secondary button components
│   ├── Layout/             # Section, Container, Heading components
│   ├── Project/            # Project card, grid, tech tags
│   ├── Experience/         # Experience card component
│   ├── Skills/             # Skills grid component
│   └── UI/                 # SocialLink, FadeIn animation
├── public/
│   └── projects/           # Project images/screenshots
└── tailwind.config.ts      # Custom color palette & spacing
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Update Personal Information

Edit `app/page.tsx` to update:
- Your name, title, and bio
- Email address and social links
- Experience details
- Project information
- Skills and education

### 2. Add Project Images

Place project screenshots in `public/projects/`:
- Format: PNG or JPG
- Aspect ratio: 16:9
- Recommended size: < 500KB

Then update image paths in `app/page.tsx`:
```tsx
<ProjectCard
  image="/projects/your-project.png"
  // ...
/>
```

### 3. Update GitHub URLs

Replace all instances of `"https://github.com/yourusername"` with your actual GitHub profile and repository URLs.

### 4. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```ts
colors: {
  sage: "#6B8E7F",        // Your accent color
  "off-white": "#F8F8F8", // Background color
  // ...
}
```

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project" and select your repository
4. Vercel will automatically detect Next.js and configure deployment
5. Click "Deploy"

Your site will be live with automatic deployments on every push to main.

### Alternative: Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Sections

1. **Hero** - Name, title, elevator pitch, social links
2. **About Me** - Personal introduction and career narrative
3. **Experience** - Professional work history with quantified achievements
4. **Projects** - Showcase of 4 key technical projects
5. **Skills** - Categorized technical abilities
6. **Education** - Academic credentials and coursework
7. **Contact** - Call-to-action with email and social links

## Design System

### Colors
- Background: `#F8F8F8` (off-white)
- Text Primary: `#222222` (dark gray)
- Text Secondary: `#666666` (medium gray)
- Accent: `#6B8E7F` (muted sage green)

### Typography
- Font Family: Inter
- Headings: 72px/48px/32px (desktop/tablet/mobile)
- Body: 18px
- Line Height: 1.7 (body), 1.2 (headings)

### Spacing
- Section Spacing: 128px (desktop), 64px (mobile)
- Element Spacing: 8px grid system

## Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next/Image (when images are added)
- Font optimization with next/font
- Tailwind CSS purging for minimal CSS bundle
- Framer Motion lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a personal portfolio project. Feel free to use the structure and design as inspiration for your own portfolio.

## Contact

**Zigao Zeng**
- Email: zizeng39@gmail.com
- LinkedIn: [linkedin.com/in/zeng-zi](https://www.linkedin.com/in/zeng-zi/)

---

Built with Next.js, designed with intention.
