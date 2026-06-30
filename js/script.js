/* ===================================================
   MAIN SCRIPT
=================================================== */
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- AOS INIT ---------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }

  /* ---------- VANILLA TILT INIT ---------- */
  if (typeof VanillaTilt !== 'undefined') {
    const tiltEls = document.querySelectorAll('[data-tilt]');
    if (tiltEls.length) VanillaTilt.init(tiltEls);
  }

  /* ---------- NAVBAR: scrolled state ---------- */
  const navbar = document.getElementById('navbar');
  const onScrollNav = () => {
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- MOBILE MENU TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const setActiveLink = () => {
    let current = sections[0]?.id;
    const offset = 140;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset) current = section.id;
    });

    navItems.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ---------- SCROLL PROGRESS BAR ---------- */
  const progressBar = document.getElementById('scrollProgress');
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  /* ---------- CURSOR GLOW (desktop only) ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  if (!isTouchDevice && cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  } else if (cursorGlow) {
    cursorGlow.style.display = 'none';
  }

  /* ---------- ANIMATED COUNTERS ---------- */
  const counters = document.querySelectorAll('.counter');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- CONTACT FORM (front-end only demo) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.textContent = "Thanks for reaching out! I'll get back to you soon.";
      contactForm.reset();
      setTimeout(() => { formNote.textContent = ''; }, 5000);
    });
  }

});
