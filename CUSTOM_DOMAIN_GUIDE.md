# 🌐 Custom Domain & Hosting Options Guide

## Your Portfolio - Ready for Custom Domain Publishing!

Your website is built as a **static React app** that can be hosted anywhere. Here are all your options:

---

## Option 1: Custom Domain on GitHub Pages (FREE + Easy)

### Step 1: Buy a Domain
Purchase a domain like `kennethcupat.com` from:
- **Namecheap** (recommended, ~$12/year)
- **GoDaddy**
- **Google Domains**
- **Cloudflare**

### Step 2: Add CNAME File

Create a file at `/app/frontend/public/CNAME` with your domain:

```
kennethcupat.com
```

**Important:** No `http://` or `https://`, just the domain name!

### Step 3: Configure DNS Settings

In your domain registrar's DNS settings, add these records:

**Option A: Apex Domain (kennethcupat.com)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Option B: Subdomain (www.kennethcupat.com)**
```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
```

**Both (Recommended):**
Add all A records above + add this CNAME:
```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
```

### Step 4: Deploy with Custom Domain

```bash
cd /app/frontend

# Rebuild with CNAME file
npm run build

# Deploy
npm run deploy
```

### Step 5: Configure in GitHub

1. Go to your GitHub repository
2. **Settings** → **Pages**
3. Enter your custom domain: `kennethcupat.com`
4. Check "Enforce HTTPS" (wait 24 hours for certificate)
5. Click **Save**

### Wait Time
- DNS propagation: 24-48 hours
- HTTPS certificate: Up to 24 hours

Your site will be live at `https://kennethcupat.com` 🎉

---

## Option 2: Deploy to Netlify (FREE + Fast)

Netlify offers:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Continuous deployment from GitHub
- ✅ Form handling (real contact forms!)

### Setup Instructions

1. **Sign up at [Netlify](https://netlify.com)**
   - Use your GitHub account

2. **Deploy your site:**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     ```
     Base directory: frontend
     Build command: npm run build
     Publish directory: frontend/build
     ```
   - Click "Deploy"

3. **Add Custom Domain:**
   - Site settings → Domain management
   - Add custom domain
   - Follow Netlify's DNS instructions

**Build Settings File:**

Create `/app/frontend/netlify.toml`:

```toml
[build]
  base = "frontend/"
  command = "npm run build"
  publish = "build/"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Advantages:**
- Real contact form submission (Netlify Forms)
- Faster deployment
- Better build logs
- Branch previews

---

## Option 3: Deploy to Vercel (FREE + Fast)

Vercel offers similar benefits to Netlify:

### Setup Instructions

1. **Sign up at [Vercel](https://vercel.com)**
   - Use your GitHub account

2. **Deploy:**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Framework preset: **Create React App**
   - Root directory: `frontend`
   - Click "Deploy"

3. **Add Custom Domain:**
   - Project settings → Domains
   - Add your custom domain
   - Follow Vercel's DNS instructions

**Vercel Configuration:**

Create `/app/frontend/vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "cleanUrls": true,
  "trailingSlash": false
}
```

---

## Option 4: Traditional Web Hosting (cPanel/Shared Hosting)

For hosting providers like Bluehost, HostGator, SiteGround:

### Step 1: Build Your Site

```bash
cd /app/frontend
npm run build
```

This creates a `build/` folder with all files.

### Step 2: Upload Files

1. Access your hosting via **FTP** (FileZilla) or **cPanel File Manager**
2. Navigate to `public_html/` or `www/`
3. Upload ALL contents of the `build/` folder
   - `index.html`
   - `static/` folder
   - `asset-manifest.json`
   - All other files

### Step 3: Configure Domain

1. Point your domain to the hosting's nameservers
2. Add domain in cPanel
3. Ensure files are in the domain's root directory

**Important for SPA (Single Page App):**

Create `.htaccess` file in the root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Option 5: AWS S3 + CloudFront (Professional)

For enterprise-level hosting:

### Benefits
- ✅ Extremely scalable
- ✅ Global CDN
- ✅ Custom domain + HTTPS
- ✅ Low cost (~$1-5/month)

### Quick Setup

1. **Create S3 Bucket**
   - Enable static website hosting
   - Upload `build/` folder contents
   - Set bucket policy for public read

2. **Create CloudFront Distribution**
   - Point to S3 bucket
   - Add custom domain
   - Enable HTTPS with ACM certificate

3. **Update DNS**
   - Point domain to CloudFront distribution

---

## Comparison Table

| Platform | Cost | Ease | Custom Domain | Real Forms | Build Time |
|----------|------|------|---------------|------------|------------|
| **GitHub Pages** | FREE | ⭐⭐⭐⭐⭐ | ✅ | ❌ | 1-2 min |
| **Netlify** | FREE | ⭐⭐⭐⭐⭐ | ✅ | ✅ | 1-2 min |
| **Vercel** | FREE | ⭐⭐⭐⭐⭐ | ✅ | ❌ | 1-2 min |
| **Traditional Hosting** | $3-15/mo | ⭐⭐⭐ | ✅ | ❌ | Upload |
| **AWS S3** | $1-5/mo | ⭐⭐ | ✅ | ❌ | Upload |

---

## Recommended Setup

**For Your SEO Portfolio, I recommend:**

### 🥇 Best Choice: Netlify or Vercel
- Free forever
- Easy deployment
- Custom domain
- Automatic HTTPS
- Fast global CDN
- Contact form support (Netlify)

### 🥈 Second Choice: GitHub Pages + Custom Domain
- Free forever
- Already configured
- Custom domain support
- Reliable

### Steps:
1. Deploy to GitHub Pages first (already configured)
2. Buy your custom domain (`kennethcupat.com`)
3. Add CNAME file
4. Configure DNS
5. Wait 24-48 hours

---

## Real Contact Form Setup (Netlify)

Since you have a contact form, here's how to make it work on Netlify:

### Update Contact Component

Edit `/app/frontend/src/components/Contact.jsx`:

Change the form tag from:
```jsx
<form onSubmit={handleSubmit} className="space-y-6">
```

To:
```jsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit} 
  className="space-y-6"
>
  <input type="hidden" name="form-name" value="contact" />
```

Deploy to Netlify and your form will automatically work! You'll receive submissions in your Netlify dashboard.

---

## DNS Configuration Examples

### Namecheap
1. Dashboard → Domain List → Manage
2. Advanced DNS
3. Add records as shown above

### GoDaddy
1. My Products → DNS
2. Add records as shown above

### Cloudflare
1. DNS → Add record
2. Add records as shown above

---

## SSL/HTTPS Certificate

All modern platforms provide FREE SSL:
- **GitHub Pages**: Automatic (Let's Encrypt)
- **Netlify**: Automatic (Let's Encrypt)
- **Vercel**: Automatic (Let's Encrypt)
- **Traditional**: Often included, or use Cloudflare

---

## Testing Your Custom Domain

After DNS configuration, test:

```bash
# Check DNS propagation
nslookup kennethcupat.com

# Check website
curl -I https://kennethcupat.com
```

Online tools:
- https://dnschecker.org
- https://www.whatsmydns.net

---

## 🎉 You're All Set!

Your portfolio files are ready to publish on **any platform** with **any custom domain**!

**Quick Start Recommendations:**

1. **Deploy Now (Free):**
   - GitHub Pages (already configured) ✅
   - Add custom domain later

2. **Want Real Forms:**
   - Deploy to Netlify
   - Enable Netlify Forms

3. **Already Have Hosting:**
   - Build: `npm run build`
   - Upload `build/` folder contents via FTP

---

## Support Resources

- **GitHub Pages**: https://docs.github.com/en/pages
- **Netlify**: https://docs.netlify.com
- **Vercel**: https://vercel.com/docs
- **DNS Help**: https://dnschecker.org

---

**Your professional SEO portfolio is ready to shine on the web! 🚀**
