/* ============================================================
   AKSHAYA CABS — Main JavaScript
   Navbar | Language Toggle | Scroll Animations | Stats Counter
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -- Navbar scroll effect */
  const navbar = document.getElementById('navbar');
  if (navbar) window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* -- Mobile hamburger */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  const navOverlay = document.getElementById('navOverlay');
  if (hamburger) {
    const openMenu  = () => { hamburger.classList.add('open'); mobileNav.classList.add('open'); navOverlay.classList.add('open'); document.body.style.overflow='hidden'; };
    const closeMenu = () => { hamburger.classList.remove('open'); mobileNav.classList.remove('open'); navOverlay.classList.remove('open'); document.body.style.overflow=''; };
    hamburger.addEventListener('click', () => hamburger.classList.contains('open') ? closeMenu() : openMenu());
    navOverlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', closeMenu));
  }

  /* ---- TRANSLATIONS DICTIONARY -------------------------------- */
  const translations = {
    en: {
      /* NAV */
      'nav-home':'Home','nav-about':'About','nav-packages':'Tour Packages','nav-contact':'Contact',
      'nav-book':'Book a Tour',
      /* HERO */
      'hero-tag':'20 Years of Trusted Travel',
      'hero-title':'Journey to the <span class="highlight">Divine</span>',
      'hero-subtitle':'20 Years of Trusted Pilgrim & Leisure Travel from Tirupati — Your Sacred Journey Begins Here.',
      'hero-btn1':'Book a Tour','hero-btn2':'View Packages',
      /* STATS */
      'stat-years':'Years Experience','stat-pilgrims':'Happy Pilgrims','stat-dest':'Destinations','stat-support':'24/7 Support',
      /* FEATURED PACKAGES */
      'feat-tag':'Our Best Picks','feat-title':'Featured Tour Packages',
      'feat-sub':'Handpicked spiritual and leisure journeys departing from Tirupati.',
      'pkg1-badge':'Most Popular','pkg1-title':'Tirupati Divine Circuit',
      'pkg1-desc':'Visit Tirumala, Srikalahasti, Kanipakam & Tiruchanoor in one blessed day.',
      'pkg1-price':'₹3,500','pkg1-dur':'1 Day',
      'pkg2-badge':'5 Days','pkg2-title':'Aru Padai Yatra',
      'pkg2-desc':'All six sacred abodes of Lord Murugan across Tamil Nadu — a complete devotion.',
      'pkg2-price':'₹28,000','pkg2-dur':'5 Days',
      'pkg3-badge':'7 Days','pkg3-title':'Tamil Nadu Temple Tour',
      'pkg3-desc':'Kanchipuram, Madurai Meenakshi, Rameswaram, Chidambaram & Kanyakumari.',
      'pkg3-price':'₹28,000','pkg3-dur':'7 Days',
      /* FLEET */
      'fleet-tag':'Our Fleet','fleet-title':'Comfortable Vehicles for Every Journey',
      'fleet-sub':'Clean, air-conditioned, GPS-tracked vehicles with professional drivers.',
      /* DIVINE */
      'divine-tag':'Divine Blessings','divine-title':'Blessed by Our Family Deities',
      'divine-quote':'"Every journey we undertake is offered at the sacred feet of Lord Venkateswara and Lord Murugan."',
      'divine-lord1':'Lord Venkateswara','divine-lord2':'Lord Murugan',
      /* TESTIMONIALS */
      'testi-tag':'Testimonials','testi-title':'What Our Travellers Say',
      'testi-sub':'Trust built over 20 years — one happy pilgrim at a time.',
      'testi1-text':'"Excellent service! Ravi Kumar garu arranged our entire Aru Padai Yatra so smoothly. The vehicle was clean and the driver was very helpful and knowledgeable."',
      'testi1-name':'Ramesh Babu','testi1-place':'Hyderabad, Telangana',
      'testi2-text':'"We booked Kerala 7-day tour through Akshaya Cabs. Everything was perfectly organised. Very professional and reliable. Highly recommend!"',
      'testi2-name':'Sujatha Reddy','testi2-place':'Bengaluru, Karnataka',
      'testi3-text':'"Our family of 12 completed the Pancha Bhoota Lingas yatra in their Tempo Traveller. Comfortable ride, on-time pickups, and very courteous driver. Will book again!"',
      'testi3-name':'Venkata Narayana','testi3-place':'Chennai, Tamil Nadu',
      /* FOOTER */
      'footer-tagline':'20 years of trusted pilgrim & leisure travel from Tirupati. Serving devotees and travellers across India and beyond.',
      'footer-quick':'Quick Links','footer-tours':'Popular Tours','footer-contact-h':'Contact Us',
      'footer-f-home':'Home','footer-f-about':'About Us','footer-f-pkg':'Tour Packages','footer-f-contact':'Contact',
      'footer-tirupati':'Tirupati Surroundings','footer-aru':'Aru Padai Yatra','footer-pancha':'Pancha Bhoota Lingas',
      'footer-south':'South India Tours','footer-chardham':'Char Dham Yatra',
      'footer-copy':'© 2026 Akshaya Cabs, Tirupati. All rights reserved.',
      'footer-deity':'🙏 Blessed by Lord Venkateswara & Lord Murugan',
      /* PACKAGES PAGE */
      'pkg-page-h1':'Tour Packages',
      'pkg-page-sub':'Pilgrimage & leisure journeys crafted with 20 years of expertise — departing from Tirupati.',
      'tab-tirupati':'Tirupati Surroundings','tab-south':'South India','tab-special':'Special Packages',
      'tab-aru':'Aru Padai Yatra','tab-pancha':'Pancha Bhoota Lingas','tab-north':'North India',
      'tab1-intro':'🛕 <strong>Tirupati Divine Circuit</strong> — Visit the most sacred temples around Tirupati in one comfortable journey. Book the full circuit or individual temples as per your wish.',
      'tab1-places-h':'🗺️ Places Covered','tab1-price-h':'💰 Pricing',
      'tbl-package':'Package','tbl-places':'Places','tbl-vehicle':'Vehicle','tbl-price':'Price',
      'tab2-intro':'🌴 <strong>South India Tours</strong> — Explore the temples, backwaters, hills and beaches of South India with Akshaya Cabs. All packages depart from Tirupati.',
      'tab3-intro':'⭐ <strong>Special Packages</strong> — Curated multi-day journeys combining the most beloved pilgrimage destinations across Andhra Pradesh and beyond.',
      'tab4-intro':'🦚 <strong>Aru Padai Yatra</strong> — The six sacred abodes of Lord Murugan (Kartikeya) in Tamil Nadu. A complete pilgrimage dear to our founder\'s family.',
      'tab4-six-h':'The Six Abodes of Lord Murugan',
      'tab5-intro':'🔱 <strong>Pancha Bhoota Lingas</strong> — Five Shiva temples representing the 5 elements of nature (Earth, Water, Fire, Air, Space).',
      'tab5-five-h':'The Five Element Temples',
      'tab6-intro':'🏔️ <strong>North India Tours</strong> — From the Himalayan Char Dham to the sacred ghats of Varanasi and the Ram Mandir in Ayodhya.',
      'pkg-cta-h':'Can\'t find the right package?',
      'pkg-cta-p':'We create custom itineraries for any destination. Call us or fill the booking form and we\'ll design your perfect journey.',
      'pkg-cta-btn1':'📋 Enquire Now','pkg-cta-btn2':'💬 WhatsApp Us','pkg-cta-btn3':'📞 Call Now',
      /* ABOUT PAGE */
      'about-h1':'About Akshaya Cabs',
      'about-hero-sub':'Two decades of devotion, trust, and seamless journeys — rooted in Tirupati, reaching every sacred corner of India.',
      'about-founder-tag':'Our Founder',
      'about-founder-title':'Founder & Managing Director, Akshaya Cabs',
      'about-founder-p1':'With over <strong>20 years of dedicated experience</strong> in the travel industry, S. Ravi Kumar built Akshaya Cabs from the ground up with a single vision — to make every pilgrimage and leisure journey from Tirupati a truly blessed and seamless experience.',
      'about-founder-p2':'Born and raised in Tirupati, Ravi Kumar garu has an intimate knowledge of every pilgrim route, sacred site, and hidden gem across South India and beyond. His passion for service, combined with deep spiritual values, has earned Akshaya Cabs the trust of thousands of families over the years.',
      'about-founder-p3':'Under his leadership, the company has expanded from local Tirupati tours to pan-India packages including Char Dham, Aru Padai Yatra, and Pancha Bhoota Lingas — always maintaining the same personal touch and commitment to quality.',
      'about-founder-quote':'"Every journey is a prayer. We are just the vehicle that carries your devotion to the divine."',
      'about-values-tag':'Why Choose Us','about-values-title':'Our Core Values',
      'val1-title':'Spiritual Commitment','val1-desc':'We treat every journey as a pilgrimage — with reverence, care, and deep respect for your faith.',
      'val2-title':'20 Years of Trust','val2-desc':'Thousands of families have placed their trust in us. We honour that with consistent, reliable service.',
      'val3-title':'Premium Fleet','val3-desc':'Clean, air-conditioned, GPS-tracked vehicles with experienced, courteous professional drivers.',
      'val4-title':'24/7 Support','val4-desc':'We\'re available day and night. Any query, any emergency — Ravi Kumar garu is just a call away.',
      'val5-title':'Transparent Pricing','val5-desc':'No hidden charges. Clear, upfront pricing for all packages. What we quote is what you pay.',
      'val6-title':'Local Expertise','val6-desc':'Deep knowledge of pilgrimage routes, darshan timings, and local customs — built over 20 years.',
      'about-fleet-tag':'Our Fleet','about-fleet-title':'Vehicles for Every Group Size',
      'about-divine-tag':'Our Family Deities','about-divine-title':'Blessed at Every Step',
      'about-divine-p1':'The Ravi Kumar family places their complete faith in <strong style="color:var(--gold)">Lord Venkateswara</strong> of Tirumala and <strong style="color:var(--gold)">Lord Murugan</strong>. Every journey undertaken by Akshaya Cabs begins with a prayer to these divine presences.',
      'about-divine-p2':'It is this spiritual foundation that has guided Akshaya Cabs for over two decades — ensuring that every traveller who books with us is not just transported, but truly blessed on their journey.',
      'about-divine-quote':'"Om Namo Venkatesaya · Vel Muruga Haro Hara"',
      /* CONTACT PAGE */
      'contact-h1':'Book a Tour',
      'contact-hero-sub':'Tell us your travel plan — we will get back to you within 24 hours with the best options and pricing.',
      'contact-get-h':'Get in Touch',
      'contact-phone-label':'Phone (Primary & WhatsApp)',
      'contact-email-label':'Email',
      'contact-addr-label':'Address',
      'contact-addr-val':'DO.NO. 18-38-S3-314, Madura Nagar,<br/>Tirupati – 517 501, Andhra Pradesh',
      'contact-avail-label':'Availability',
      'contact-avail-val':'24 / 7 — Every day including holidays',
      'contact-wa-btn':'Chat on WhatsApp',
      'contact-form-h':'Tour Enquiry Form',
      'contact-form-sub':'Fill in your details and preferred tour. We will call you back within 24 hours.',
      'contact-success':'✅ Thank you! Your enquiry has been sent. We will contact you within 24 hours.',
      'contact-lbl-name':'Full Name','contact-lbl-phone':'Mobile Number',
      'contact-lbl-email':'Email Address','contact-lbl-city':'Your City',
      'contact-lbl-tour':'Tour Package','contact-lbl-date':'Preferred Date',
      'contact-lbl-pax':'No. of Passengers','contact-lbl-msg':'Additional Requirements',
      'contact-submit':'🙏 Send Enquiry',
      'contact-note':'We respond within 24 hours. You can also WhatsApp us directly for instant reply.',
      'map-tag':'Find Us','map-title':'Our Location',
      'map-sub':'Madura Nagar, Tirupati – 517 501, Andhra Pradesh',
    },
    te:{
      'nav-home':'హోమ్','nav-about':'మా గురించి','nav-packages':'టూర్ ప్యాకేజీలు','nav-contact':'సంప్రదించండి','nav-book':'టూర్ బుక్ చేయండి',
      'hero-tag':'20 సంవత్సరాల విశ్వసనీయ ప్రయాణం',
      'hero-title':'<span class="highlight">దివ్య</span> యాత్రకు స్వాగతం',
      'hero-subtitle':'తిరుపతి నుండి 20 సంవత్సరాల నమ్మకమైన పుణ్యక్షేత్ర & విహార యాత్రలు — మీ పవిత్ర ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది.',
      'hero-btn1':'టూర్ బుక్ చేయండి','hero-btn2':'ప్యాకేజీలు చూడండి',
      'stat-years':'సంవత్సరాల అనుభవం','stat-pilgrims':'సంతోషకర యాత్రికులు','stat-dest':'గమ్యస్థానాలు','stat-support':'24/7 సేవలు',
      'feat-tag':'మా ఉత్తమ ఎంపికలు','feat-title':'ముఖ్యమైన టూర్ ప్యాకేజీలు',
      'feat-sub':'తిరుపతి నుండి ఎంపిక చేసిన ఆధ్యాత్మిక మరియు విహార యాత్రలు.',
      'pkg1-badge':'అత్యంత ప్రజాదరణ','pkg1-title':'తిరుపతి దివ్య సర్క్యూట్','pkg1-desc':'తిరుమల, శ్రీకాళహస్తి, కాణిపాకం & తిరుచానూర్‌ను ఒక్క రోజులో సందర్శించండి.','pkg1-dur':'1 రోజు',
      'pkg2-badge':'5 రోజులు','pkg2-title':'అరు పడై యాత్ర','pkg2-desc':'తమిళనాడులోని శ్రీ మురుగుని ఆరు పవిత్ర ఆలయాలు — సంపూర్ణ భక్తి యాత్ర.','pkg2-dur':'5 రోజులు',
      'pkg3-badge':'7 రోజులు','pkg3-title':'తమిళనాడు ఆలయ యాత్ర','pkg3-desc':'కాంచీపురం, మధురై మీనాక్షి, రామేశ్వరం, చిదంబరం & కన్యాకుమారి.','pkg3-dur':'7 రోజులు',
      'fleet-tag':'మా వాహనాలు','fleet-title':'ప్రతి యాత్రకు సుఖవంతమైన వాహనాలు','fleet-sub':'శుభ్రమైన, ఏసీ, GPS అనుసంధానిత వాహనాలు మరియు నిపుణులైన డ్రైవర్లు.',
      'divine-tag':'దైవ ఆశీర్వాదాలు','divine-title':'మా కుటుంబ దేవతల ఆశీర్వాదంతో',
      'divine-quote':'"మేము చేపట్టే ప్రతి యాత్ర శ్రీ వెంకటేశ్వరుని మరియు శ్రీ మురుగుని పవిత్ర పాదాల వద్ద అర్పించబడుతుంది."',
      'divine-lord1':'శ్రీ వెంకటేశ్వరుడు','divine-lord2':'శ్రీ మురుగుడు',
    }
  };

  /* Merge extra translations from i18n-extra.js if loaded */
  if (window.AT_EXTRA) {
    ['en','te'].forEach(l => {
      translations[l] = Object.assign({}, translations[l] || {}, window.AT_EXTRA[l] || {});
    });
  }
  window.AT_LANG = translations;

  let currentLang = localStorage.getItem('at_lang') || 'en';

  function applyLang(lang) {
    /* Re-merge in case i18n-extra loaded after main.js */
    if (window.AT_EXTRA) {
      ['en','te'].forEach(l => {
        translations[l] = Object.assign({}, translations[l] || {}, window.AT_EXTRA[l] || {});
      });
    }
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t && t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t && t[key]) el.placeholder = t[key];
    });
    document.querySelectorAll('option[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t && t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
  }

  window.AT_APPLY = applyLang;
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('at_lang', currentLang);
      applyLang(currentLang);
    });
  });

  /* Stats counter */
  const counters = document.querySelectorAll('[data-target]');
  let counted = false;
  function animateCounters() {
    if (counted) return;
    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;
    const rect = statsBar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      counted = true;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || '';
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { counter.textContent = target + suffix; clearInterval(timer); }
          else counter.textContent = Math.floor(current) + suffix;
        }, 16);
      });
    }
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  /* Scroll reveal */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* Tab switching (packages page) */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  /* Active nav link */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 120) current = sec.id; });
    navLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + current || a.getAttribute('href') === current + '.html'); });
  }, { passive: true });

});