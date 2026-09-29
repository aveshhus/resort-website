/**
 * SHRII PALACE RESORTS — GLOBAL SITE COMPONENTS LOADER (v1.0)
 * ============================================================
 * Fetches header.html + footer.html from /components/ and injects
 * them into every page. Resolves relative paths based on page depth,
 * sets active navigation state, and reinitialises interactive
 * behaviours (header scroll, mobile drawer, mega-menu, smooth-scroll
 * anchor links) once the DOM is ready.
 *
 * Usage: include this script in <head> with defer on every page.
 * Each page must have:
 *   <div id="site-header-mount"></div>   ← before <main>
 *   <div id="site-footer-mount"></div>   ← after </main>
 * And a <body data-page="page-id"> attribute for active-state.
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. DETECT PAGE DEPTH (root = '' | sub = '../')
     ------------------------------------------------------------------ */
  const path = window.location.pathname;
  // Pages inside /destinations/ are one level deep → root = '../'
  // All other pages are at root level → root = ''
  const isSubDir = path.includes('/destinations/');
  const ROOT = isSubDir ? '../' : '';

  /* ------------------------------------------------------------------
     2. PAGE → NAV-ID MAP (for active state highlighting)
     ------------------------------------------------------------------ */
  const PAGE_NAV_MAP = {
    // Root pages
    'index'        : '',
    'stay'         : 'stay',
    'weddings'     : 'weddings',
    'events'       : 'events',
    'dining'       : 'dining',
    'experiences'  : 'experiences',
    'gallery'      : 'gallery',
    'contact'      : 'contact',
    'about'        : '',
    'enquire'      : '',
    'privacy'      : '',
    'terms'        : '',
    // Destinations sub-pages all belong to 'destinations'
    'destinations-index'              : 'destinations',
    'nangal'                          : 'destinations',
    'nangal-rooms'                    : 'destinations',
    'nangal-weddings'                 : 'destinations',
    'nangal-banquets'                 : 'destinations',
    'nangal-dining'                   : 'destinations',
    'nangal-gallery'                  : 'destinations',
    'nangal-location'                 : 'destinations',
    'udaipurwati'                     : 'destinations',
    'udaipurwati-rooms'               : 'destinations',
    'udaipurwati-weddings'            : 'destinations',
    'udaipurwati-banquets'            : 'destinations',
    'udaipurwati-gallery'             : 'destinations',
    'udaipurwati-location'            : 'destinations',
  };

  /* Derive page-id from filename */
  function getPageId() {
    const bodyId = document.body.getAttribute('data-page');
    if (bodyId) return bodyId;
    // Fallback: derive from URL
    let name = path.split('/').pop().replace('.html', '') || 'index';
    if (isSubDir && name === 'index') name = 'destinations-index';
    return name;
  }

  /* ------------------------------------------------------------------
     3. RESOLVE data-root-href / data-root-src ATTRIBUTES
     ------------------------------------------------------------------ */
  function resolveRootPaths(container) {
    container.querySelectorAll('[data-root-href]').forEach(el => {
      el.href = ROOT + el.getAttribute('data-root-href');
      el.removeAttribute('data-root-href');
    });
    container.querySelectorAll('[data-root-src]').forEach(el => {
      el.src = ROOT + el.getAttribute('data-root-src');
      el.removeAttribute('data-root-src');
    });
  }

  /* ------------------------------------------------------------------
     4. SET ACTIVE NAV STATE
     ------------------------------------------------------------------ */
  function setActiveNav(container) {
    const pageId  = getPageId();
    const activeNavId = PAGE_NAV_MAP[pageId] || '';

    container.querySelectorAll('.nav-link[data-nav-id]').forEach(link => {
      if (link.getAttribute('data-nav-id') === activeNavId && activeNavId !== '') {
        link.classList.add('active');
      }
    });
    // Remove data-nav-id attr (cleanup)
    container.querySelectorAll('[data-nav-id]').forEach(el => el.removeAttribute('data-nav-id'));
  }

  /* ------------------------------------------------------------------
     5. FETCH AND INJECT COMPONENT
     ------------------------------------------------------------------ */
  function loadComponent(url, mountId, callback) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('Component fetch failed: ' + url);
        return r.text();
      })
      .then(html => {
        mount.outerHTML = html;
        // Re-query now that mount is replaced
        const inserted = document.getElementById(
          mountId === 'site-header-mount' ? 'siteHeader' : 'editorialFooter'
        ) || document.querySelector(
          mountId === 'site-header-mount' ? 'header.editorial-header' : 'footer.editorial-footer'
        );
        if (inserted) {
          resolveRootPaths(inserted.parentElement || document.body);
        } else {
          resolveRootPaths(document.body);
        }
        if (callback) callback();
      })
      .catch(err => console.warn('[SiteComponents]', err));
  }

  /* ------------------------------------------------------------------
     6. INITIALISE HEADER BEHAVIOURS
     ------------------------------------------------------------------ */
  function initHeaderBehaviours() {
    const header    = document.getElementById('siteHeader');
    const menuBtn   = document.getElementById('menuToggle');
    const drawerClose = document.getElementById('drawerClose');
    const drawer    = document.getElementById('mobileDrawer');

    if (!header) return;

    /* --- Active Nav --- */
    setActiveNav(header);

    /* --- Scroll / Sticky header --- */
    function updateHeader(scrollY) {
      header.classList.toggle('scrolled', scrollY > 40);
    }
    window.addEventListener('scroll', () => updateHeader(window.scrollY), { passive: true });
    window.addEventListener('lenis-scroll', e => {
      if (e.detail && typeof e.detail.scroll !== 'undefined') updateHeader(e.detail.scroll);
    });
    updateHeader(window.scrollY);

    /* --- Mobile Drawer Toggle --- */
    function toggleDrawer(open) {
      if (!drawer) return;
      drawer.classList.toggle('open', open);
      menuBtn && menuBtn.classList.toggle('open', open);
      menuBtn && menuBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (window.lenisInstance) {
        open ? window.lenisInstance.stop() : window.lenisInstance.start();
      }
    }

    menuBtn   && menuBtn.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('open')));
    drawerClose && drawerClose.addEventListener('click', () => toggleDrawer(false));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleDrawer(false); });
    drawer && drawer.querySelectorAll('.mobile-drawer-links a').forEach(a =>
      a.addEventListener('click', () => toggleDrawer(false))
    );

    /* --- Smooth anchor links (re-bind after inject) --- */
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const hash = href.substring(href.indexOf('#'));
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

  /* ------------------------------------------------------------------
     7. INJECT HEADER + FOOTER THEN INIT
     ------------------------------------------------------------------ */
  const COMPONENT_ROOT = ROOT + 'components/';

  function injectComponents() {
    loadComponent(COMPONENT_ROOT + 'header.html', 'site-header-mount', () => {
      // Resolve preloader src as well
      resolveRootPaths(document.body);
      initHeaderBehaviours();
      // Re-init Lenis if it is already loaded (timing safe)
      if (typeof window.initLenisSmoothScroll === 'function') {
        window.initLenisSmoothScroll();
      }
    });

    loadComponent(COMPONENT_ROOT + 'footer.html', 'site-footer-mount', () => {
      resolveRootPaths(document.body);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }

})();
