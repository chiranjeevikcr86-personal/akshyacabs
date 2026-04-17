# Akshaya Travels — Product Requirements Document (PRD)

> **Version:** 1.0 | **Date:** April 17, 2026
> **Prepared for:** S. Ravi Kumar, Founder – Akshaya Travels
> **Hosting:** GitHub + Vercel (Static Site)

---

## 1. Business Overview

| Field | Details |
|---|---|
| **Business Name** | Akshaya Travels |
| **Founder** | S. Ravi Kumar |
| **Experience** | 20 Years in Travel & Tourism Industry |
| **Primary Phone / WhatsApp** | +91 93939 00006 |
| **Secondary Phone** | +91 72888 76667 |
| **Address** | DO.NO. 18-38-S3-314, Madura Nagar, Tirupati – 517 501, Andhra Pradesh |
| **Base City** | Tirupati, Andhra Pradesh |
| **Service Area** | Local (Tirupati & surroundings) → Pan-India → International |
| **Family Deity** | Lord Venkateswara & Lord Murugan |
| **Founder Photo** | To be uploaded by client |

---

## 2. Project Goals

1. Build a **world-class, mobile-first static website** that far surpasses the reference site (kottiditravelstirupati.com) in design, UX, and content quality.
2. Establish **trust and credibility** through professional design, founder story, and testimonials.
3. Drive **tour bookings** via an integrated enquiry/booking form.
4. Support **English (primary) and Telugu (toggle)** languages.
5. Deploy via **Vercel** with source code managed on **GitHub**.
6. Ensure full **SEO optimization** from day one.

---

## 3. Target Audience

- Pilgrims visiting Tirumala / Tirupati
- Families looking for organized South India temple tours
- Corporate groups / outstation travelers
- Telugu-speaking diaspora planning homeland visits
- International travelers with South Asia itineraries

---

## 4. Site Architecture & Navigation

### 4.1 Primary Navigation

```
NAVBAR
├── Home          (Hero landing sections)
├── About         (Founder story, fleet, why choose us)
├── Tour Packages (All packages — filtered by category tabs)
└── Contact       (Address, phones, booking enquiry form)
```

> **Design Rule:** All sub-packages (Tirupati Local, Special Packages, Aru Padai Yatra, Pancha Bhoota Lingas, etc.) live **inside the Tour Packages page as category tabs** — NOT as separate navbar items. This keeps the navbar clean and professional.

### 4.2 Tour Packages Tab Structure

| Tab # | Tab Label | Description |
|---|---|---|
| 1 | Tirupati Surroundings | Local Tirupati + nearby temples |
| 2 | South India Tours | Tamil Nadu, Karnataka, Kerala, Goa |
| 3 | Special Packages | Curated multi-day themed packages |
| 4 | Aru Padai Yatra | 6 Murugan temples pilgrimage |
| 5 | Pancha Bhoota Lingas | 5 Shiva element temples |
| 6 | North India Tours | Char Dham, Varanasi, Rajasthan |

---

## 5. Page-by-Page Requirements

### 5.1 Home Page (Landing Page)

**Hero Section**
- Full-screen background: Tirumala hills + car silhouette at dusk
- Headline: *"Journey to the Divine — Akshaya Travels"*
- Sub-headline: *"20 Years of Trusted Pilgrim & Leisure Travel from Tirupati"*
- Two CTA buttons: `Book a Tour` (→ Contact) | `View Packages` (→ Packages page)
- Animated scroll indicator

**Stats Bar (animated counters)**
- 20+ Years Experience | 10,000+ Happy Pilgrims | 500+ Destinations | 24/7 Support

**Featured Tour Cards (4 cards)**
- Tirupati Darshan, Aru Padai Yatra, Kerala 7-Day, Char Dham Yatra

**Fleet Showcase Strip**
- Horizontal scroll of car images (Dzire, Innova, Innova Crysta, Tempo Traveller, Urbania)

**Testimonials Section**
- 3 customer testimonials with star rating, name, and city

**Divine Blessings Banner** *(prominent, always visible)*
- Lord Venkateswara image + Lord Murugan image side by side
- Caption: *"Blessed by Lord Venkateswara & Lord Murugan — Every Journey is Sacred"*

**WhatsApp Floating Button**
- Fixed bottom-right corner → `wa.me/919393900006`

---

### 5.2 About Page

1. **Founder Story** — Photo + bio of S. Ravi Kumar (20 years, Tirupati-based, devotion-first service)
2. **Our Mission** — Safe, comfortable, spiritually fulfilling travel
3. **Why Choose Akshaya Travels?** — 6 icon-cards: Experience, 24/7 Support, Clean Fleet, Fixed Pricing, Pilgrimage Expertise, Local Knowledge
4. **Our Fleet** — Vehicle cards with specs and pricing table
5. **Divine Blessings** — Lord Venkateswara & Murugan images with devotional quote

**Vehicle Fleet & Pricing:**

| Vehicle | Seats | Local Day Rate | Outstation Rate (per km) |
|---|---|---|---|
| Maruti Dzire / Etios | 4+1 | ₹2,000/day (100 km min) | ₹14/km |
| Toyota Ertiga | 6+1 | ₹2,500/day | ₹16/km |
| Toyota Innova | 7+1 | ₹2,500/day | ₹18/km |
| Toyota Innova Crysta | 7+1 | ₹3,000/day | ₹20/km |
| Tempo Traveller (12 Seater) | 12+1 | ₹3,500/day | ₹22/km |
| Force Urbania (17 Seater) | 17+1 | ₹6,500/day | ₹35/km |

> *Toll, parking & driver food allowance extra. State border permits included for outstation.*

---

### 5.3 Tour Packages Page

#### TAB 1 — Tirupati Surroundings

**Full Day "Tirupati Divine Circuit" Package**

| Place | Distance from Tirupati | Notes |
|---|---|---|
| Tirumala Venkateswara Temple | 19 km | Primary darshan |
| Srikalahasteeswara Temple | 36 km | Pancha Bhoota — Air/Vayu |
| Kanipakam Vinayaka Temple | 75 km | Famous Ganesha shrine |
| Tiruchanoor (Padmavathi Temple) | 5 km | Near Tirupati city |
| Gudimallam (Parasurameswara) | 14 km | Ancient Shiva temple |
| Srinivasamangapuram | 10 km | Venugopala Swamy temple |
| Appalayagunta | 8 km | Anjaneya Swamy temple |

**Pricing:**

| Package Type | Vehicle | Estimated Price |
|---|---|---|
| Full Circuit — all 7 places (1 day) | Innova | ₹3,500–₹4,500 |
| Half-day Local (3–4 places) | Dzire | ₹1,800–₹2,500 |
| Individual: Kalahasti only | Dzire | ₹1,200 |
| Individual: Kanipakam only | Innova | ₹2,000 |
| Individual: Tiruchanoor only | Dzire | ₹600 |

---

#### TAB 2 — South India Tours

**Package 2A: Tamil Nadu 7-Day Temple Tour** (~1,800 km)
- Tirupati → Kanchipuram → Mahabalipuram → Chennai → Chidambaram → Kumbakonam → Thanjavur (Brihadeeswarar) → Madurai (Meenakshi) → Rameswaram → Kanyakumari → return
- **Innova Crysta:** ₹28,000–₹35,000 | **Tempo Traveller:** ₹42,000–₹50,000

**Package 2B: Karnataka 5-Day Tour** (~1,400 km)
- Tirupati → Bangalore → Mysore (Chamundeshwari) → Coorg → Chikmagalur → Hampi → return
- **Innova Crysta:** ₹22,000–₹28,000

**Package 2C: Kerala 7-Day Tour** (~2,000 km)
- Tirupati → Trivandrum (Padmanabhaswamy) → Varkala → Alleppey (Houseboat) → Munnar → Guruvayur → Calicut → return
- **Innova Crysta:** ₹32,000–₹40,000

**Package 2D: Goa 4-Day Tour** (~1,100 km)
- Tirupati → Goa (North + South beaches, Old Goa churches) → return
- **Innova Crysta:** ₹20,000–₹26,000

**Package 2E: Srisailam Pilgrimage (2 Days)** (~400 km)
- Tirupati → Nagarjunasagar → Srisailam Jyotirlinga → return
- **Innova:** ₹8,000–₹10,000

---

#### TAB 3 — Special Packages

**Package 3A: Andhra Pradesh Temple Trail (3 Days)**
- Tirupati → Ahobilam (Narasimha) → Mahanandi → Srisailam → return
- **Innova:** ₹12,000–₹16,000

**Package 3B: Tirupati–Puri–Bhubaneswar (5 Days)** (~1,800 km)
- Tirupati → Vijayawada → Bhubaneswar (Lingaraj) → Puri (Jagannath) → Konark Sun Temple → return
- **Innova Crysta:** ₹30,000–₹38,000

**Package 3C: Tirupati–Hyderabad–Warangal (2 Days)**
- Tirupati → Yadadri Lakshmi Narasimha → Hyderabad (Birla Mandir + Charminar) → Warangal (1000 Pillar Temple) → return
- **Innova:** ₹10,000–₹14,000

---

#### TAB 4 — Aru Padai Yatra (Six Abodes of Lord Murugan)

> Sacred pilgrimage of Lord Murugan — Founder's family deity. All 6 temples in Tamil Nadu.

**The Six Temples:**

| # | Temple | Location | Distance from Tirupati |
|---|---|---|---|
| 1 | Thiruchendur Murugan | Coastal South TN | ~580 km |
| 2 | Palani Murugan | Dindigul District | ~480 km |
| 3 | Swamimalai Murugan | Near Kumbakonam | ~430 km |
| 4 | Thiruthani Murugan | Near Chennai | ~100 km |
| 5 | Pazhamudircholai | Near Madurai | ~520 km |
| 6 | Thiruparamkunram | Near Madurai | ~520 km |

**Package Options:**

| Duration | Route | Vehicle | Price |
|---|---|---|---|
| 3 Days | Thiruthani → Palani → Swamimalai → return | Innova | ₹18,000–₹22,000 |
| 5 Days | Complete Aru Padai (all 6) | Innova Crysta | ₹28,000–₹35,000 |
| 5 Days | Complete Aru Padai (group) | Tempo Traveller | ₹40,000–₹48,000 |

---

#### TAB 5 — Pancha Bhoota Lingas (5 Elements of Shiva)

> Five sacred Shiva temples representing the 5 elements of nature.

| # | Temple | Location | Element |
|---|---|---|---|
| 1 | Ekambareswarar | Kanchipuram | Earth (Prithvi) |
| 2 | Jambukeswarar | Thiruvanaikaval, Trichy | Water (Jala) |
| 3 | Arunachaleswarar | Tiruvannamalai | Fire (Agni) |
| 4 | Srikalahasteeswara | Kalahasti | Air (Vayu) |
| 5 | Chidambaram Nataraja | Chidambaram | Space (Akash) |

**Package Options:**

| Duration | Route | Vehicle | Price |
|---|---|---|---|
| 2 Days | Kalahasti + Tiruvannamalai + Kanchipuram | Innova | ₹8,000–₹12,000 |
| 4 Days | All 5 Pancha Bhoota Lingas | Innova Crysta | ₹20,000–₹26,000 |
| 4 Days | All 5 (group) | Tempo Traveller | ₹30,000–₹38,000 |

---

#### TAB 6 — North India Tours

**Package 6A: Char Dham Yatra (12 Days)**
- Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Rishikesh
- **Price:** ₹45,000–₹65,000/person (vehicle + guide; flight + hotel quoted separately)

**Package 6B: Varanasi–Prayagraj–Ayodhya (5 Days)**
- Tirupati (fly) → Varanasi (Ganga Aarti, Kashi Vishwanath) → Prayagraj (Triveni Sangam) → Ayodhya (Ram Mandir)
- **Price:** ₹25,000–₹35,000/person

**Package 6C: Rajasthan Spiritual & Heritage Trail (7 Days)**
- Delhi → Pushkar (Brahma Temple) → Ajmer Sharif → Nathdwara → Udaipur → Ranakpur Jain Temples
- **Price:** Custom quote

---

### 5.4 Contact Page

**Sections:**
1. Contact cards — address, both phone numbers (click-to-call), WhatsApp link
2. Google Maps embed — Madura Nagar, Tirupati
3. Tour Enquiry / Booking Form (see below)

**Booking Form Fields:**

| Field | Type | Required |
|---|---|---|
| Full Name | Text | ✅ |
| Phone Number | Tel | ✅ |
| Email Address | Email | ❌ |
| Number of Passengers | Number | ✅ |
| Tour Package Interested In | Dropdown (all packages listed) | ✅ |
| Preferred Travel Date | Date | ✅ |
| Return Date | Date | ❌ |
| Pickup Location | Text | ✅ |
| Drop Location | Text | ❌ |
| Vehicle Preference | Dropdown (fleet list) | ❌ |
| Special Requirements / Message | Textarea | ❌ |

**Form Submission:** Via **Formspree** (free tier) — emails submission to client's email. WhatsApp pre-filled link shown as quick-contact fallback.

---

## 6. Bilingual Support (English ↔ Telugu)

- Language toggle button `EN | తె` in top-right of navbar
- All UI text available in both languages via `lang/en.json` + `lang/te.json`
- JS switcher — no page reload, persists via `localStorage`
- Default language: **English**
- Telugu font: **Noto Sans Telugu** (Google Fonts)

**Telugu translations required for:** Navbar, hero, about section, package names/descriptions, form labels, footer.

---

## 7. Design System

### 7.1 Color Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| Primary | Royal Saffron | `#E8871A` | Buttons, CTAs, highlights |
| Secondary | Deep Maroon | `#7B1C2E` | Navbar, section headers |
| Accent | Temple Gold | `#D4AF37` | Icons, borders, dividers |
| Background | Warm Ivory | `#FDF6EC` | Page background |
| Dark BG | Night Charcoal | `#1A1410` | Hero, dark sections |
| Text | Deep Brown | `#2C1A0E` | Body text |
| Text Light | Soft Cream | `#F5ECD7` | Text on dark backgrounds |

### 7.2 Typography

| Usage | Font | Source |
|---|---|---|
| Headings | Playfair Display | Google Fonts |
| Body | Inter | Google Fonts |
| Telugu text | Noto Sans Telugu | Google Fonts |
| Quotes / Accent | Cormorant Garamond | Google Fonts |

### 7.3 Design Style

- **Theme:** Devotional Luxury — temple silhouettes, warm amber/gold gradients
- **Cards:** Glassmorphism style with gold border accents
- **Animations:** Fade-in on scroll, counter animations, hover card lift
- **Icons:** Lucide Icons + custom SVG temple motifs
- **Dividers:** Decorative lotus / kolam SVG patterns between sections

---

## 8. Image Requirements

> A separate **`images.md`** document will be created listing every image with:
> - Image filename
> - Page + section location
> - Dimensions (width × height in px)
> - AI generation prompt / description

**Image Categories:**
1. **Logo** — Akshaya Travels with lotus/temple motif
2. **Hero Backgrounds** — Tirumala hills, temple gopuram, car on mountain road at dusk
3. **Lord Venkateswara** — Home (Divine Blessings) + About page
4. **Lord Murugan** — Home (Divine Blessings) + About page
5. **Fleet / Car Images** — Dzire, Ertiga, Innova, Innova Crysta, Tempo Traveller, Urbania
6. **Destination Images** — Tirumala, Kalahasti, Kanipakam, Rameswaram, Madurai Meenakshi, Kanyakumari, Kerala backwaters, Char Dham, etc.
7. **Founder Photo Frame** — Decorative frame placeholder
8. **Tour Package Card Thumbnails** — One per major package

---

## 9. SEO Requirements

| Element | Value |
|---|---|
| Page Title | Akshaya Travels Tirupati – Best Temple Tours & Pilgrimage Packages |
| Meta Description | Akshaya Travels, Tirupati – 20+ years of trusted pilgrimage & leisure travel. Tirupati local tours, South India packages, Aru Padai Yatra, Char Dham & more. Call: 93939 00006 |
| H1 (Home) | Journey to the Divine — Akshaya Travels, Tirupati |
| Structured Data | LocalBusiness (JSON-LD) schema |
| OG Tags | Full Open Graph tags for all pages |
| Sitemap | sitemap.xml |
| robots.txt | Standard allow-all |
| Image Alts | Descriptive alt text on all images |

---

## 10. Mobile-First Requirements

- Responsive breakpoints: 375px, 768px, 1024px, 1440px
- Mobile hamburger menu with smooth slide-in drawer
- Swipeable touch carousels for tour package cards
- Click-to-call phone number links
- WhatsApp floating button always visible
- Form optimized for mobile keyboard input types
- Lazy-loaded images with proper `srcset`
- Target page load: **< 3 seconds on 4G**

---

## 11. Technical Stack

| Component | Technology |
|---|---|
| Type | Pure static site — HTML5 + CSS3 + Vanilla JS |
| CSS | Custom CSS with CSS variables (no Tailwind) |
| Fonts | Google Fonts CDN |
| Icons | Lucide Icons (CDN) |
| Form Backend | Formspree (free tier) |
| Language Toggle | Vanilla JS + JSON files |
| Animations | CSS keyframes + Intersection Observer API |
| Maps | Google Maps Embed (iframe) |
| Deployment | Vercel (auto-deploy from GitHub) |
| Version Control | GitHub |

---

## 12. Phased Execution Plan

### PHASE 1 — Foundation & Design System
**Scope:** Project setup, design tokens, Home page, Navbar, Footer, `images.md`

- [ ] GitHub repository: `akshaya-travels`
- [ ] Folder structure: `/assets`, `/css`, `/js`, `/images`, `/pages`, `/lang`
- [ ] `index.css` — Full design system (colors, typography, spacing, utilities, animations)
- [ ] `index.html` — Home page (Hero + Stats + Featured Packages + Testimonials + Divine Blessings + Footer)
- [ ] Responsive Navbar (desktop + mobile hamburger drawer)
- [ ] WhatsApp floating button
- [ ] `images.md` — Complete image specification document
- [ ] Basic SEO meta tags
- [ ] Vercel deployment connected to GitHub

---

### PHASE 2 — Tour Packages Page
**Scope:** All 6 package tabs with full itineraries and pricing

- [ ] `packages.html` with 6-tab layout
- [ ] Tab 1: Tirupati Surroundings (7 places + individual pricing)
- [ ] Tab 2: South India Tours (5 packages with itinerary + pricing)
- [ ] Tab 3: Special Packages (3 packages)
- [ ] Tab 4: Aru Padai Yatra (6 temples, 2 options)
- [ ] Tab 5: Pancha Bhoota Lingas (5 temples, 2 options)
- [ ] Tab 6: North India Tours (3 packages)
- [ ] Package card component (image, title, duration, highlights, price, Book Now CTA)
- [ ] Swipeable mobile carousel for cards

---

### PHASE 3 — About Page & Fleet Section
**Scope:** Build trust with founder story and fleet showcase

- [ ] `about.html`
- [ ] Founder section (photo placeholder + 20-year bio)
- [ ] "Why Choose Us" — 6 icon cards
- [ ] Fleet section — vehicle cards with full specs + pricing table
- [ ] Divine Blessings section (Venkateswara + Murugan with devotional quote)
- [ ] Experience timeline (20 years)

---

### PHASE 4 — Contact Page & Booking Form
**Scope:** Enable enquiries and bookings

- [ ] `contact.html`
- [ ] Full booking enquiry form (all fields from Section 5.4)
- [ ] Formspree integration
- [ ] Google Maps embed
- [ ] Click-to-call links for both numbers
- [ ] WhatsApp pre-filled message link
- [ ] Client-side form validation
- [ ] Success / error states

---

### PHASE 5 — Bilingual Telugu + SEO + Launch Polish
**Scope:** Telugu language, full SEO, testing, and go-live

- [ ] Language toggle button `EN | తె` in navbar
- [ ] `lang/en.json` + `lang/te.json` translation files
- [ ] JS language switcher (localStorage persistence)
- [ ] Full SEO: meta, OG tags, JSON-LD LocalBusiness schema, sitemap.xml, robots.txt
- [ ] All images integrated (post client upload from `images.md`)
- [ ] Founder photo integrated
- [ ] Cross-browser testing: Chrome, Firefox, Safari, Edge
- [ ] Mobile testing: Android + iOS
- [ ] Lighthouse audit (target score: **90+**)
- [ ] Final Vercel production deployment
- [ ] Custom domain setup (if client has domain)

---

## 13. Out of Scope (Phase 1–5)

- Payment gateway / online payment
- CMS / admin dashboard
- Blog / news section
- Live chat widget
- Customer login / accounts

---

## 14. Open Questions for Client

| # | Question |
|---|---|
| 1 | **Domain Name:** Do you have one? Suggested: `akshayatravels.in` or `akshayatravelstitupati.com` |
| 2 | **Email:** Which email should booking form submissions go to? |
| 3 | **Founder Photo:** Please provide a clear photo (min 400×400 px) |
| 4 | **Testimonials:** Please provide 3–5 real customer quotes (name + city) |
| 5 | **Google Business Listing:** Do you have one? (for accurate Maps pin) |
| 6 | **Social Media:** Facebook / Instagram handles to link? |
| 7 | **Pricing Confirmation:** Please confirm all pricing ranges before publishing |

---

## 15. Reference & Inspiration

| Source | Purpose |
|---|---|
| kottiditravelstirupati.com | Content reference only (NOT design reference) |
| makemytrip.com | Package card UX inspiration |
| thrillophilia.com | Tour detail page layout inspiration |
| cleartrip.com | Filter & tab UI patterns |

---

*This PRD is the single source of truth for the Akshaya Travels website project. All phases to be executed sequentially with client review at each phase gate.*
