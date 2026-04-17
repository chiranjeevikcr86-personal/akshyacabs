/* ============================================================
   AKSHAYA TRAVELS — Main JavaScript
   Navbar | Language Toggle | Scroll Animations | Stats Counter
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ──────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── Mobile hamburger ──────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  const navOverlay = document.getElementById('navOverlay');

  function openMenu() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });
  navOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', closeMenu));

  /* ── Language toggle ───────────────────────────────────── */
  const translations = {
    en: {
      'nav-home':      'Home',
      'nav-about':     'About',
      'nav-packages':  'Tour Packages',
      'nav-contact':   'Contact',
      'hero-tag':      '20 Years of Trusted Travel',
      'hero-title':    'Journey to the <span class="highlight">Divine</span>',
      'hero-subtitle': '20 Years of Trusted Pilgrim & Leisure Travel from Tirupati — Your Sacred Journey Begins Here.',
      'hero-btn1':     'Book a Tour',
      'hero-btn2':     'View Packages',
      'stat-years':    'Years Experience',
      'stat-pilgrims': 'Happy Pilgrims',
      'stat-dest':     'Destinations',
      'stat-support':  '24/7 Support',
      'feat-tag':      'Our Best Picks',
      'feat-title':    'Featured Tour Packages',
      'feat-sub':      'Handpicked spiritual and leisure journeys departing from Tirupati.',
      'fleet-tag':     'Our Fleet',
      'fleet-title':   'Comfortable Vehicles for Every Journey',
      'fleet-sub':     'Clean, air-conditioned, GPS-tracked vehicles with professional drivers.',
      'divine-tag':    'Divine Blessings',
      'divine-title':  'Blessed by Our Family Deities',
      'divine-quote':  '"Every journey we undertake is offered at the sacred feet of Lord Venkateswara and Lord Murugan."',
      'divine-lord1':  'Lord Venkateswara',
      'divine-lord2':  'Lord Murugan',
      'testi-tag':     'Testimonials',
      'testi-title':   'What Our Travellers Say',
      'testi-sub':     'Trust built over 20 years — one happy pilgrim at a time.',
    },
    te: {
      'nav-home':      'హోమ్',
      'nav-about':     'మా గురించి',
      'nav-packages':  'టూర్ ప్యాకేజీలు',
      'nav-contact':   'సంప్రదించండి',
      'hero-tag':      '20 సంవత్సరాల విశ్వసనీయ ప్రయాణం',
      'hero-title':    '<span class="highlight">దివ్య</span> యాత్రకు స్వాగతం',
      'hero-subtitle': 'తిరుపతి నుండి 20 సంవత్సరాల నమ్మకమైన పుణ్యక్షేత్ర & విహార యాత్రలు — మీ పవిత్ర ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది.',
      'hero-btn1':     'టూర్ బుక్ చేయండి',
      'hero-btn2':     'ప్యాకేజీలు చూడండి',
      'stat-years':    'సంవత్సరాల అనుభవం',
      'stat-pilgrims': 'సంతోషకర యాత్రికులు',
      'stat-dest':     'గమ్యస్థానాలు',
      'stat-support':  '24/7 సేవలు',
      'feat-tag':      'మా ఉత్తమ ఎంపికలు',
      'feat-title':    'ముఖ్యమైన టూర్ ప్యాకేజీలు',
      'feat-sub':      'తిరుపతి నుండి ఎంపిక చేసిన ఆధ్యాత్మిక మరియు విహార యాత్రలు.',
      'fleet-tag':     'మా వాహనాలు',
      'fleet-title':   'ప్రతి యాత్రకు సుఖవంతమైన వాహనాలు',
      'fleet-sub':     'శుభ్రమైన, ఏసీ, GPS అనుసంధానిత వాహనాలు మరియు నిపుణులైన డ్రైవర్లు.',
      'divine-tag':    'దైవ ఆశీర్వాదాలు',
      'divine-title':  'మా కుటుంబ దేవతల ఆశీర్వాదంతో',
      'divine-quote':  '"మేము చేపట్టే ప్రతి యాత్ర శ్రీ వెంకటేశ్వరుని మరియు శ్రీ మురుగుని పవిత్ర పాదాల వద్ద అర్పించబడుతుంది."',
      'divine-lord1':  'శ్రీ వెంకటేశ్వరుడు',
      'divine-lord2':  'శ్రీ మురుగుడు',
      'testi-tag':     'అభిప్రాయాలు',
      'testi-title':   'మా యాత్రికులు ఏమి చెప్తున్నారు',
      'testi-sub':     '20 సంవత్సరాలలో నిర్మించిన విశ్వాసం — ఒక్కో సంతోషకర యాత్రికుడితో.',
    }
  };

  let currentLang = localStorage.getItem('at_lang') || 'en';
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('at_lang', currentLang);
      applyLang(currentLang);
    });
  });

  function applyLang(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
  }

  /* ── Stats counter animation ───────────────────────────── */
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
          if (current >= target) {
            counter.textContent = target + suffix;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + suffix;
          }
        }, 16);
      });
    }
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  /* ── Scroll reveal (fade-up) ───────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Active nav link on scroll ─────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current || a.getAttribute('href') === current + '.html');
    });
  }, { passive: true });

});
