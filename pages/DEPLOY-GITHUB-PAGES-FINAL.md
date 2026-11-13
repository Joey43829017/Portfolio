# 🚀 GitHub Pages Deployment Guide

## ✅ Portfolio Status: COMPLETE

**Zero Torque Golf Putter** portfolio is fully built with your actual project images and ready for deployment!

---

## 📂 Final File Structure

```
Golf_Putter_Portfolio/
├── index.html                    ← Homepage (10.3 KB) - FLAGSHIP PROJECT FEATURED
├── case-study.html               ← Apple-style case study (22.6 KB)  
├── styles.css                    ← Main stylesheet (dark premium theme)
├── case-study.css                ← Case study styles
├── script.js                     ← 3D viewer & animations
├── images/                       ← YOUR ACTUAL PROJECT PHOTOS
│   ├── cad-render-isometric.png  (210.8 KB) - CAD isometric view
│   ├── engineering-drawings-with-gdnt.png (115.3 KB) - GD&T drawings
│   └── finished-putter-black-anodized.jpg (1193.5 KB) - Machined product
├── deploy.bat                    ← Windows deployment launcher
├── README.md                     ← Project documentation
└── DEPLOY-GITHUB-PAGES.md        ← This comprehensive guide

TOTAL: 5 files + 3 images = READY FOR GITHUB PAGES ✅
```

---

## 🎯 Key Features (Recruiter-Ready)

### Homepage (index.html)
- **FLAGSHIP PROJECT** badge on Zero Torque Golf Putter
- Animated Three.js 3D CAD viewer
- Technical metrics: MOI (2850 g·cm²), Torsional Stability (±0.5°), Timeline (6 months)
- Engineering timeline visualization
- **40% visual weight** - largest section on page

### Case Study (case-study.html)  
- Premium Apple-style 7-section storytelling:
  1. Project Gallery (YOUR IMAGES)
  2. The Problem (traditional putter flaws)
  3. Market Research (competitive analysis)
  4. Engineering Requirements (specs table)
  5. CAD Development (Onshape workflow)
  6. DFM (manufacturing considerations)
  7. Production (Xometry CNC process)
- Professional GD&T drawings showcase
- Finished product photography

### Design Philosophy
- **Dark premium theme** (#0a0a0b background, #3b82f6 accent)
- **No headshot** - technical credibility focus
- **Your actual project images** (no placeholders)
- Fully responsive mobile design
- Smooth scroll animations

---

## 🚀 Quick Deploy (3 Steps)

### Option 1: Manual Git Push (Recommended)

```bash
# 1. Navigate to portfolio folder
cd "C:\Users\joeyk\Golf_Putter_Portfolio"

# 2. Initialize Git repository (first time only)
git init
git branch -M main

# 3. Add all files and commit
git add .
git commit -m "Deploy Zero Torque Golf Putter portfolio"

# 4. Replace YOUR-GITHUB-USERNAME with your actual username
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/your-repo-name.git

# 5. Push to GitHub
git push -u origin main

# Example for Joey:
# git remote add origin https://github.com/joeykozlo/golf-putter-portfolio.git
```

### Option 2: Use deploy.bat Script

Double-click `deploy.bat` in portfolio folder, then manually enter GitHub URL in terminal.

### Option 3: Drag & Drop to GitHub Desktop

If you use GitHub Desktop app:
1. Create empty repo on GitHub.com
2. Copy repo link (e.g., `https://github.com/joeykozlo/golf-putter-portfolio`)
3. In GitHub Desktop: File → Add Local Repository…
4. Browse to `C:\Users\joeyk\Golf_Putter_Portfolio`
5. Commit and Push

---

## ⚙️ Enable GitHub Pages

After pushing code to GitHub:

1. **Go to your repository** on GitHub.com
2. Click **Settings** tab (top of page)  
3. Scroll to "Pages" section in left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live at:

```
https://YOUR-USERNAME.github.io/your-repo-name/
```

Example for Joey Kozlowski:
```
https://joeykozlo.github.io/golf-putter-portfolio/
```

⏱️ **GitHub Pages typically rebuilds within 60 seconds**

---

## 🌐 Alternative Hosting Options

### Netlify (Fastest Deployment)

```bash
npm install -g netlify-cli
cd "C:\Users\joeyk\Golf_Putter_Portfolio"
npx netlify deploy --prod
```

### Vercel CLI

```bash
npm install -g vercel
cd "C:\Users\joeyk\Golf_Putter_Portfolio"
vercel
```

---

## 🧪 Test Locally Before Deploying

```bash
# Option 1: Built-in Windows viewer
cd "C:\Users\joeyk\Golf_Putter_Portfolio"
start index.html

# Option 2: Python HTTP server
python -m http.server 8000
# Open http://localhost:8000 in browser
```

---

## 📱 Pre-Deployment Checklist

Verify everything works before pushing to GitHub:

- [ ] **Images load correctly** (CAD, GD&T drawings, putter)
- [ ] **All navigation links** work (Projects, About, Contact)
- [ ] **3D viewer loads** without console errors (F12 → Console)
- [ ] **Mobile responsive** (check phone/browser dev tools)
- [ ] **Case study page** accessible from homepage button
- [ ] **No headshot** visible in about section
- [ ] **Technical metrics accurate** for your project

---

## 🎨 Customization

### Update Email Address
Edit `index.html` line ~154 and `case-study.html`:
```html
<a href="mailto:joeykozlo@example.com" class="contact-link">📧 joeykozlo@example.com</a>
```

### Add Social Links
Add GitHub/LinkedIn in `index.html` contact section (lines ~155-157):
```html
<a href="https://github.com/YOUR-USERNAME" class="contact-link">GitHub</a>
<a href="https://linkedin.com/in/YOUR-PROFILE" class="contact-link">LinkedIn</a>
```

### Modify Technical Metrics  
Edit homepage metrics section (lines ~62-80):
```html
<span class="metric-value">YOUR-MOI g·cm²</span>
<span class="metric-value">±YOUR-TORSION °</span>
```

---

## 📊 What Recruiters See

### Visual Hierarchy (Homepage)
```
┌─────────────────────────────────────────────┐
│           HERO SECTION                       │
│   "Mechanical Engineering & Trading"          │
└─────────────────────────────────────────────┘
                 ↓ FLAGSHIP (40% attention)
┌─────────────────────────────────────────────┐
│  FLAGSHIP: ZERO TORQUE GOLF PUTTER           │
│  [3D Viewer] + [Tech Metrics]                │
│  → "View Complete Case Study" button         │
└─────────────────────────────────────────────┘
                 ↓ Secondary Projects
┌─────────────────────────────────────────────┐
│  Other Engineering Projects (Supporting)      │
│  - Autonomous Trading Bot                    │
│  - [Your other projects here]                │
└─────────────────────────────────────────────┘
```

### Case Study Page Flow
1. **Project Gallery** ← YOUR IMAGES IMMEDIATELY VISIBLE
2. Problem Statement
3. Market Analysis  
4. Engineering Specs
5. CAD Screenshots
6. Manufacturing Process
7. Production Results
8. Lessons Learned

---

## 🔗 Share Your Portfolio

Once deployed, share the link on:
- **LinkedIn** profile header
- **Resume/CV** website link field
- **GitHub README** in your repositories
- **Cover letters** (attach PDF or paste link)
- **Elevator pitch**: "Check out my portfolio at [url]"

---

## 🆘 Troubleshooting

### Images Not Loading?
```bash
# Verify files exist
dir "C:\Users\joeyk\Golf_Putter_Portfolio\images"

# Expected output: 3 image files
# If empty, run this command to copy images again:
cd "C:\Users\joeyk\Golf_Putter_Portfolio"
```

### Git Push Fails?
```bash
# Check if repository already exists on GitHub
# Navigate to https://github.com/YOUR-USERNAME/your-repo-name
# If not created, create empty repo first:
# File → New repository (don't initialize with README)

# Then push:
git remote add origin https://github.com/YOUR-USERNAME/golf-putter-portfolio.git
git branch -M main
git push -u origin main --force
```

### 404 Page Not Found?
- GitHub Pages may take **2-5 minutes** to rebuild after push
- Check for typos in repository name (case-sensitive)
- Verify branch is set to `main` (not `master`)

### Site Looks Wrong?
1. Hard refresh: Ctrl+Shift+R (clears cache)
2. Try incognito/private browsing mode
3. Open browser DevTools (F12) → Console for errors

---

## 📈 Analytics & Tracking (Optional)

### Google Analytics 4
1. Create GA4 property in Google Analytics
2. Get Measurement ID (e.g., G-XXXXXXXXXX)
3. Add to `index.html` `<head>` section:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### GitHub Pages Insights
Built-in analytics available automatically on GitHub.com repo settings.

---

## ✅ Final Pre-Deploy Verification

Run these checks:

```bash
# 1. Verify all files present
dir /b "C:\Users\joeyk\Golf_Putter_Portfolio"

# Expected: case-study.css, case-study.html, DEPLOY-GITHUB-PAGES.md, 
#           deploy.bat, images, index.html, README.md, script.js, styles.css

# 2. Verify image files
dir "C:\Users\joeyk\Golf_Putter_Portfolio\images" /b

# Expected: cad-render-isometric.png, engineering-drawings-with-gdnt.png, 
#           finished-putter-black-anodized.jpg

# 3. Test locally
start index.html
```

---

## 🎉 You're Ready to Deploy!

Your portfolio tells a compelling story:

> **"From concept to CNC machined product — I take engineering projects from market research through production, delivering professional-grade designs that perform."**

### The Zero Torque Golf Putter showcases:
- ✅ Market research and competitive analysis
- ✅ Engineering requirements specification  
- ✅ CAD development (Fusion 360/Onshape)
- ✅ Design for Manufacturing principles (GD&T, tolerancing)
- ✅ Real-world CNC production via Xometry
- ✅ Professional photography documentation

### Recruiters will see:
- **Product thinking** (not just code)
- **Full lifecycle capability**  
- **Manufacturing experience**
- **Professional documentation**
- **Engineering communication skills**

---

## 📞 Need Help?

If you encounter issues during deployment:

1. Check GitHub Desktop logs (if using)
2. Review terminal output for error messages
3. Test site locally before pushing
4. Verify all image paths in HTML are correct

---

*Generated on November 12, 2026*  
*Zero Torque Golf Putter Portfolio v1.0 - Recruiter-Ready Edition*
