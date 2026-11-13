# Zero Torque Golf Putter Portfolio Website

## Flagship Engineering Project Showcase

This portfolio website showcases the **Zero Torque Golf Putter** as your flagship engineering project - designed to impress recruiters and demonstrate end-to-end product development capability.

---

## Project Structure

```
Golf_Putter_Portfolio/
├── index.html              # Homepage with featured project (40% visual weight)
├── case-study.html         # Premium Apple-style case study page
├── styles.css              # Main stylesheet (dark, premium theme)
├── case-study.css          # Case study specific styles
├── script.js               # Interactive animations and 3D viewer
├── placeholder-images/     # Image placeholders to replace
└── README.md               # This file
```

---

## Design Philosophy

### Homepage Strategy
- Featured Project Section occupies ~40% visual attention
- Large hero image with technical metrics
- Engineering timeline visualization  
- View Case Study call-to-action
- Secondary projects support, not compete with flagship

### Case Study Structure (Apple-style)
1. The Problem - Traditional putter flaws explained
2. Market Research - Competitive analysis + target customer requirements
3. Engineering Requirements - Performance specs and tolerances
4. CAD Development - Onshape workflow gallery
5. Design for Manufacturing - GD&T and machining considerations
6. Production - Xometry workflow documentation
7. Final Product - Outcomes, lessons learned

---

## Adding Your Images

Replace placeholder files in `placeholder-images/` with your actual project photos:

| File | What to Add |
|------|-------------|
| profile.jpg | Professional headshot (optional) |
| cad-render.png | High-res CAD model renders from Onshape |
| engineering-drawings.png | Production-ready GD&T drawings |
| final-product.jpg | Photos of machined putter in progress + finished product |

Tip: For the best impact, include:
- CAD screenshots showing iterative design evolution
- Engineering drawings with visible GD&T callouts
- Before/after machining photos
- Xometry order confirmation screenshots (redacted if needed)

---

## Deploying to GitHub Pages

### Option 1: Simple Deploy (Recommended)

```bash
# Push to your GitHub repository
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

Then enable GitHub Pages in Settings > Pages.

### Option 2: Netlify/Vercel

```bash
npm install -g netlify-cli
cd Golf_Putter_Portfolio
npx netlify deploy --prod
```

---

## Customization Guide

### Updating Technical Metrics
Edit `index.html` - Featured Project Section:
- MOI values
- Torsional stability specs
- Production timeline

### Adding More Projects
Copy existing project card pattern and add to projects-section.

### Theme Customization
All colors defined in `styles.css` via CSS custom properties (--bg-primary, etc.)

---

## Recruiter Takeaway

This website communicates:

> "I can take a product from concept to production."

The Zero Torque Golf Putter showcases:
- Market research and problem definition
- Engineering analysis and requirements specification  
- CAD design and iterative development
- Design for manufacturing principles
- Real-world production using Xometry
- Full lifecycle documentation

---

## Mobile Responsiveness

Fully responsive with breakpoints at 768px. Test on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
