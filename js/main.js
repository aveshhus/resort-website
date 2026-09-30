/**
 * SHRII PALACE RESORTS — FLAGSHIP INTERACTION CONTROLLER (V2.6)
 * Lenis Inertial Smooth Scroll, Parallax Depth Physics, Kinetic Reveals,
 * Destination Territory Expansion & Interactive Magnetic Physics.
 *
 * Header/Footer are now statically embedded in every page via
 * the build script (scratch/build_components.py).
 */

function initSiteApp() {
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
  initJourneysInMotion();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteApp);
} else {
  initSiteApp();
}


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
      whisper: 'A flagship hospitality constellation uniting grand 30,000 sq.ft. celebration lawns in Shrii Palace Resort with tranquil Aravalli mountain foothill retreats in Nangal.',
      ctaText: 'Explore Both Horizons →',
      ctaHref: '#horizons'
    },
    'udaipurwati': {
      title: 'Shrii Palace<br><em>Resort.</em>',
      whisper: 'Grand Shekhawati celebration grounds with 30,000+ sq.ft. manicured lawns, royal mandap pavilions, and pillarless banquet halls engineered for milestone weddings.',
      ctaText: 'Enter Shrii Palace Resort Horizon →',
      ctaHref: 'destinations/shrii-palace-resort.html'
    },
    'shrii-palace-resort': {
      title: 'Shrii Palace<br><em>Shrii Palace Resort.</em>',
      whisper: 'Grand Shekhawati celebration grounds with 30,000+ sq.ft. manicured lawns, royal mandap pavilions, and pillarless banquet halls engineered for milestone weddings.',
      ctaText: 'Enter Shrii Palace Resort Horizon →',
      ctaHref: 'destinations/shrii-palace-resort.html'
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

/* ==========================================================================
   3. SPATIAL EQUILIBRIUM DUAL-HORIZON CONTROLLER (FRAMER PHYSICS)
   ========================================================================== */

/* ==========================================================================
   3. THE BRAND IN MOTION — PROGRESSIVE STORYTELLING CONTROLLER
   ========================================================================== */

function initDestinationSplitInteractions() {
  const stage = document.getElementById('storyStage');
  if (!stage) return;

  const slides = document.querySelectorAll('.story-slide-layer');
  const cards = document.querySelectorAll('.story-narrative-card');
  const navBtns = document.querySelectorAll('.story-nav-btn');
  const fraction = document.getElementById('storyFraction');
  const prevBtn = document.getElementById('storyPrevBtn');
  const nextBtn = document.getElementById('storyNextBtn');

  let currentChapter = 0;
  const totalChapters = slides.length || 4;
  let autoplayTimer = null;

  function setChapter(index) {
    if (index < 0) index = totalChapters - 1;
    if (index >= totalChapters) index = 0;

    currentChapter = index;

    // Update slides
    slides.forEach((slide, i) => {
      if (i === currentChapter) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update narrative cards
    cards.forEach((card, i) => {
      if (i === currentChapter) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update progress navigation buttons
    navBtns.forEach((btn, i) => {
      if (i === currentChapter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update fraction
    if (fraction) {
      fraction.innerText = '0' + (currentChapter + 1) + ' / 0' + totalChapters;
    }
  }

  // Nav Button Clicks
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const ch = parseInt(btn.getAttribute('data-chapter'), 10);
      if (!isNaN(ch)) {
        setChapter(ch);
        resetAutoplay();
      }
    });
  });

  // Mobile Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setChapter(currentChapter - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setChapter(currentChapter + 1);
      resetAutoplay();
    });
  }

  // Touch Swipe on Media Viewport
  let touchStartX = 0;
  let touchEndX = 0;
  const viewport = stage.querySelector('.story-media-viewport');

  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          // Swiped left -> next
          setChapter(currentChapter + 1);
        } else {
          // Swiped right -> prev
          setChapter(currentChapter - 1);
        }
        resetAutoplay();
      }
    }
  }

  // Subtle Autoplay when in view
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      setChapter(currentChapter + 1);
    }, 4500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // IntersectionObserver to only autoplay when visible
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(stage);
  } else {
    startAutoplay();
  }

  // Pause autoplay on mouse enter
  stage.addEventListener('mouseenter', stopAutoplay);
  stage.addEventListener('mouseleave', startAutoplay);
}

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
      menuBtn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (window.lenisInstance) window.lenisInstance.stop();
    } else {
      mobileDrawer?.classList.remove('open');
      menuBtn?.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (window.lenisInstance) window.lenisInstance.start();
    }
  }

  menuBtn?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('open');
    toggleMobileDrawer(!isOpen);
  });

  drawerClose?.addEventListener('click', () => toggleMobileDrawer(false));

  // Close when any link inside drawer is clicked
  mobileDrawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMobileDrawer(false));
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      toggleMobileDrawer(false);
    }
  });
}

/* ==========================================================================
   5. LENIS INERTIAL SMOOTH SCROLLING
   ========================================================================== */

let lenisInstance = null;

function initLenisSmoothScroll() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  function bootLenis() {
    if (typeof Lenis === 'undefined') return false;
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

      return true;
    } catch (e) {
      console.warn('Lenis error:', e);
      return false;
    }
  }

  // Try immediately (Lenis loaded synchronously)
  if (!bootLenis()) {
    // Fallback: retry every 50ms for up to 2 seconds in case CDN is slow
    let attempts = 0;
    const retry = setInterval(() => {
      attempts++;
      if (bootLenis() || attempts >= 40) {
        clearInterval(retry);
      }
    }, 50);
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

  function dismiss() {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    preloader.style.display = 'none';
    return;
  }

  // Safety maximum fallback: never hold page for more than 1.2 seconds
  const safetyTimeout = setTimeout(dismiss, 1200);

  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    if (fill) fill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      setTimeout(dismiss, 200);
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


/* ==========================================================================
   10. FRAMER EXPANDING CAROUSEL CONTROLLER (@ZXAYHYqajoHkc6E6NaKS)
   High-performance expanding panels with hover/tap triggers & autoplay
   ========================================================================== */

function initJourneysInMotion() {
  const container = document.getElementById('framerExpandingCarousel');
  if (!container) return;

  const panels = container.querySelectorAll('.framer-expand-panel');
  const dots = document.querySelectorAll('.pill-dot');
  if (!panels.length) return;

  let activeIndex = 0;
  let isPaused = false;
  let autoplayTimer = null;
  const count = panels.length;
  const intervalMs = 4200;

  function setActivePanel(index, userTriggered = false) {
    if (index < 0 || index >= count) return;
    activeIndex = index;

    // Update Panels
    panels.forEach((panel, i) => {
      const isActive = i === activeIndex;
      panel.classList.toggle('active', isActive);
      panel.setAttribute('aria-selected', isActive ? 'true' : 'false');
      panel.setAttribute('tabindex', isActive ? '0' : '0');
    });

    // Update Progress Dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });

    if (userTriggered) {
      resetAutoplay();
    }
  }

  function nextPanel() {
    if (!isPaused) {
      setActivePanel((activeIndex + 1) % count);
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextPanel, intervalMs);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    if (!isPaused) {
      startAutoplay();
    }
  }

  // Panel Event Listeners
  panels.forEach((panel, i) => {
    // Hover trigger (Desktop)
    panel.addEventListener('mouseenter', () => {
      isPaused = true;
      setActivePanel(i, true);
    });

    panel.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Click / Touch trigger
    panel.addEventListener('click', (e) => {
      const link = panel.getAttribute('data-link');
      const isAlreadyActive = panel.classList.contains('active');

      if (!isAlreadyActive) {
        e.preventDefault();
        isPaused = true;
        setActivePanel(i, true);
      }
    });

    // Keyboard accessibility
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!panel.classList.contains('active')) {
          e.preventDefault();
          setActivePanel(i, true);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = (activeIndex + 1) % count;
        setActivePanel(next, true);
        panels[next].focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = (activeIndex - 1 + count) % count;
        setActivePanel(prev, true);
        panels[prev].focus();
      }
    });

    panel.addEventListener('focus', () => {
      isPaused = true;
      setActivePanel(i, true);
    });

    panel.addEventListener('blur', () => {
      isPaused = false;
    });
  });

  // Progress Dots Click Handling
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      setActivePanel(i, true);
    });
  });

  // Container pause on hover
  container.addEventListener('mouseenter', () => { isPaused = true; });
  container.addEventListener('mouseleave', () => { isPaused = false; });

  // Start Autoplay
  startAutoplay();
}
