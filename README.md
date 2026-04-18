# Akshaya Travels — Project Documentation

## 📁 Project Location
`d:\AkshyaTravel\`

## 🌐 Local Dev Server
```
npx -y serve . --listen 5500 --no-clipboard
```
Then open: `http://localhost:5500`

> **Note:** The project uses **VS Code Live Server** (port 5500) OR `npx serve` as fallback.

---

## 📂 Project Structure

```
d:\AkshyaTravel\
├── index.html                  ← Homepage
├── pages/
│   ├── about.html              ← About Us page
│   ├── packages.html           ← Tour Packages page
│   └── contact.html            ← Contact & Book a Tour page
├── css/
│   ├── style.css               ← Global design system (ALL pages)
│   └── packages.css            ← Packages + inner page styles
├── js/
│   ├── main.js                 ← Navbar, language toggle, animations, translations (EN+TE)
│   └── i18n-extra.js           ← Extra Telugu/English translations for inner pages
├── images/
│   ├── hero/                   ← Hero section images
│   ├── fleet/                  ← Car/vehicle images
│   ├── destinations/           ← Tour destination images
│   ├── brand/                  ← Logo files
│   └── textures/               ← Background patterns
└── README.md                   ← This file
```

---

## 🎨 Design System (style.css)

### Color Palette
```css
:root {
  /* Brand Colors */
  --saffron:      #E8871A;      /* CTAs, highlights, active states */
  --saffron-dark: #C96E0A;
  --maroon:       #8B2035;      /* Stats bar bg, CTA banners, badges */
  --maroon-dark:  #5A1220;
  --gold:         #D4AF37;      /* Section titles, active tabs, headings */
  --gold-light:   #F0D060;      /* Divine section, gold accents */

  /* Dark Theme Backgrounds — Midnight Indigo */
  --bg-page:      #120E28;      /* Main page background */
  --bg-card:      #1C1838;      /* Card backgrounds */
  --bg-elevated:  #231F42;      /* Elevated cards */
  --bg-deep:      #0C0A20;      /* Footer, deepest sections */
  --bg-subtle:    #271E45;      /* Subtle section variation */

  /* Text Colors */
  --text-primary: #F0E4D0;      /* Main body text */
  --text-muted:   #A89880;      /* Muted/secondary text */
  --text-dim:     #6B5C4C;      /* Very dim text */

  /* Legacy aliases (kept for compatibility) */
  --ivory:        #120E28;      /* = --bg-page */
  --charcoal:     #0C0A20;      /* = --bg-deep */
  --brown:        #F0E4D0;      /* = --text-primary (body color) */
  --cream:        #F5ECD7;      /* Warm light cream for highlights */
  --muted:        #A89880;      /* = --text-muted */
  --white:        #ffffff;      /* True white */
}
```

### Typography
- **Headings:** `Playfair Display` (Google Fonts)
- **Body:** `Inter` (Google Fonts)
- **Quotes:** `Cormorant Garamond`
- **Telugu:** `Noto Sans Telugu`

### Key CSS Rules
- `.section-title { color: #D4AF37; }` — Gold (NOT maroon — maroon is invisible on dark bg)
- `.section-tag { color: var(--saffron); }` — Saffron for section labels
- `body { background: var(--bg-page); color: var(--brown); }` — Dark warm charcoal

---

## 🌏 Language System (EN / Telugu)

### How it works
1. **`js/main.js`** — Contains the full translation dictionary `translations = { en: {...}, te: {...} }` and the `applyLang(lang)` function
2. **`js/i18n-extra.js`** — Defines `window.AT_EXTRA = { en: {...}, te: {...} }` with additional page-specific keys; main.js merges these in
3. **HTML** — Every translatable element has `data-i18n="key"` attribute; form placeholders use `data-i18n-ph="key"`
4. **Storage** — Selected language saved in `localStorage('at_lang')`

### Script Loading Order (ALL 4 pages)
```html
<script src="../js/main.js"></script>      <!-- must be FIRST -->
<script src="../js/i18n-extra.js"></script> <!-- extends main.js after load -->
```
(index.html uses `src="js/..."` without `../`)

### Translation Keys Coverage — **126 keys** across all 4 pages
- Navbar (home, about, packages, contact, book)
- Hero sections, stats bar
- Featured packages, fleet section
- Testimonials, footer
- About: founder bio, values, divine section
- Packages: all 6 tabs, table headers, CTA
- Contact: all form labels, placeholders, select options, buttons

### Adding New Translations
Add to **both** `en` and `te` blocks in `i18n-extra.js`:
```js
window.AT_EXTRA = {
  en: { 'new-key': 'English text' },
  te: { 'new-key': 'తెలుగు వచనం' }
};
```
Then add to HTML: `<element data-i18n="new-key">English text</element>`

---

## 🧭 Navigation (Navbar)

### Sticky Navbar
- The navbar is **position: fixed** with backdrop blur
- Background: `rgba(26,20,16,0.97)` — dark warm translucent
- **Scrolled state**: adds box-shadow via JS `.scrolled` class
- Nav links use hardcoded `#F5ECD7` (NOT var(--cream)) to ensure visibility on dark bg

### Mobile Nav
- Hamburger button: `class="hamburger"` — 3 bars at `#F5ECD7`
- Mobile drawer: `class="mobile-nav"` — slides in from right
- JS handles open/close in `main.js`

### Inner Page Nav Links
All inner pages (about, packages, contact) have `data-i18n` on nav links:
```html
<a href="../index.html" data-i18n="nav-home">Home</a>
<a href="about.html" data-i18n="nav-about">About</a>
<a href="packages.html" data-i18n="nav-packages">Tour Packages</a>
<a href="contact.html" data-i18n="nav-contact">Contact</a>
```

---

## 📞 Contact Information (IMPORTANT)

- **Email:** akshayatravels9799@gmail.com
- **Phone 1:** +91 93939 00006
- **Phone 2:** +91 72888 76667
- **WhatsApp:** +919393900006
- **Address:** DO.NO. 18-38-S3-314, Madura Nagar, Tirupati – 517 501, Andhra Pradesh

---

## ✅ Completed Work (Session History)

### Phase 1 — Email Update
- Changed all email references site-wide

### Phase 2 — Dark Premium Theme
- Replaced pale ivory `#FDF6EC` bg with deep charcoal `#0D0A08`
- All cards: dark walnut `#1A1410`
- Headings: Gold `#D4AF37` (changed from maroon which was invisible on dark bg)
- Saffron + Gold CTAs pop on dark background
- Custom dark scrollbar added

### Phase 3 — Sticky Navbar Fix
- Nav links were invisible (dark text on dark bg)
- Fixed by hardcoding `#F5ECD7` for all nav link colors
- Hamburger bars fixed with same color
- Mobile drawer links fixed

### Phase 4 — Telugu Language System (Complete)
- Built full EN/TE translation dictionary (126 keys)
- `main.js` contains home page translations + core logic
- `i18n-extra.js` extends with about/packages/contact page keys
- All 4 HTML pages tagged with `data-i18n` attrs
- Form placeholders use `data-i18n-ph`
- Select options translated
- Language preference persists across page navigation via localStorage

### Phase 5 — Color Contrast Fix
- Root cause: CSS variables `--white`, `--cream` were overwritten to dark values
- Fixed: Restored all variables to correct values, added new `--bg-*` variables
- All `color: var(--maroon)` on dark backgrounds → changed to `#D4AF37` (gold)
- Fixed in: style.css, packages.css, about.html inline `<style>` block
- Zero broken color references remain

### Phase 6 — Midnight Indigo Theme (Latest)
- Replaced near-black warm browns with rich **Midnight Indigo** palette
- `--bg-page: #120E28` (was #0D0A08)
- `--bg-deep: #0C0A20` (was #080604)
- `--bg-card: #1C1838`, `--bg-elevated: #231F42`, `--bg-subtle: #271E45`
- Updated scrollbar track, navbar scrolled bg, hero overlay, footer
- All pages render a clear deep indigo instead of appearing black

---

## 🚧 Known Pending Enhancements (To Do)

- [ ] More package detail pages
- [ ] Gallery/photo section
- [ ] Blog/testimonials expansion
- [ ] SEO meta tags review
- [ ] Mobile responsive audit
- [ ] Performance optimization (image compression)
- [ ] Additional tour route pages

---

## ⚠️ Critical Rules for Future Development

1. **NEVER use `color: var(--maroon)` on dark card/section backgrounds** — maroon (#8B2035) is only for backgrounds (stats bar, CTA banner, badges). Use `#D4AF37` (gold) for text on dark bg.
2. **NEVER use `color: var(--cream)` or `color: var(--white)` as text colors** — these are now light values. Just use `#F5ECD7` or `#fff` directly.
3. **Always load `main.js` BEFORE `i18n-extra.js`** in script tags.
4. **For new translatable text**, add to both `en` and `te` in `i18n-extra.js` AND add `data-i18n="key"` to the HTML element.
5. **For inner pages** (about/packages/contact), use `src="../js/..."` (with `../` prefix) for CSS and JS.
6. **Sticky navbar** is hardcoded — do not change navbar background or link colors to use CSS variables.
