# 📱 TrustWise AI - PWA Installation Guide

## Your App is Now PWA-Ready! 🎉

This means you can install it on your phone like a native app and use it offline.

---

## 🌐 Step 1: Deploy Your App Online

### Option A: Deploy with Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Add Environment Variables:**
   - Go to your Vercel dashboard: https://vercel.com/dashboard
   - Click on your project
   - Go to **Settings** → **Environment Variables**
   - Add these variables:
     ```
     OPENAI_API_KEY=your-key-here
     SARVAM_AI_API_KEY=your-key-here
     ```

5. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Option B: Deploy via Vercel Website

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"Import Project"**
4. Select your repo: `sobs64/Overnight_Hackathon_Sohan_B`
5. Add environment variables (see list above)
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. Your app is live! 🚀

---

## 📱 Step 2: Install on Your Phone

### On Android (Chrome/Samsung Internet):

1. Open your deployed app URL in Chrome
   - Example: `https://trustwise-ai.vercel.app`
2. Tap the **menu button** (⋮) in the top-right corner
3. Select **"Add to Home screen"** or **"Install app"**
4. Name it: **"TrustWise AI"**
5. Tap **"Add"**
6. The app icon will appear on your home screen!

### On iPhone (Safari):

1. Open your deployed app URL in **Safari**
   - Example: `https://trustwise-ai.vercel.app`
2. Tap the **Share button** (□↑) at the bottom
3. Scroll down and tap **"Add to Home Screen"**
4. Name it: **"TrustWise AI"**
5. Tap **"Add"**
6. The app icon will appear on your home screen!

---

## ✨ Features You Get with PWA:

✅ **Install like a native app** - No app store required  
✅ **Full-screen mode** - No browser bars  
✅ **Home screen icon** - Launch instantly  
✅ **Fast loading** - Thanks to service worker caching  
✅ **Works offline** - Basic UI loads without internet  
✅ **Push notifications** - (Can be added later)  
✅ **Automatic updates** - Always get the latest version  

---

## 🔧 Testing PWA Features

### Test Locally:

1. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

2. **Open in browser:**
   ```
   http://localhost:3000
   ```

3. **Check DevTools:**
   - Open Chrome DevTools (F12)
   - Go to **"Application"** tab
   - Check **"Manifest"** section
   - Check **"Service Workers"** section

---

## 📊 Lighthouse PWA Score

To check your PWA quality:

1. Open your deployed app in Chrome
2. Press **F12** (DevTools)
3. Click **"Lighthouse"** tab
4. Select **"Progressive Web App"**
5. Click **"Generate report"**
6. Aim for 90+ score!

---

## 🎯 Quick Deploy Commands

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## 🆘 Troubleshooting

### "Add to Home Screen" not appearing?
- Make sure you're using **HTTPS** (deployed, not localhost)
- Check if you already installed it (look on home screen)
- Try clearing browser cache

### Icons not showing?
- Wait a few minutes after deployment
- Clear cache and reinstall
- Check if `/icons/icon.svg` is accessible

### Service Worker not working?
- Open DevTools → Application → Service Workers
- Click "Unregister" and refresh
- Make sure you're on HTTPS

---

## 🎉 You're All Set!

Once deployed, share this URL with anyone:
👉 **https://your-app.vercel.app**

They can install it on their phone too!

---

## 📝 Next Steps

1. **Deploy to Vercel** ✅
2. **Install on your phone** ✅
3. **Share with friends** 🎊
4. **Add more features** 🚀

Enjoy your new mobile app! 📱✨
