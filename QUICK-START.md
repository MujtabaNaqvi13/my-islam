# 🚀 Quick Start Guide - 5 Minute Setup

## What You Have
A complete Islamic PWA with prayer times, Qur'an, Hadith, Books, and more!

## 📁 Files in Your Folder
```
shia_pray/
├── index.html              ← Main app (open this)
├── islamic_data.js         ← Content (Hadith, books, vocab)
├── manifest.json           ← PWA config
├── favicon.svg             ← App icon
├── README.md               ← Full documentation
├── DEPLOY.md               ← Deployment options
├── FEATURES.md             ← Complete feature list
└── QUICK-START.md          ← This file!
```

## ▶️ Run Locally (Test)

### Option A: Python (Windows/Mac/Linux)
```bash
cd shia_pray
python -m http.server 8000
# Open: http://localhost:8000
```

### Option B: Node.js
```bash
npx http-server . -p 8000
# Open: http://localhost:8000
```

### Option C: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. "Open with Live Server"

### Option D: Direct Open (No Server)
- Just open `index.html` in browser
- Works but service worker won't load (need HTTPS or localhost)

## 🌐 Deploy PUBLIC (5 Minutes)

### Easiest: GitHub Pages

1. **Go to** github.com/new
2. **Name it** `shia-prayer-companion`
3. **Make it** Public
4. **Create**

5. **In terminal:**
```bash
cd shia_pray
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shia-prayer-companion.git
git push -u origin main
```

6. **In GitHub:**
   - Settings → Pages
   - Branch: main
   - Save

7. **Wait 2-3 minutes**
   - Visit: `https://YOUR_USERNAME.github.io/shia-prayer-companion`

**Done!** Your app is live! 🎉

### Alternative: Netlify (Even Easier)
1. Go to netlify.com
2. Sign up free
3. Drag-drop your `shia_pray` folder
4. Done! Live in seconds

---

## 📱 Features You Have

✅ **Prayer Times**
- Sunni & Shia calculations
- 20+ cities or custom location
- Annual timetable
- Smart reminders

✅ **Islamic Content**
- 1000+ Ayahs
- 1000+ vocabulary words
- 100+ Hadith
- 100+ books with links

✅ **Smart Features**
- Daily greeting (Ayah + Hadith + Vocab)
- Offline mode (works without internet)
- Installable (like an app)
- 3 themes (Light/Dark/Normal)

✅ **PWA App**
- Download on desktop
- Install on mobile homescreen
- Works offline
- Fast & smooth

---

## ⚙️ First Time Setup

1. **Open the app**
2. **Select your sect** (Sunni/Shia)
3. **Choose your location** (20+ cities or custom)
4. **Done!** App is configured

The app will greet you with:
- Random Ayah from Qur'an
- Random Islamic vocabulary word
- Random Hadith (Sunni or Shia)

---

## 📍 Tabs Explained

| Tab | What It Does |
|-----|-------------|
| 🏠 **Dashboard** | Prayer times, countdown, daily content |
| 📅 **Timetable** | See all prayer times for any date |
| 📖 **Qur'an** | Click to open surahs on quran.com |
| 🎯 **Hifz** | Track Qur'an memorization |
| 💬 **Hadith** | Read & search Sunni/Shia hadith |
| 📚 **Books** | 100+ Islamic books with links |
| 🕌 **Shia** | Twelver resources & prayer guide |
| 👤 **Profile** | Your settings & preferences |

---

## 🎨 Customize It

### Change Theme
- Click theme selector in header
- Light / Dark / Normal

### Change Location
- Click ⚙️ Settings
- Enter new city or coordinates
- Save

### Change Sect
- Select Sunni or Shia
- Prayer times adjust automatically
- Hadith changes to match

---

## 🔔 Notifications

The app reminds you:
- 60 min before Maghrib
- 15 min before Isha
- 30 min before Fajr
- 20 min before Dhuhr & Asr

Just click "🔔 Test Notify" to test.

---

## 📱 Install as App

### Mobile
1. Open app in browser
2. Click ⋮ menu (top right)
3. "Add to homescreen"
4. Icon appears on home screen!

### Desktop
1. Open app in browser
2. Click install icon (address bar) or
3. ⋮ menu → "Install app"
4. Appears like native app!

---

## 💾 Backup Your Data

**Export data:**
1. Click "💾 Export" button
2. Saves as `masjid-backup.json`
3. Keep as backup!

**Restore data:**
- Open your backup file
- Copy content
- Paste in browser console (DevTools → Console)

---

## ❓ Common Questions

**Q: Does it need internet?**
A: No! Works completely offline after first load.

**Q: Is my data private?**
A: YES! Everything stored on your device, never sent anywhere.

**Q: Can I share with friends?**
A: Absolutely! Share the public URL.

**Q: Can I customize?**
A: Yes! Edit `islamic_data.js` to add more content.

**Q: Works on iPhone?**
A: YES! Install to homescreen like Android.

**Q: Can I add my own locations?**
A: YES! Settings → enter lat/lng coordinates.

---

## 🔧 Troubleshooting

**Problem: Prayer times show "Loading"**
- Wait a few seconds
- Check location in Settings
- Refresh browser

**Problem: Notifications don't work**
- Click "🔔 Test Notify" to enable
- Check browser settings allow notifications

**Problem: Can't install as app**
- Must be on HTTPS (works on github.com/netlify)
- Local testing may not show install prompt

**Problem: Looks different on mobile**
- That's normal! App is responsive
- Works great on all sizes

---

## 📞 Need Help?

1. **Check README.md** - Full documentation
2. **Check DEPLOY.md** - Deployment help
3. **Check FEATURES.md** - Complete feature list
4. **Check browser console** - F12 → Console for errors

---

## 🎯 Next Steps

### To Test Locally:
```bash
cd shia_pray
python -m http.server 8000
# Open http://localhost:8000
```

### To Deploy:
1. Choose: GitHub Pages / Netlify / Vercel
2. Follow DEPLOY.md
3. Get public URL
4. Share with world!

### To Customize:
1. Edit `islamic_data.js`
2. Add more Hadith/books/vocabulary
3. Add more locations
4. Update colors/themes in index.html

---

## ✨ You're All Set!

Your Islamic PWA is ready to use! 

### Next:
1. Run locally to test
2. Deploy to make public
3. Share with community
4. Gather feedback
5. Keep updating content

---

**🕌 Alhamdulilah - All praise is due to Allah**

*"And We have not sent you, [O Muhammad], except as a mercy to the worlds." - Qur'an 21:107*

---

**Questions?** See DEPLOY.md, README.md, or FEATURES.md
