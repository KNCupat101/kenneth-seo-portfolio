# 🎯 QUICK START: Deploy Your Portfolio to GitHub Pages

## Step-by-Step Commands (Copy & Paste)

### 1️⃣ Update Your GitHub Username

Open `/app/frontend/package.json` and change line 2:

**FROM:**
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME",
```

**TO:** (example)
```json
"homepage": "https://kennethcupat.github.io/seo-portfolio",
```

---

### 2️⃣ Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `seo-portfolio` (or any name you prefer)
3. Make it **Public**
4. **DO NOT** add README, .gitignore, or license
5. Click "Create repository"

---

### 3️⃣ Deploy Commands

Copy and paste these commands one by one:

```bash
# Navigate to your app directory
cd /app

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Kenneth's SEO Portfolio"

# Connect to your GitHub repository (REPLACE WITH YOUR INFO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
cd frontend
npm run deploy
```

**Example with real values:**
```bash
git remote add origin https://github.com/kennethcupat/seo-portfolio.git
```

---

### 4️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **gh-pages**
4. Click **Save**

---

### 5️⃣ Access Your Live Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

Example:
```
https://kennethcupat.github.io/seo-portfolio
```

⏱️ Wait 2-5 minutes after first deployment for site to go live.

---

## 🔄 Update Your Site Later

When you make changes:

```bash
cd /app/frontend
npm run deploy
```

Changes go live in 1-2 minutes! 🚀

---

## ✅ What You're Deploying

- ✅ Your complete portfolio website (frontend only)
- ✅ All sections: Hero, About, Experience, Skills, Case Studies, Testimonials, Certifications, Contact
- ✅ Professional design with animations
- ✅ Mobile responsive
- ✅ All your contact links working

**Note:** GitHub Pages hosts static sites only (no backend/database). Your portfolio uses mock data, which is perfect for GitHub Pages!

---

## 📚 Need More Details?

See the full guide: [GITHUB_DEPLOYMENT_GUIDE.md](./GITHUB_DEPLOYMENT_GUIDE.md)

---

## 🆘 Troubleshooting

**Blank page after deployment?**
- Check `homepage` URL in package.json matches exactly

**Images not loading?**
- All images in mock.js use full URLs (https://...) - already configured! ✅

**Want to test locally first?**
```bash
cd /app/frontend
npm start
```

---

**That's it! Your professional SEO portfolio will be live on GitHub Pages! 🎉**
