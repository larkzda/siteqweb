/**
 * JULIJA'S ROYAL DOBERMANS - Interactivité + i18n (FR / EN / SR)
 */

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  fr: {
    // Navbar
    nav_home:    'Accueil',
    nav_about:   'À Propos',
    nav_dogs:    'Nos Dobermans',
    nav_puppies: 'Chiots',
    nav_gallery: 'Galerie',
    nav_partners:'Partenaires',
    nav_rdv:     'Prendre RDV',
    // Hero
    hero_title_1:  "L'Excellence",
    hero_title_2:  'du Doberman',
    hero_subtitle: "Découvrez l'élégance et la force brute à travers nos lignées d'exception.<br />Élevés par Julija, passionnée et experte de la race.",
    hero_btn_rdv:  'Prendre Rendez-vous',
    hero_btn_dogs: 'Découvrir nos chiens',
    stat_puppies:  'Chiots placés',
    stat_years:    "Années d'élevage",
    stat_titles:   'Titres champions',
    hero_scroll:   'Défiler',
    // About
    about_tag:   'Notre Histoire',
    about_title: 'La vision de',
    about_p1:    "Chez <strong>Julija's Royal Dobermans</strong>, chaque Doberman est bien plus qu'un animal — c'est un compagnon d'exception. Sous la direction de Julija, notre élevage s'est imposé comme une référence pour les passionnés de la race.",
    about_p2:    "Julija sélectionne personnellement chaque lignée pour garantir non seulement la beauté physique, mais aussi un mental d'acier et une santé parfaite. Son approche unique combine entraînement rigoureux et vie de famille harmonieuse.",
    feat1_title: 'Expertise de Julija',
    feat1_desc:  "Plus de 15 ans passés à perfectionner les lignées les plus nobles.",
    feat2_title: 'Santé Garantie',
    feat2_desc:  'Tests génétiques rigoureux et suivi vétérinaire constant.',
    feat3_title: 'Lien Unique',
    feat3_desc:  "Chaque chien est élevé comme un membre de la famille dès le premier jour.",
    about_badge: 'Julija S. Propriétaire',
    // Dogs
    dogs_tag:    'Nos Reproducteurs',
    dogs_title:  'Rencontrez',
    dogs_title2: 'Nos Champions',
    dogs_desc:   "Nos chiens sont le reflet du travail acharné de Julija et de notre engagement pour la race.",
    // Gallery
    gallery_tag:   'Galerie',
    gallery_title: 'en Images',
    // Reviews
    reviews_tag:    'Avis Clients',
    reviews_title:  'Ce que disent',
    reviews_title2: 'Nos Familles',
    // Puppies
    pups_tag:    'Portées',
    pups_title:  'Prochaines',
    pups_title2: 'Portées',
    pups_desc:   "Les portées seront annoncées ici dès qu'elles seront disponibles. Inscrivez-vous pour être informé en priorité.",
    // Partners
    partners_tag:    'Nos Collaborations',
    partners_title:  'Nos',
    partners_title2: 'Partenaires',
    partners_desc:   "Julija's Royal Dobermans s'associe aux meilleurs professionnels pour garantir la santé, la beauté et l'excellence de nos Dobermans.",
    // RDV
    rdv_tag:    'Contact & Rendez-vous',
    rdv_title:  'Prenez',
    rdv_title2: 'Rendez-vous',
    rdv_desc:   "Que ce soit pour visiter nos installations, rencontrer nos reproducteurs, vous informer sur une portée à venir ou réserver votre chiot, nous sommes là pour vous accueillir.",
    form_title: 'Demande de Rendez-vous',
    // Footer
    footer_nav:     'Navigation',
    footer_puppies: 'Chiots disponibles',
  },

  en: {
    nav_home:    'Home',
    nav_about:   'About',
    nav_dogs:    'Our Dobermans',
    nav_puppies: 'Puppies',
    nav_gallery: 'Gallery',
    nav_partners:'Partners',
    nav_rdv:     'Book a Visit',
    hero_title_1:  'Excellence',
    hero_title_2:  'in Dobermans',
    hero_subtitle: "Discover elegance and raw power through our exceptional bloodlines.<br />Bred by Julija, a passionate expert of the breed.",
    hero_btn_rdv:  'Book an Appointment',
    hero_btn_dogs: 'Meet our dogs',
    stat_puppies:  'Puppies placed',
    stat_years:    'Years of breeding',
    stat_titles:   'Champion titles',
    hero_scroll:   'Scroll',
    about_tag:   'Our Story',
    about_title: "Julija's vision",
    about_p1:    "At <strong>Julija's Royal Dobermans</strong>, every Doberman is more than an animal — it is an exceptional companion. Under Julija's leadership, our kennel has become a benchmark for breed enthusiasts.",
    about_p2:    "Julija personally selects every bloodline to ensure not only physical beauty but also a strong character and perfect health. Her unique approach combines rigorous training with a harmonious family life.",
    feat1_title: "Julija's Expertise",
    feat1_desc:  "Over 15 years spent perfecting the most noble bloodlines.",
    feat2_title: 'Health Guaranteed',
    feat2_desc:  'Rigorous genetic testing and constant veterinary monitoring.',
    feat3_title: 'Unique Bond',
    feat3_desc:  "Every dog is raised as a family member from day one.",
    about_badge: 'Julija S. Owner',
    dogs_tag:    'Our Breeding Dogs',
    dogs_title:  'Meet',
    dogs_title2: 'Our Champions',
    dogs_desc:   "Our dogs reflect Julija's tireless work and our commitment to the breed.",
    gallery_tag:   'Gallery',
    gallery_title: 'in Photos',
    reviews_tag:    'Client Reviews',
    reviews_title:  'What our',
    reviews_title2: 'Families Say',
    pups_tag:    'Litters',
    pups_title:  'Upcoming',
    pups_title2: 'Litters',
    pups_desc:   "Litters will be announced here as soon as they are available. Register to be notified first.",
    partners_tag:    'Our Collaborations',
    partners_title:  'Our',
    partners_title2: 'Partners',
    partners_desc:   "Julija's Royal Dobermans partners with the best professionals to guarantee the health, beauty and excellence of our Dobermans.",
    rdv_tag:    'Contact & Appointments',
    rdv_title:  'Book an',
    rdv_title2: 'Appointment',
    rdv_desc:   "Whether you want to visit our facilities, meet our breeding dogs, learn about an upcoming litter, or reserve your puppy — we are here to welcome you.",
    form_title: 'Appointment Request',
    footer_nav:     'Navigation',
    footer_puppies: 'Available Puppies',
  },

  sr: {
    nav_home:    'Početna',
    nav_about:   'O Nama',
    nav_dogs:    'Naši Dobermani',
    nav_puppies: 'Štenci',
    nav_gallery: 'Galerija',
    nav_partners:'Partneri',
    nav_rdv:     'Zakaži Posetu',
    hero_title_1:  'Izvrsnost',
    hero_title_2:  'Dobermana',
    hero_subtitle: "Otkrijte eleganciju i sirovу snagu kroz naše izuzetne linije.<br />Uzgajeno od strane Julije, strastvene stručnjakinje za rasu.",
    hero_btn_rdv:  'Zakaži Termin',
    hero_btn_dogs: 'Upoznajte naše pse',
    stat_puppies:  'Raspoređenih štenaca',
    stat_years:    'Godina uzgajanja',
    stat_titles:   'Šampionskih titula',
    hero_scroll:   'Skrolovati',
    about_tag:   'Naša Priča',
    about_title: 'Julijina vizija',
    about_p1:    "U <strong>Julija's Royal Dobermans</strong>, svaki Doberman je više od životinje — to je izuzetan pratilac. Pod Julijinim vodstvom, naš uzgajivač se nametnuo kao referenca za ljubitelje rase.",
    about_p2:    "Julija lično bira svaku liniju kako bi garantovala ne samo fizičku lepotu, već i čelični karakter i savršeno zdravlje. Njen jedinstven pristup kombinuje strogi trening i skladan porodični život.",
    feat1_title: 'Julijino Iskustvo',
    feat1_desc:  'Više od 15 godina posvećenih usavršavanju najplemenitijih linija.',
    feat2_title: 'Garantovano Zdravlje',
    feat2_desc:  'Rigorozna genetička testiranja i stalni veterinarski nadzor.',
    feat3_title: 'Jedinstvena Veza',
    feat3_desc:  'Svaki pas se odgaja kao član porodice od prvog dana.',
    about_badge: 'Julija S. Vlasnica',
    dogs_tag:    'Naši Priplodnjaci',
    dogs_title:  'Upoznajte',
    dogs_title2: 'Naše Šampione',
    dogs_desc:   "Naši psi odražavaju Julijin neuman rad i našu posvećenost rasi.",
    gallery_tag:   'Galerija',
    gallery_title: 'u Slikama',
    reviews_tag:    'Recenzije Klijenata',
    reviews_title:  'Šta kažu',
    reviews_title2: 'Naše Porodice',
    pups_tag:    'Legla',
    pups_title:  'Predstojeće',
    pups_title2: 'Legla',
    pups_desc:   'Legla će biti ovde objavljena čim budu dostupna. Registrujte se da biste bili obavešteni prvi.',
    partners_tag:    'Naše Saradnje',
    partners_title:  'Naši',
    partners_title2: 'Partneri',
    partners_desc:   "Julija's Royal Dobermans sarađuje sa najboljim stručnjacima kako bi garantovala zdravlje, lepotu i izuzetnost naših Dobermana.",
    rdv_tag:    'Kontakt & Termini',
    rdv_title:  'Zakažite',
    rdv_title2: 'Termin',
    rdv_desc:   "Bilo da želite da posetite naše prostorije, upoznate naše priplodnjake, saznate nešto o predstojećem leglu ili rezervišete vašeg šteneta — tu smo da vas dočekamo.",
    form_title: 'Zahtev za Termin',
    footer_nav:     'Navigacija',
    footer_puppies: 'Dostupni Štenci',
  }
};

/* ============================================================
   i18n ENGINE
   ============================================================ */
let currentLang = 'fr';

function detectBrowserLang() {
  const lang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('sr') || lang.startsWith('hr') || lang.startsWith('bs')) return 'sr';
  if (lang.startsWith('en')) return 'en';
  return 'fr';
}

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update label in button
  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('preferredLang', lang);

  // Update <html lang="">
  document.documentElement.lang = lang === 'sr' ? 'sr' : lang;
}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // --- Language init ---
  const savedLang = localStorage.getItem('preferredLang') || detectBrowserLang();
  applyLang(savedLang);

  // --- Language switcher toggle ---
  const langSwitcher = document.getElementById('langSwitcher');
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      langSwitcher.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('open');
    }
  });

  // 1. Navigation Sticky & Animation au défilement
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Menu Mobile (Hamburger)
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  function openMobileMenu() {
    navLinks.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Fermer le menu sur clic d'un lien
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Fermer sur clic en dehors du menu (overlay)
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Fermer sur touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // 3. Gestion du formulaire de rendez-vous
  window.handleSubmit = (event) => {
    event.preventDefault();

    const form          = document.getElementById('rdvForm');
    const successMessage= document.getElementById('formSuccess');
    const submitBtn     = document.getElementById('submitBtn');
    const submitText    = document.getElementById('submitText');
    const submitLoader  = document.getElementById('submitLoader');

    submitText.classList.add('hidden');
    submitLoader.classList.remove('hidden');
    submitBtn.disabled = true;

    setTimeout(() => {
      form.classList.add('hidden');
      successMessage.classList.remove('hidden');
    }, 1500);
  };

  // 4. Animation d'entrée des éléments au scroll (Intersection Observer)
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.dog-card, .chiot-card, .feature, .temoignage-card');
  animateElements.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition= 'all 0.6s ease-out';
    observer.observe(el);
  });

  // 5. Date minimale pour le sélecteur de date
  const dateInput = document.getElementById('date-pref');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // 6. Lightbox Galerie
  const thumbs    = document.querySelectorAll('.galerie-thumb');
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbCounter = document.getElementById('lbCounter');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');

  if (!lightbox) return;

  const slides = Array.from(thumbs).map(t => ({
    src:     t.style.backgroundImage.slice(5, -2),
    caption: t.querySelector('span') ? t.querySelector('span').textContent : ''
  }));

  let current = 0;

  function openLightbox(index) {
    current = index;
    showSlide(current, false);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showSlide(index, animate = true) {
    if (animate) {
      lbImg.classList.add('fading');
      setTimeout(() => {
        updateSlide(index);
        lbImg.classList.remove('fading');
      }, 220);
    } else {
      updateSlide(index);
    }
  }

  function updateSlide(index) {
    lbImg.src              = slides[index].src;
    lbImg.alt              = slides[index].caption;
    lbCaption.textContent  = slides[index].caption;
    lbCounter.textContent  = `${index + 1} / ${slides.length}`;
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => openLightbox(i)));
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', prevSlide);
  lbNext.addEventListener('click', nextSlide);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });
});
