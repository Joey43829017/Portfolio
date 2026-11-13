# 🚀 Deploy Zero Torque Golf Putter Portfolio to GitHub Pages

## ✅ Status: READY FOR DEPLOYMENT

Your portfolio website is complete with:
- ✅ Homepage with flagship project (40% visual weight)
- ✅ Premium Apple-style case study page  
- ✅ 3 professional images integrated (CAD, GD&T drawings, finished product)
- ✅ Dark premium theme with responsive design
- ✅ No headshot (as requested)

---

## 📂 Files Ready for Deployment

```
Golf_Putter_Portfolio/
├── index.html              ← Homepage (10.3 KB)
├── case-study.html         ← Case study page (22.6 KB)  
├── styles.css              ← Main stylesheet
├── case-study.css          ← Case study styles
├── script.js               ← Animations & 3D viewer
├── images/                 ← Your actual project photos
│   ├── cad-render-isometric.png (210.8 KB)
│   ├── engineering-drawings-with-gdnt.png (115.3 KB)
│   └── finished-putter-black-anodized.jpg (1193.5 KB)
├── README.md               ← Documentation
└── DEPLOY-GITHUB-PAGES.md  ← This guide
```

---

## 🎯 Quick Deploy (3 Steps)

### Step 1: Initialize Git Repository (if not already done)

Open PowerShell or Command Prompt in the portfolio folder:

```bash
cd "C:\Users\joeyk\Golf_Putter_Portfolio"
git init
git branch -M main
```

### Step 2: Add All Files and Commit

```bash
# Stage all files for commit
git add .

# Create initial commit with descriptive message
git commit -m "Deploy Zero Torque Golf Putter portfolio to GitHub Pages"
```

### Step 3: Push to GitHub Repository

```bash
# Replace YOUR-GITHUB-USERNAME below with your actual GitHub username
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/your-portfolio-repo-name.git
git branch -M main
git push -u origin main --force
```

**Example for Joey Kozlowski:**
```bash
git remote add origin https://github.com/joeykozlo/golf-putter-portfolio.git
git push -u origin main
```

---

## ⚙️ Enable GitHub Pages

### Via GitHub Website:

1. Go to your repository on GitHub.com
2. Click **Settings** tab (top of page)
3. Click **Pages** in the left sidebar
4. Under "Source", select `main` branch and `/ (root)` folder
5. Click **Save**

GitHub will deploy within 60 seconds. Your site will be live at:

```
https://YOUR-USERNAME.github.io/your-portfolio-repo-name/
```

Example:
```
https://joeykozlo.github.io/golf-putter-portfolio/
```

---

## 🔧 Alternative Deployment Methods

### Option 2: Deploy to Netlify (Faster)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Navigate to portfolio folder
cd "C:\Users\joeyk\Golf_Putter_Portfolio"

# Build preview (optional - verify site works)
npx http-server . -p 8080

# Deploy to Netlify
npx netlify deploy --prod
```

Follow prompts to connect your Git repo or enter site details manually.

### Option 3: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from portfolio folder:
   ```bash
   cd "C:\Users\joeyk\Golf_Putter_Portfolio"
   vercel
   ```

3. Follow prompts to link to GitHub repo

---

## 📊 What Recruiters Will See

### Homepage (index.html)
- **Zero Torque Golf Putter** as flagship project with 40% visual weight
- Full-screen CAD isometric model view
- GD&T engineering drawings showcase
- Finished machined product photo
- Technical metrics (MOI, torsional stability, timeline)
- Engineering timeline visualization

### Case Study (case-study.html)
- Premium Apple-style scroll-driven storytelling
- 7 comprehensive sections from problem to production
- Professional project gallery header
- Detailed engineering specifications
- Manufacturing workflow documentation

---

## 🌐 Preview Before Deploying

Test locally by opening in browser:

```bash
cd "C:\Users\joeyk\Golf_Putter_Portfolio"
start index.html
```

Or use Python HTTP server:
```bash
python -m http.server 8000
# Then open http://localhost:8000 in browser
```

---

## 📱 Testing Checklist

Before deploying, verify:

- [ ] Images display correctly (CAD, drawings, putter)
- [ ] All navigation links work
- [ ] Scroll animations function properly
- [ ] Mobile responsive on phone/browser
- [ ] 3D viewer loads without errors
- [ ] Case study page accessible from homepage button

---

## 🎨 Customization Options

### Update Contact Email
Edit `index.html` and `case-study.html`:
```html
<a href="mailto:YOUR-ACTUAL-EMAIL@example.com" ...>
```

### Add GitHub/LinkedIn Links
```html
<a href="https://github.com/YOUR-USERNAME" class="contact-link">GitHub</a>
<a href="https://linkedin.com/in/YOUR-PROFILE" class="contact-link">LinkedIn</a>
```

### Modify Project Metrics
Edit the metrics section in `index.html` (lines ~62-80):
```html
<span class="metric-value">YOUR-MOI-VALUE g·cm²</span>
```

---

## 📈 Post-Deployment

### Share Your Portfolio Link
Once live, share with:
- Recruiters on LinkedIn
- Hiring managers in cover letters
- GitHub profile README
- Resume website link

### Monitor Analytics (Optional)
Add Google Analytics or use GitHub Pages insights to track visitors.

---

## 🆘 Troubleshooting

**Images not loading?**
- Check image file paths are correct (`images/` folder)
- Verify files copied successfully

**404 Error on refresh?**
- Ensure you pushed with `git push origin main`
- GitHub Pages may take 2-5 minutes to rebuild

**Scroll animations not working?**
- Clear browser cache and reload
- Check JavaScript console for errors (F12 → Console)

---

## ✅ Final Checklist Before Deploy

- [ ] All 3 images copied to `images/` folder
- [ ] HTML files reference correct image paths
- [ ] No headshot placeholder in about section
- [ ] Technical metrics accurate for your project
- [ ] Email and social links updated
- [ ] README documentation complete

---

## 🎉 You're Ready!

Your portfolio communicates: **"I can take a product from concept to production."**

The Zero Torque Golf Putter flagship showcase demonstrates:
- Market research and problem definition
- Engineering analysis and requirements specification  
- CAD design and iterative development (Fusion 360/Onshape)
- Design for manufacturing principles (GD&T, tolerancing)
- Real-world production using Xometry CNC machining
- Full lifecycle documentation with professional photography

**Deploy now and impress recruiters!** 🏆⚡️🔧

---

*Last updated: November 12, 2026*
