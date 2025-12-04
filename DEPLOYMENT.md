# Deployment Guide - TrustWise AI

This guide will help you deploy TrustWise AI to production.

## Recommended Platforms

### 1. Vercel (Easiest - Recommended)

Vercel is made by the creators of Next.js and offers the best integration.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/trustwise-ai.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `OPENAI_API_KEY`
     - `SARVAM_AI_API_KEY` (optional)
     - `NEXT_PUBLIC_FIREBASE_*` (if using Firebase)
   - Click "Deploy"

3. **Done!** Your app will be live at `https://your-project.vercel.app`

### 2. Netlify

**Steps:**

1. Push your code to GitHub (see step 1 above)

2. Deploy to Netlify
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables in "Site settings" → "Environment variables"
   - Deploy!

### 3. Railway

Great for full-stack apps with databases.

**Steps:**

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Next.js
5. Add environment variables
6. Deploy automatically!

---

## Environment Variables for Production

Make sure to add these in your deployment platform:

### Required:
```
OPENAI_API_KEY=sk-proj-your-actual-key
```

### Optional:
```
SARVAM_AI_API_KEY=your_sarvam_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

---

## Build Optimization

Before deploying, optimize your build:

```bash
# Test production build locally
npm run build
npm start

# Check for errors
npm run lint
```

---

## Domain Setup

### Custom Domain on Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., `trustwise-ai.com`)
4. Update your DNS records as instructed
5. Wait for SSL certificate (automatic)

---

## Performance Tips

1. **Images**: All images are already optimized with Next.js Image component
2. **API Routes**: Already optimized as serverless functions
3. **Caching**: Next.js handles this automatically

---

## Monitoring

### Vercel Analytics (Recommended)
- Automatic performance monitoring
- Real user metrics
- Free tier available

### Alternative: Google Analytics
Add to `src/app/layout.tsx`:
```tsx
<Script
  src="https://www.googletagmanics.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## Cost Breakdown

**Hosting:**
- Vercel: Free tier (100GB bandwidth/month)
- Netlify: Free tier (100GB bandwidth/month)
- Railway: $5/month minimum

**APIs:**
- OpenAI: Pay per use (~$0.06 per 1K tokens for GPT-4)
- Sarvam AI: Check their pricing

**Estimated Monthly Cost:** $10-50 depending on usage

---

## Security Checklist

- ✅ `.env.local` is in `.gitignore` (already done)
- ✅ API keys are in environment variables (not in code)
- ✅ Use HTTPS (automatic on Vercel/Netlify)
- ✅ Enable rate limiting for API routes (optional)

---

## Continuous Deployment

Once connected to GitHub:
1. Push to main branch
2. Automatic deployment triggers
3. Live in ~2 minutes

```bash
git add .
git commit -m "Update feature"
git push
# Auto-deploys! 🚀
```

---

## Rollback

If something breaks:

**Vercel:**
1. Go to "Deployments"
2. Find previous working version
3. Click "..." → "Promote to Production"

**Netlify:**
1. Go to "Deploys"
2. Find previous version
3. Click "Publish deploy"

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Railway Guides](https://docs.railway.app/)

---

**Ready to deploy? Start with Vercel - it's the easiest! 🚀**
