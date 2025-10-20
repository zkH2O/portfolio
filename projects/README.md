# Project Images

Place your project screenshots/images in this directory.

## Recommended Image Specifications:

### Format:
- **Aspect Ratio**: 16:9 (e.g., 1920x1080, 1600x900, 1280x720)
- **File Format**: PNG or JPG
- **File Size**: < 500KB (optimize for web)
- **Quality**: High resolution, clean, professional

### Naming Convention:
- `viral-hunter.png` - Viral Hunter project
- `face-detection.png` - Face Detection project
- `snow-globe.png` - Snow Globe project
- `bankruptcy-prediction.png` - Bankruptcy Prediction project

### What to Include:
- Clean mockups or hero screenshots
- Architecture diagrams
- Demo UI screenshots (avoid cluttered screenshots)
- Avoid busy screenshots with too much detail

### Tools for Creating Images:
- **Screenshots**: Use browser dev tools for clean UI captures
- **Mockups**: Use tools like Figma, Canva, or screenshot beautifiers
- **Optimization**: Use tools like TinyPNG or Squoosh to reduce file size

### Once Added:
Update the `app/page.tsx` file to use your images:

```tsx
<ProjectCard
  title="Your Project"
  image="/projects/your-project.png"
  // ... other props
/>
```
