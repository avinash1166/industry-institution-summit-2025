# Industry-Institution Summit 2025 - Vercel Deployment Guide

## 🚀 Deploy to Vercel

Your website is ready for deployment! Follow these steps to host it on Vercel:

### 📋 Prerequisites
1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI (optional): `npm i -g vercel`

### 🔧 Method 1: Web Dashboard (Recommended)
1. **Visit** [vercel.com/new](https://vercel.com/new)
2. **Connect your GitHub account** (if using GitHub)
3. **Import your project** by:
   - Uploading the folder as ZIP, or
   - Connecting GitHub repository
4. **Deploy settings**:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
5. **Click "Deploy"** ✨

### 🖱️ Method 2: Drag & Drop
1. **Zip your project folder** (exclude `.git` if present)
2. **Go to** [vercel.com/new](https://vercel.com/new)
3. **Drag and drop** your ZIP file
4. **Click "Deploy"**

### 💻 Method 3: CLI (Advanced)
1. **Install Vercel CLI**: `npm i -g vercel`
2. **Navigate to project**: `cd "C:\Users\avina\OneDrive\Desktop\conference website"`
3. **Run**: `vercel`
4. **Follow prompts**

### 🔗 After Deployment
- Your site will be available at: `https://your-project-name.vercel.app`
- You can configure a custom domain in Vercel dashboard
- Automatic deployments on every update (if connected to Git)

### 📁 Files Ready for Deployment
✅ `index.html` - Main website  
✅ `styles/main.css` - All styling  
✅ `scripts/main.js` - Interactive features  
✅ `vercel.json` - Vercel configuration  
✅ All image files (logos, speaker photos)  
✅ `README.md` - Documentation  

### ⚙️ Configuration
- **vercel.json** has been created with optimal settings
- **Static file hosting** configured
- **All routes** properly handled

### 🎯 Performance Optimizations Applied
- ✅ Mobile-responsive design
- ✅ Optimized images
- ✅ Fast loading CSS/JS
- ✅ SEO-friendly structure
- ✅ Cross-browser compatibility

### 🔧 Troubleshooting
- **Images not loading?** Check file paths are relative
- **Mobile issues?** Test responsive design
- **Form not working?** Consider adding backend service

### 🌟 Post-Deployment Checklist
1. ✅ Test on mobile devices
2. ✅ Verify all links work
3. ✅ Check speaker images display
4. ✅ Test registration form
5. ✅ Verify map functionality
6. ✅ Share with team for feedback

---

**Your professional conference website is ready to go live! 🎉**

**Estimated deployment time: 2-3 minutes**