# ☀️ SolarEdge Pro – React + Vite Website

## 🚀 Local Development
```bash
npm install
npm run dev
```

## 📦 Build for Production
```bash
npm run build
```
Output: `dist/` folder

---

## 🌐 FREE Hosting Options

### Option 1: Netlify (Recommended ✅)
1. `npm run build`
2. Go to [netlify.com](https://netlify.com) → Sign up free
3. Drag & drop the `dist/` folder onto Netlify dashboard
4. Done! Site is live in 30 seconds.

**OR** connect GitHub for auto-deploy on every change.

### Option 2: Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Vercel auto-detects Vite → click Deploy
4. Done!

---

## ✏️ How to Update Client Details

Open `src/data/siteData.js` and update:
```js
export const SITE = {
  name: 'SolarEdge Pro',       // ← Business name
  phone: '+919876543210',       // ← Phone number
  whatsapp: '919876543210',     // ← WhatsApp number (no +)
  email: 'info@solaredgepro.in',
  address: '123, Solar Nagar, Surat – 395001, Gujarat',
  // ... etc
}
```

## 📸 To Add Real Project Photos
Replace the Unsplash URLs in `GALLERY` array inside `siteData.js`

## 💰 Hosting Cost
- Netlify Free Plan: ₹0/month (100GB bandwidth)
- Vercel Free Plan: ₹0/month
- Custom Domain: ₹800–1200/year (buy separately from GoDaddy/Hostinger)
