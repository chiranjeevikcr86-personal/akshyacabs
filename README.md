# Akshaya Travels Website

World-class static website for **Akshaya Travels**, Tirupati.  
Founded by **S. Ravi Kumar** | 20+ Years of Trusted Pilgrimage & Leisure Travel.

📞 Primary: +91 93939 00006 | Secondary: +91 72888 76667  
📧 akshayatravels9799@gmail.com  
📍 Madura Nagar, Tirupati – 517 501, Andhra Pradesh

---

## 🗂️ Project Structure

```
AkshyaTravel/
├── index.html              ← Home page
├── pages/
│   ├── about.html          ← About Us
│   ├── packages.html       ← Tour Packages (6 tabs)
│   └── contact.html        ← Contact & Booking Form
├── css/
│   ├── style.css           ← Design system & global styles
│   └── packages.css        ← Packages & inner page styles
├── js/
│   └── main.js             ← Navbar, language toggle, animations
├── images/
│   ├── brand/              ← Logo, favicon, OG image
│   ├── hero/               ← Hero background images
│   ├── divine/             ← Lord Venkateswara & Murugan
│   ├── fleet/              ← All vehicle photos
│   ├── about/              ← Founder photo
│   ├── destinations/       ← Tour card thumbnails
│   ├── icons/              ← SVG icons
│   └── textures/           ← Background patterns
├── vercel.json             ← Vercel deployment config
└── README.md
```

---

## 🚀 Deployment (Vercel)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Akshaya Travels website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/akshaya-travels.git
git push -u origin main
```

### Step 2 — Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import the `akshaya-travels` repository
4. Framework: **Other** (static site)
5. Root Directory: `./`
6. Click **Deploy**

Your site will be live at: `https://akshaya-travels.vercel.app`

### Step 3 — Add Custom Domain (when purchased)
1. In Vercel dashboard → Project → Settings → Domains
2. Add your domain (e.g., `akshayatravels.in`)
3. Update your domain DNS with the records Vercel provides

---

## 📧 Formspree Setup (Booking Form)

The contact form uses [Formspree](https://formspree.io) to send emails.

### To activate:
1. Go to [formspree.io](https://formspree.io) and create a **free account**
2. Click **"New Form"** → name it "Akshaya Travels Booking"
3. Copy your unique **Form ID** (looks like: `xpwzgkbl`)
4. Open `pages/contact.html` and replace:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Verify your email (`akshayatravels9799@gmail.com`) in Formspree
6. Redeploy to Vercel

After that, every form submission will send an email directly to `akshayatravels9799@gmail.com`.

---

## 🌐 Features
- ✅ Bilingual: English & Telugu toggle
- ✅ Mobile responsive with hamburger drawer
- ✅ 6-tab Tour Packages page with pricing
- ✅ WhatsApp floating button (direct booking)
- ✅ Booking form via Formspree
- ✅ Scroll reveal animations
- ✅ Stats counter animation
- ✅ SEO meta tags + LocalBusiness JSON-LD schema
- ✅ Google Maps embed
- ✅ Fast loading (static HTML/CSS/JS)
