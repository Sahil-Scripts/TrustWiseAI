# TrustWise AI - Quick Setup Guide

## ✅ What You Need

1. **Node.js 18+** - [Download here](https://nodejs.org/)
2. **OpenAI API Key** - [Get it here](https://platform.openai.com/api-keys)
3. **Sarvam AI API Key** (optional) - [Get it here](https://www.sarvam.ai/)

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Your API Keys

Open the `.env.local` file that was just created and add your API key:

```env
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

**Where to get your OpenAI API Key:**
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key and paste it in `.env.local`

### Step 3: Start the Application
```bash
npm run dev
```

### Step 4: Open Your Browser
Visit: **http://localhost:3000**

---

## 🎯 Features You Can Test

Once the app is running, try these features:

1. **Main Chat** - http://localhost:3000/loan-chat
   - Ask about loan eligibility
   - Get personalized recommendations
   - Multilingual support

2. **Financial Advisor** - http://localhost:3000/financial-advisor
   - Get financial planning advice
   - Budget recommendations

3. **Financial Literacy** - http://localhost:3000/financial-literacy
   - Interactive calculators
   - Educational tools (SIP, EMI, Tax, etc.)

4. **Loan Guide** - http://localhost:3000/loan-assist
   - Step-by-step loan application guidance
   - Visual flowcharts

---

## 🔧 Troubleshooting

### "Cannot find module" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### API Key Not Working
- Make sure there are no spaces before/after your key
- Check that the file is named `.env.local` (not `.env.txt`)
- Restart the dev server after adding the key

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or run on a different port
npm run dev -- -p 3001
```

---

## 📦 Optional: Adding Sarvam AI (Text-to-Speech)

For multilingual voice support, add your Sarvam AI key:

1. Get API key from https://www.sarvam.ai/
2. Add to `.env.local`:
```env
SARVAM_AI_API_KEY=your_sarvam_key_here
```
3. Restart the dev server

---

## 🏗️ Architecture Overview

**Frontend + Backend in One:**
- Built with **Next.js 15** (App Router)
- Backend API routes in `src/app/api/`
- No separate Flask server needed
- All-in-one deployment

**AI Integration:**
- **LangChain** for AI orchestration
- **OpenAI GPT-4** for conversations
- **Sarvam AI** for multilingual TTS

---

## 📚 Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Run production build

# Code Quality
npm run lint         # Check for errors
```

---

## 🆘 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review API routes in `src/app/api/`
- Look at component examples in `src/components/`

---

## ✨ Next Steps

1. ✅ Run `npm run dev`
2. ✅ Add your OpenAI API key
3. ✅ Test the chat at http://localhost:3000/loan-chat
4. 🎉 Start building!

---

**Happy Coding! 🚀**
