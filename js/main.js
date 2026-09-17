/**
 * SHRII PALACE RESORTS — ULTRA-LUXURY INTERACTION CONTROLLER
 * Lenis inertial scrolling, transparent-to-frosted luxury header,
 * mobile drawer transitions, expanding destination territories,
 * magnetic buttons, and smooth scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initEditorialHeader();
  initLenisSmoothScroll();
  initDestinationSplitInteractions();
  initScrollReveals();
  initFilterPills();
  initMagneticButtons();
});

/* ==========================================================================
   1. MAGNETIC BUTTONS (LUXURY MICRO-INTERACTIONS)
   ========================================================================== */

function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.btn-editorial-light, .btn-editorial-gold, .btn-editorial-outline, .header-enquire-link');
  if (!magneticButtons.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || window.innerWidth < 992) return;

  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease';
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'none';
    });
  });
}

/* ==========================================================================
   2. INTERACTIVE FILTER PILLS (STAY & GALLERY)
   ========================================================================== */

function initFilterPills() {
  const filterPills = document.querySelectorAll('.filter-pill');
  if (!filterPills.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');
      
      // Filter stay cards
      document.querySelectorAll('.stay-story-grid').forEach(item => {
        const dest = item.getAttribute('data-dest');
        if (filterVal === 'all' || dest === filterVal) {
          item.style.display = 'grid';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
        }
      });

      // Filter gallery cards
      document.querySelectorAll('.gallery-item-card').forEach(item => {
        const dest = item.getAttribute('data-dest');
        const cat = item.getAttribute('data-cat');
        if (filterVal === 'all' || dest === filterVal || cat === filterVal) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   3. EDITORIAL HEADER & SCROLL DYNAMICS
   ========================================================================== */

function initEditorialHeader() {
  const header = document.getElementById('siteHeader');
  const menuBtn = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  function toggleMobileDrawer(open) {
    if (open) {
      mobileDrawer?.classList.add('open');
      menuBtn?.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.lenisInstance) window.lenisInstance.stop();
    } else {
      mobileDrawer?.classList.remove('open');
      menuBtn?.classList.remove('open');
      document.body.style.overflow = '';
      if (window.lenisInstance) window.lenisInstance.start();
    }
  }

  menuBtn?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('open');
    toggleMobileDrawer(!isOpen);
  });

  drawerClose?.addEventListener('click', () => toggleMobileDrawer(false));

  document.querySelectorAll('.mobile-drawer-links a').forEach(link => {
    link.addEventListener('click', () => toggleMobileDrawer(false));
  });
}

/* ==========================================================================
   4. LENIS INERTIAL SMOOTH SCROLLING
   ========================================================================== */

let lenisInstance = null;

function initLenisSmoothScroll() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  if (typeof Lenis !== 'undefined') {
    try {
      lenisInstance = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false
      });

      window.lenisInstance = lenisInstance;

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis error:', e);
    }
  }

  // Smooth hash navigation
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const hash = href.substring(hashIndex);
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        if (window.lenisInstance) {
          window.lenisInstance.scrollTo(target, { offset: -80, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ==========================================================================
   5. DESTINATION SPLIT EXPANSION CONTROLLER
   ========================================================================== */

function initDestinationSplitInteractions() {
  const splitCanvas = document.getElementById('destinationSplit');
  const triggers = document.querySelectorAll('[data-dest-focus]');

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      const dest = trigger.getAttribute('data-dest-focus');
      if (!splitCanvas) return;
      if (dest === 'udaipurwati') {
        splitCanvas.style.gridTemplateColumns = '65% 35%';
      } else if (dest === 'nangal') {
        splitCanvas.style.gridTemplateColumns = '35% 65%';
      }
    });

    trigger.addEventListener('mouseleave', () => {
      if (splitCanvas && window.innerWidth >= 992) {
        splitCanvas.style.gridTemplateColumns = '1fr 1fr';
      }
    });
  });
}

/* ==========================================================================
   6. SCROLL REVEALS & EDITORIAL INTERSECTION OBSERVER
   ========================================================================== */

function initScrollReveals() {
  const revealElements = document.querySelectorAll(
    '.atmosphere-statement, .craft-image-frame, .moment-media-full, .moment-media-framed, .rooms-feature-frame, .rooms-secondary-frame'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.9s cubic-bezier(0.19, 1, 0.22, 1), transform 0.9s cubic-bezier(0.19, 1, 0.22, 1)';
      observer.observe(el);
    });
  }
}

function initPreloader() {
  const preloader = document.getElementById('brandPreloader');
  const fill = document.getElementById('preloaderFill');
  if (!preloader) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    preloader.style.display = 'none';
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    if (fill) fill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 200);
    }
  }, 100);
}

/* ==========================================================================
   7. LIGHTBOX MODAL CONTROLLER
   ========================================================================== */

function openLightbox(src, caption) {
  const lightbox = document.getElementById('editorialLightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!lightbox || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || '';
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (window.lenisInstance) window.lenisInstance.stop();
}

function closeLightbox() {
  const lightbox = document.getElementById('editorialLightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (window.lenisInstance) window.lenisInstance.start();
}

// Global window exposure for inline onclick handlers
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initEditorialHeader();
  initLenisSmoothScroll();
  initDestinationSplitInteractions();
  initScrollReveals();
  initFilterPills();
  initMagneticButtons();
});
