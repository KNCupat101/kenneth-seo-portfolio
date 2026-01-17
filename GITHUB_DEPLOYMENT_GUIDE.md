# 🚀 GitHub Pages Deployment Guide

## Kenneth's SEO Portfolio - GitHub Pages Setup

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

---

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm/yarn installed (for local testing)

---

## 🛠️ Step-by-Step Deployment Instructions

### Step 1: Prepare Your Repository

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `seo-portfolio` or `kenneth-cupat-portfolio`
   - Make it **public** (required for free GitHub Pages)
   - Do NOT initialize with README (we'll push existing code)

2. **Update the homepage URL in package.json:**
   
   Open `/app/frontend/package.json` and update line 2:
   
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME",
   ```
   
   Replace:
   - `YOUR_GITHUB_USERNAME` with your actual GitHub username
   - `YOUR_REPOSITORY_NAME` with your repository name
   
   **Example:**
   ```json
   "homepage": "https://kennethcupat.github.io/seo-portfolio",
   ```

### Step 2: Initialize Git Repository

Open terminal in the `/app` directory and run:

```bash
cd /app
git init
git add .
git commit -m "Initial commit - Kenneth's SEO Portfolio"
```

### Step 3: Connect to GitHub

Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual values:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/kennethcupat/seo-portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
cd /app/frontend
npm run deploy
```

Or if using yarn:
```bash
cd /app/frontend
yarn deploy
```

This will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Deploy the build folder to GitHub Pages

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages` and `/ (root)`
4. Click **Save**

### Step 6: Access Your Live Website

After 2-5 minutes, your website will be live at:

```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

---

## 🔄 Updating Your Website

Whenever you make changes:

```bash
# Make your changes to the code
cd /app/frontend

# Deploy the updated version
npm run deploy
```

Your changes will be live in 1-2 minutes!

---

## 📁 What Gets Deployed?

Only the **frontend** (React app) is deployed to GitHub Pages as a static website:

- ✅ All your portfolio sections (Hero, About, Experience, etc.)
- ✅ Contact form (uses browser storage, not backend)
- ✅ All images and styling
- ✅ Navigation and interactions

**Note:** GitHub Pages only hosts static sites, so:
- The FastAPI backend is NOT deployed
- MongoDB is NOT included
- Contact form uses mock submission (shows toast notification)

This is perfect for a portfolio website using mock data!

---

## 🎨 Customizing Further

### Update Contact Information

Edit `/app/frontend/src/mock.js` to update:
- Email address
- LinkedIn URL
- Upwork URL
- Any other personal information

### Change Colors

Edit `/app/frontend/src/index.css` to customize:
- Primary colors
- Accent colors
- Background gradients

### Add/Remove Sections

Edit `/app/frontend/src/App.js` to:
- Reorder sections
- Remove unwanted sections
- Add new components

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution:** Check that the `homepage` in `package.json` matches your GitHub Pages URL exactly.

### Issue: 404 errors on page refresh

**Solution:** GitHub Pages doesn't support client-side routing by default. Add a custom 404.html that redirects to index.html:

Create `/app/frontend/public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

### Issue: Images not loading

**Solution:** Ensure all image URLs in `mock.js` are absolute URLs (starting with `https://`), not relative paths.

---

## 🔗 Custom Domain (Optional)

Want to use your own domain like `kennethcupat.com`?

1. Add a file named `CNAME` in `/app/frontend/public/` with your domain:
   ```
   kennethcupat.com
   ```

2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IPs
   - Or add a CNAME record pointing to `YOUR_GITHUB_USERNAME.github.io`

3. In GitHub Settings → Pages, enter your custom domain

---

## 📝 Files to Include in Repository

Make sure these files are in your repository:

```
/app/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json (updated with homepage)
│   ├── .env
│   └── other frontend files
├── backend/ (optional - won't be deployed)
└── GITHUB_DEPLOYMENT_GUIDE.md (this file)
```

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Updated `homepage` in `package.json` with correct GitHub Pages URL
- [ ] All contact information is correct in `mock.js`
- [ ] All external links (LinkedIn, Upwork, certifications) are correct
- [ ] Tested locally with `npm start` or `yarn start`
- [ ] Committed all changes to Git
- [ ] Have `gh-pages` package installed

---

## 🎉 Success!

Once deployed, share your portfolio:

- LinkedIn profile
- Resume/CV
- Email signature
- Upwork profile
- Business cards

Your professional SEO portfolio is now live and accessible to potential clients and employers worldwide!

---

## 💡 Need Help?

Common commands:

```bash
# Test locally
cd /app/frontend
npm start

# Build for production (test build before deploying)
npm run build

# Deploy to GitHub Pages
npm run deploy

# Check deployment status
git log --oneline gh-pages
```

---

## 📞 Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the troubleshooting section above
3. Check your repository's GitHub Actions/Pages deployment logs

---

**Happy Deploying! 🚀**
