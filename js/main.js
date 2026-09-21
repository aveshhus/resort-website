/**
 * SHRII PALACE RESORTS — FLAGSHIP INTERACTION CONTROLLER (V2.5)
 * Lenis Inertial Smooth Scroll, Parallax Depth Physics, Kinetic Reveals,
 * Destination Territory Expansion & Interactive Magnetic Physics.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initEditorialHeader();
  initLenisSmoothScroll();
  initHeroCinemaTransformer();
  initTerritorialHorizons();
  initDestinationSplitInteractions();
  initIdentityEditorialExperience();
  initScrollReveals();
  initIdentitySanctuarySlider();
  initFilterPills();
  initMagneticButtons();
});

/* ==========================================================================
   1. HERO CINEMA TRANSFORMER (ALIVE DESTINATION MORPH)
   ========================================================================== */

function initHeroCinemaTransformer() {
  const tabs = document.querySelectorAll('.hero-dest-tab');
  const canvases = document.querySelectorAll('.hero-media-canvas');
  const heroTitle = document.getElementById('cinemaHeroTitle');
  const heroWhisper = document.getElementById('cinemaHeroWhisper');
  const heroCta = document.getElementById('cinemaHeroCta');

  const destinationData = {
    'all': {
      title: 'Two Horizons.<br><em>One Timeless Rajasthan.</em>',
      whisper: 'A flagship hospitality constellation uniting grand 30,000 sq.ft. celebration lawns in Udaipurwati with tranquil Aravalli mountain foothill retreats in Nangal.',
      ctaText: 'Explore Both Horizons →',
      ctaHref: '#horizons'
    },
    'udaipurwati': {
      title: 'Shrii Palace<br><em>Udaipurwati.</em>',
      whisper: 'Grand Shekhawati celebration grounds with 30,000+ sq.ft. manicured lawns, royal mandap pavilions, and pillarless banquet halls engineered for milestone weddings.',
      ctaText: 'Enter Udaipurwati Horizon →',
      ctaHref: 'destinations/udaipurwati.html'
    },
    'nangal': {
      title: 'Shrii Palace<br><em>Nangal.</em>',
      whisper: 'A peaceful mountain sanctuary in the Aravalli foothills featuring 30+ garden rooms with private verandahs, swimming pool, and farm-fresh A2 gaushala dairy dining.',
      ctaText: 'Enter Nangal Horizon →',
      ctaHref: 'destinations/nangal.html'
    }
  };

  if (!tabs.length || !canvases.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const dest = tab.getAttribute('data-dest');
      if (!dest || !destinationData[dest]) return;

      // Update Active Tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Cross-fade Canvas Layers
      canvases.forEach(canvas => {
        if (canvas.getAttribute('data-canvas') === dest) {
          canvas.classList.add('active');
          const vid = canvas.querySelector('video');
          if (vid && vid.paused) vid.play().catch(() => {});
        } else {
          canvas.classList.remove('active');
        }
      });

      // Update Editorial Typography
      if (heroTitle) heroTitle.innerHTML = destinationData[dest].title;
      if (heroWhisper) heroWhisper.innerHTML = destinationData[dest].whisper;
      if (heroCta) {
        heroCta.innerText = destinationData[dest].ctaText;
        heroCta.setAttribute('href', destinationData[dest].ctaHref);
      }
    });
  });
}

/* ==========================================================================
   2. THE TWO HORIZONS (TERRITORIAL CANVAS CONTROLLER)
   ========================================================================== */

function initTerritorialHorizons() {
  const territories = document.querySelectorAll('.horizon-territory');
  if (!territories.length) return;

  territories.forEach(terr => {
    terr.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 992) {
        territories.forEach(t => {
          if (t === terr) {
            t.style.flex = '1.7';
          } else {
            t.style.flex = '0.35';
          }
        });
      }
    });

    terr.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 992) {
        territories.forEach(t => {
          t.style.flex = '1';
        });
      }
    });
  });
}

/* ==========================================================================
   3. DESTINATION 50/50 EXPANDING SPLIT PANELS
   ========================================================================== */

function initDestinationSplitInteractions() {
  const container = document.getElementById('destinationSplit');
  if (!container) return;
  const panels = container.querySelectorAll('.destination-territory-panel');
  if (!panels.length) return;

  panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 992) {
        panels.forEach(p => {
          if (p === panel) {
            p.style.flex = '1.65';
          } else {
            p.style.flex = '0.65';
          }
        });
      }
    });

    panel.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 992) {
        panels.forEach(p => {
          p.style.flex = '1';
        });
      }
    });
  });
}

/* ==========================================================================
   4. EDITORIAL HEADER & SCROLL CONTROLLER
   ========================================================================== */

function initEditorialHeader() {
  const header = document.getElementById('siteHeader');
  const menuBtn = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');

  function updateHeader(scrollY) {
    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', () => {
    updateHeader(window.scrollY);
  }, { passive: true });

  window.addEventListener('lenis-scroll', (e) => {
    if (e.detail && typeof e.detail.scroll !== 'undefined') {
      updateHeader(e.detail.scroll);
    }
  });

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
   5. LENIS INERTIAL SMOOTH SCROLLING
   ========================================================================== */

let lenisInstance = null;

function initLenisSmoothScroll() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  if (typeof Lenis !== 'undefined') {
    try {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false
      });

      window.lenisInstance = lenisInstance;

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Broadcast synchronized frame events
      lenisInstance.on('scroll', (e) => {
        window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: e }));
      });
    } catch (e) {
      console.warn('Lenis error:', e);
    }
  }

  // Smooth anchor navigation
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
          window.lenisInstance.scrollTo(target, { offset: -70, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ==========================================================================
   6. MAGNETIC LUXURY BUTTONS
   ========================================================================== */

function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.header-enquire-link, .btn-editorial-gold, .btn-editorial-light, .identity-cta-btn');
  if (!magneticButtons.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || window.innerWidth < 992) return;

  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
      btn.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0px, 0px, 0)';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'none';
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE FILTER PILLS (STAY & GALLERY)
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
   8. HARDWARE-ACCELERATED SCROLL REVEALS
   ========================================================================== */

function initScrollReveals() {
  const revealElements = document.querySelectorAll(
    '.exp-choice-card, .stay-story-grid, .destination-territory-panel, .testimonial-card, .faq-editorial-item, .atmosphere-statement, .resort-identity-card, .shared-pillar-item, .moment-media-full, .moment-media-framed, .rooms-feature-frame, .rooms-secondary-frame, .subpage-spec-card, .subpage-gallery-item'
  );

  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => {
      el.classList.add('scroll-reveal');
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children);
        const idx = siblings.indexOf(el);
        if (idx >= 0 && idx < 4) {
          el.classList.add(`reveal-delay-${idx + 1}`);
        }
      }
      observer.observe(el);
    });
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ==========================================================================
   9. DUAL-SANCTUARY COMPARISON SLIDER CONTROLLER
   ========================================================================== */

function initIdentitySanctuarySlider() {
  const slider = document.getElementById('identitySanctuarySlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.identity-slide');
  const tabs = document.querySelectorAll('.identity-tab-btn');
  const dots = slider.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('identitySlidePrev');
  const nextBtn = document.getElementById('identitySlideNext');

  let currentIndex = 0;
  let autoplayTimer = null;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    tabs.forEach((tab, i) => {
      if (i === currentIndex) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = parseInt(tab.getAttribute('data-slide-target'), 10);
      goToSlide(target);
      resetAutoplay();
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-slide-target'), 10);
      goToSlide(target);
      resetAutoplay();
    });
  });

  prevBtn?.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    resetAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    resetAutoplay();
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    } else if (touchEndX - touchStartX > 50) {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    }
  }, { passive: true });

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 7500);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  slider.addEventListener('mouseenter', () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
  });

  slider.addEventListener('mouseleave', () => {
    startAutoplay();
  });

  startAutoplay();
}

/* ==========================================================================
   10. PRELOADER CONTROLLER
   ========================================================================== */

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
  }, 90);
}

/* ==========================================================================
   11. LIGHTBOX MODAL CONTROLLER
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

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

/* ==========================================================================
   12. THE SHRIi PALACE IDENTITY (PARALLAX & DEPTH CONTROLLER)
   ========================================================================== */

function initIdentityEditorialExperience() {
  const section = document.getElementById('brand-intro');
  if (!section) return;

  const monolith = section.querySelector('#identityMonolith');
  const satellite = section.querySelector('#identitySatellite');
  const watermark = section.querySelector('.watermark-drift');
  const pillars = section.querySelectorAll('.identity-pillar-item');

  // In-View Intersection Observer
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('in-view');
        } else {
          if (entry.boundingClientRect.top > 0) {
            section.classList.remove('in-view');
          }
        }
      });
    }, {
      rootMargin: '0px 0px -5% 0px',
      threshold: 0.08
    });

    observer.observe(section);
  } else {
    section.classList.add('in-view');
  }

  // Smooth Multi-Plane Parallax Depth Physics on Scroll
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || window.innerWidth < 992) return;

  let ticking = false;

  function updateParallax() {
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;

    if (rect.top < windowH && rect.bottom > 0) {
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const centeredProgress = progress - 0.5;

      // Monolith subtle counter-translation
      if (monolith) {
        const moveY = centeredProgress * -35;
        monolith.style.transform = `translate3d(0, ${moveY.toFixed(1)}px, 0)`;
      }

      // Satellite floating artifact moves faster for 3D depth separation
      if (satellite) {
        const satY = centeredProgress * -75;
        satellite.style.transform = `translate3d(0, ${satY.toFixed(1)}px, 0)`;
      }

      // Watermark subtle horizontal tracking drift
      if (watermark) {
        const driftX = centeredProgress * 60;
        watermark.style.transform = `translate3d(${driftX.toFixed(1)}px, 0, 0)`;
      }
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('lenis-scroll', onScroll, { passive: true });
  updateParallax();

  // Pillar Hover Interactions
  pillars.forEach(pillar => {
    pillar.addEventListener('mouseenter', () => {
      pillars.forEach(p => {
        if (p !== pillar) p.style.opacity = '0.55';
      });
    });

    pillar.addEventListener('mouseleave', () => {
      pillars.forEach(p => p.style.opacity = '1');
    });
  });
}
