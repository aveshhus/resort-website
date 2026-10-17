/**
 * ==========================================================================
 * SHRIi PALACE RESORTS — CURATED EDITORIAL GALLERY CONTROLLER
 * High-performance, luxury client-side gallery with 6-tab filtering & lightbox
 * ==========================================================================
 */

(function () {
  'use strict';

  // Master Photographic Archive (33 authentic property images across both destinations)
  const GALLERY_DATA = [
    // --- SHRI PALACE RESORT (17 images) ---
    {
      id: 'spr-01',
      src: 'assets/Shri palace resort/unnamed (1).webp',
      title: 'Royal Reception & Guest Lounge',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture', 'weddings'],
      caption: 'Opulent guest reception lounge with plush royal seating, crystal chandeliers, and heritage Shekhawati decor.',
      alt: 'Royal reception lounge with seating and chandeliers at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-02',
      src: 'assets/Shri palace resort/unnamed (2).webp',
      title: 'Grand Pillarless AC Ballroom',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['dining', 'weddings'],
      caption: 'High-ceiling pillarless indoor banquet arena with acoustic ceiling and stage dais for milestone celebrations.',
      alt: 'Grand pillarless banquet ballroom and stage at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-03',
      src: 'assets/Shri palace resort/unnamed (3).webp',
      title: 'Bridal Dressing Suite Entrance',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['weddings', 'architecture'],
      caption: 'Ornate traditional Rajasthani wooden entrance doorway leading into the dedicated bridal dressing wing.',
      alt: 'Bridal suite ornate entrance door at Shri Palace Resort',
      aspect: 'portrait'
    },
    {
      id: 'spr-04',
      src: 'assets/Shri palace resort/unnamed (4).webp',
      title: 'Resort Facade & Front Lawns',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture', 'weddings'],
      caption: 'Stately multi-storey ochre architecture overlooking manicured celebration grounds and palm gardens.',
      alt: 'Daytime view of Shri Palace Resort facade and front celebration lawns',
      aspect: 'landscape'
    },
    {
      id: 'spr-05',
      src: 'assets/Shri palace resort/unnamed (5).webp',
      title: 'Azure Swimming Pool & Foothills',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture'],
      caption: 'Crystal clear resort swimming pool mirroring the ochre yellow hotel towers against scenic Aravalli hills.',
      alt: 'Resort swimming pool reflecting hotel buildings and mountain hills at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-06',
      src: 'assets/Shri palace resort/unnamed (6).webp',
      title: '30,000+ Sq.Ft. Celebration Lawns',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['weddings', 'architecture'],
      caption: 'Expansive green wedding grounds bordered by towering date palms, flowerbeds, and open desert skies.',
      alt: 'Expansive wedding celebration lawns lined with palm trees at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-07',
      src: 'assets/Shri palace resort/unnamed (7).webp',
      title: 'Sunset Horizon Over Celebration Grounds',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['weddings', 'architecture'],
      caption: 'Golden-hour sunset illumination across the celebration grounds, palm groves, and resort perimeter.',
      alt: 'Sunset panorama of event grounds and palm trees at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-08',
      src: 'assets/Shri palace resort/unnamed (8).webp',
      title: 'Courtyard & Event Terraces',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture', 'weddings'],
      caption: 'Elevated aerial view of central courtyards, event terraces, and shaded verandahs tailored for cultural gatherings.',
      alt: 'Aerial perspective of resort central courtyard and event terraces at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-09',
      src: 'assets/Shri palace resort/unnamed (9).webp',
      title: 'Royal Family & Host Suite',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture'],
      caption: 'Elegantly appointed family suite featuring rich teak woodwork, double king beds, and modern ensuite comforts.',
      alt: 'Family suite bedroom with wooden furnishings at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-10',
      src: 'assets/Shri palace resort/unnamed (10).webp',
      title: 'Ceremonial Stage & Mandap Dais',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['weddings', 'dining'],
      caption: 'Elevated wooden ceremonial stage and performance dais suited for Varmala, Sangeet, and gala banquets.',
      alt: 'Ceremonial wooden event stage and backdrop at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-11',
      src: 'assets/Shri palace resort/unnamed (11).webp',
      title: 'Grand Arrival Gateway & Landscaped Entrance',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture'],
      caption: 'Stately entrance driveway and landscaped arrival mound welcoming guests with royal Rajasthani flair.',
      alt: 'Grand entrance gateway and driveway at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-12',
      src: 'assets/Shri palace resort/unnamed (12).webp',
      title: 'Banquet Buffet & Culinary Setup',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['dining'],
      caption: 'Luxurious banquet dining hall arranged with gourmet buffet stations and fine dining banquet tables.',
      alt: 'Banquet dining hall with buffet catering setup at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-13',
      src: 'assets/Shri palace resort/unnamed (13).webp',
      title: 'Starlit Night Villa & Courtyard',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture'],
      caption: 'Warm architectural lighting highlighting the resort villa facade beneath a starlit Shekhawati night sky.',
      alt: 'Illuminated resort villa and courtyard at night under stars at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-14',
      src: 'assets/Shri palace resort/unnamed (14).webp',
      title: 'Garden View Restaurant Dining Hall',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['dining'],
      caption: 'Sunlit restaurant dining hall with solid timber dining tables, lattice chairs, and garden panorama.',
      alt: 'Indoor restaurant dining hall with timber tables and chairs at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-15',
      src: 'assets/Shri palace resort/unnamed (15).webp',
      title: 'Illuminated Poolside Night Deck',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['weddings', 'architecture'],
      caption: 'Vibrant turquoise pool lighting and open night terrace ideal for cocktail evenings and Haldi parties.',
      alt: 'Illuminated swimming pool deck at night at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-16',
      src: 'assets/Shri palace resort/unnamed.webp',
      title: 'Panoramic Poolside Deck & Hotel Wings',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture'],
      caption: 'Expansive poolside patio and stone tiled deck overlooking the manicured lawns and hotel accommodation wings.',
      alt: 'Wide poolside patio, swimming pool and hotel buildings at Shri Palace Resort',
      aspect: 'landscape'
    },
    {
      id: 'spr-17',
      src: 'assets/Shri palace resort/unnmed (5).webp',
      title: 'Starlit Resort Pool & Glowing Facades',
      location: 'Shri Palace Resort',
      locationKey: 'shri-palace-resort',
      categories: ['architecture', 'weddings'],
      caption: 'Breathtaking night view of illuminated swimming pool reflecting warm golden windows under the stars.',
      alt: 'Starry night sky over illuminated swimming pool and hotel at Shri Palace Resort',
      aspect: 'landscape'
    },

    // --- SHRI PALACE MARRIAGE GARDEN (16 images) ---
    {
      id: 'spmg-01',
      src: 'assets/Shri Palce Marrige garden/unnamed (1).webp',
      title: '4,000 Sq.Ft. Grand Ballroom Banquet',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['dining'],
      caption: 'Opulent high-ceiling indoor banquet hall with crystal chandeliers, stage dais, and extensive banquet seating.',
      alt: 'Grand banquet ballroom with crystal chandeliers at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-02',
      src: 'assets/Shri Palce Marrige garden/unnamed (2).webp',
      title: 'Sangeet & DJ Celebration Stage',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['weddings'],
      caption: 'Dynamic outdoor Sangeet stage fitted with professional truss lighting and concert audio for wedding celebrations.',
      alt: 'Outdoor wedding Sangeet stage with truss lights at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-03',
      src: 'assets/Shri Palce Marrige garden/unnamed (3).webp',
      title: 'Guest Wing & Garden Verandah',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['architecture', 'dining'],
      caption: 'Two-storey garden accommodation and restaurant building with shaded ground-floor verandahs and lawn sit-outs.',
      alt: 'Exterior view of accommodation wing with verandah at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-04',
      src: 'assets/Shri Palce Marrige garden/unnamed (4).webp',
      title: 'Royal Outdoor Wedding Feast Lawns',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['dining', 'weddings'],
      caption: 'Open-air banquet dinner setup on lush green lawns with royal dining canopies and gourmet buffet counters.',
      alt: 'Outdoor wedding dinner lawn setup with buffet counters at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-05',
      src: 'assets/Shri Palce Marrige garden/unnamed (5).webp',
      title: 'Aerial View of Palace Mandap Grounds',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['weddings', 'architecture'],
      caption: 'High-angle view of the palace estate featuring the grand red-carpet aisle and ceremonial mandap setup.',
      alt: 'High aerial view of palace grounds with red carpet wedding setup at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-06',
      src: 'assets/Shri Palce Marrige garden/unnamed (6).webp',
      title: 'Verandah Sitting Lounge & Gardens',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['architecture'],
      caption: 'Comfortable indoor verandah sitting lounge with contemporary cane furniture overlooking peaceful garden views.',
      alt: 'Sitting lounge with grey sofas overlooking gardens at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-07',
      src: 'assets/Shri Palce Marrige garden/unnamed (7).webp',
      title: 'Illuminated Geometric Wedding Arches',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['weddings'],
      caption: 'Enchanting night wedding aisle adorned with modern geometric light arches and glowing palace backdrop.',
      alt: 'Illuminated geometric walkway arches on wedding lawn at night at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-08',
      src: 'assets/Shri Palce Marrige garden/unnamed (8).webp',
      title: 'Illuminated Live Buffet & Catering Counters',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['dining', 'weddings'],
      caption: 'Lavish evening food counters featuring warm LED illumination and pure A2 cow dairy culinary preparations.',
      alt: 'Illuminated live catering buffet counters on wedding lawn at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-09',
      src: 'assets/Shri Palce Marrige garden/unnamed (9).webp',
      title: 'Banquet Hall & Gold Chiavari Seating',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['dining'],
      caption: 'Refined indoor event hall dressed with elegant gold Chiavari chairs and warm chandelier ambiance.',
      alt: 'Banquet hall with gold Chiavari chairs and chandeliers at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-10',
      src: 'assets/Shri Palce Marrige garden/unnamed (10).webp',
      title: 'Dusk Wedding Aisle & Heritage Chhatris',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['weddings'],
      caption: 'Fairytale ceremonial arrival path flanked by hanging candle lanterns, floral garlands, and domed chhatris.',
      alt: 'Floral wedding aisle with hanging lanterns at dusk at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-11',
      src: 'assets/Shri Palce Marrige garden/unnamed (11).webp',
      title: 'Grand Traditional Gateway & Chhatri Domes',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['architecture', 'weddings'],
      caption: 'Monumental Rajasthani arrival gateway crowned with twin domed chhatris and decorated for ceremonial entries.',
      alt: 'Grand Rajasthani entrance gateway with twin domed chhatris at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-12',
      src: 'assets/Shri Palce Marrige garden/unnamed (12).webp',
      title: 'Night Wisteria Floral Wedding Promenade',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['weddings'],
      caption: 'Magical night wedding promenade draped with hanging white wisteria florals and diamond candle lanterns.',
      alt: 'Night floral wedding aisle with hanging wisteria and lanterns at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-13',
      src: 'assets/Shri Palce Marrige garden/unnamed (13).webp',
      title: 'Celebration Guests on Illuminated Grounds',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['weddings'],
      caption: 'Vibrant wedding celebration moments with guests gathered along the illuminated palace courtyard aisle.',
      alt: 'Wedding celebration with guests and illuminated palace at night at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-14',
      src: 'assets/Shri Palce Marrige garden/unnamed (14).webp',
      title: 'Palace Facade & Jharokhas Architecture',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['architecture', 'weddings'],
      caption: 'Stately multi-storey palace elevation displaying authentic Rajasthani arches, ornate jharokhas, and celebration lawn.',
      alt: 'Frontal elevation of palace facade with jharokhas and wedding lawn at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-16',
      src: 'assets/Shri Palce Marrige garden/unnamed (16).webp',
      title: 'High-Altitude Aerial View & Aravalli Foothills',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['architecture'],
      caption: 'Sweeping daylight drone aerial panorama showing the palace complex nestled in the tranquil Aravalli foothills.',
      alt: 'Daytime drone aerial view of palace building and Aravalli hills at Shri Palace Marriage Garden',
      aspect: 'landscape'
    },
    {
      id: 'spmg-17',
      src: 'assets/Shri Palce Marrige garden/unnamed.webp',
      title: 'Executive Lounge & Dining Hall',
      location: 'Shri Palace Marriage Garden',
      locationKey: 'shri-palace-marriage-garden',
      categories: ['architecture', 'dining'],
      caption: 'Spacious indoor lounge with comfortable grey sofas, tiled flooring, and floral decor for guests and delegates.',
      alt: 'Indoor lounge and dining area with sofas and flower vases at Shri Palace Marriage Garden',
      aspect: 'landscape'
    }
  ];

  // Gallery state
  let currentCategory = 'all';
  let filteredItems = [];
  let currentLightboxIndex = 0;

  // DOM Elements
  let gridContainer = null;
  let counterElem = null;
  let filterButtons = [];
  let lightboxModal = null;
  let lightboxImg = null;
  let lightboxTitle = null;
  let lightboxLocation = null;
  let lightboxCaption = null;
  let lightboxCounter = null;
  let prevBtn = null;
  let nextBtn = null;
  let closeBtn = null;

  /**
   * Filter items according to active category
   */
  function filterItems(category) {
    if (category === 'all') {
      return GALLERY_DATA.slice();
    }
    if (category === 'shri-palace-resort' || category === 'shrii-palace-resort') {
      return GALLERY_DATA.filter(item => item.locationKey === 'shri-palace-resort');
    }
    if (category === 'shri-palace-marriage-garden' || category === 'shrii-palace-marriage-garden') {
      return GALLERY_DATA.filter(item => item.locationKey === 'shri-palace-marriage-garden');
    }
    // Content-based categories (weddings, architecture, dining)
    return GALLERY_DATA.filter(item => item.categories.includes(category));
  }

  /**
   * Render the gallery grid with subtle fade animation
   */
  function renderGallery(category, animate = true) {
    currentCategory = category;
    filteredItems = filterItems(category);

    if (!gridContainer) return;

    if (animate) {
      gridContainer.classList.add('gallery-fading');
    }

    setTimeout(() => {
      gridContainer.innerHTML = '';

      if (filteredItems.length === 0) {
        gridContainer.innerHTML = `
          <div class="gallery-empty-state">
            <p>No photographs found in this category.</p>
          </div>
        `;
      } else {
        filteredItems.forEach((item, index) => {
          const card = document.createElement('article');
          card.className = `gallery-item-card ${item.aspect === 'portrait' ? 'gallery-card-portrait' : ''}`;
          card.setAttribute('data-id', item.id);
          card.setAttribute('data-location', item.locationKey);
          card.setAttribute('tabindex', '0');
          card.setAttribute('role', 'button');
          card.setAttribute('aria-label', `View ${item.title} (${item.location})`);

          card.innerHTML = `
            <div class="editorial-photo-wrap">
              <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async">
              <div class="gallery-card-overlay">
                <div class="gallery-card-top-tags">
                  <span class="gallery-location-badge">${item.location}</span>
                </div>
                <div class="gallery-card-info">
                  <h3 class="gallery-card-title">${item.title}</h3>
                  <p class="gallery-card-caption-snippet">${item.caption}</p>
                  <div class="gallery-card-action">
                    <span>Enlarge Photograph</span>
                    <span class="gallery-zoom-icon" aria-hidden="true">⤢</span>
                  </div>
                </div>
              </div>
            </div>
          `;

          // Click & Keyboard Enter/Space to open lightbox
          card.addEventListener('click', () => openLightboxAtIndex(index));
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openLightboxAtIndex(index);
            }
          });

          gridContainer.appendChild(card);
        });
      }

      // Update Result Counter / Subhead
      if (counterElem) {
        const catLabels = {
          'all': 'All Media',
          'shri-palace-resort': 'Shri Palace Resort',
          'shrii-palace-resort': 'Shri Palace Resort',
          'shri-palace-marriage-garden': 'Shri Palace Marriage Garden',
          'shrii-palace-marriage-garden': 'Shri Palace Marriage Garden',
          'weddings': 'Weddings & Lawns',
          'architecture': 'Architecture & Grounds',
          'dining': 'Dining & Banquets'
        };
        const label = catLabels[category] || 'Curated Selection';
        counterElem.innerHTML = `Showing <strong>${filteredItems.length}</strong> photographs in <em>${label}</em>`;
      }

      if (animate) {
        gridContainer.classList.remove('gallery-fading');
      }
    }, animate ? 150 : 0);
  }

  /**
   * Lightbox controller
   */
  function openLightboxAtIndex(index) {
    if (!filteredItems[index]) return;
    currentLightboxIndex = index;
    updateLightboxContent();

    if (lightboxModal) {
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (window.lenisInstance) window.lenisInstance.stop();
    }
  }

  function closeLightboxModal() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (window.lenisInstance) window.lenisInstance.start();
  }

  function nextLightbox() {
    if (filteredItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    if (filteredItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = filteredItems[currentLightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.style.opacity = '0';
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = '1';
      };
    }

    if (lightboxTitle) {
      lightboxTitle.textContent = item.title;
    }

    if (lightboxLocation) {
      lightboxLocation.textContent = item.location;
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = item.caption;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${filteredItems.length}`;
    }
  }

  // Setup Touch / Swipe for mobile lightbox
  function initTouchSwipe() {
    if (!lightboxModal) return;
    let touchStartX = 0;
    let touchEndX = 0;

    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 45;
      if (touchEndX < touchStartX - threshold) {
        nextLightbox(); // Swiped left
      } else if (touchEndX > touchStartX + threshold) {
        prevLightbox(); // Swiped right
      }
    }
  }

  /**
   * Initialize Gallery on DOMContentLoaded
   */
  function initGallery() {
    gridContainer = document.getElementById('editorialGalleryGrid');
    counterElem = document.getElementById('galleryCountDisplay');
    filterButtons = Array.from(document.querySelectorAll('.filter-pill[data-filter]'));

    // Lightbox elements
    lightboxModal = document.getElementById('editorialLightbox');
    lightboxImg = document.getElementById('lightboxImg');
    lightboxTitle = document.getElementById('lightboxTitle');
    lightboxLocation = document.getElementById('lightboxLocation');
    lightboxCaption = document.getElementById('lightboxCaption');
    lightboxCounter = document.getElementById('lightboxCounter');
    prevBtn = document.getElementById('lightboxPrevBtn');
    nextBtn = document.getElementById('lightboxNextBtn');
    closeBtn = document.getElementById('lightboxCloseBtn');

    // Filter Buttons click events
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.getAttribute('data-filter');

        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Smooth scroll filter pill into view on mobile
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        renderGallery(cat);
      });
    });

    // Lightbox navigation bindings
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeLightboxModal(); });

    // Click outside image in lightbox backdrop closes it
    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop')) {
          closeLightboxModal();
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeLightboxModal();
      } else if (e.key === 'ArrowRight') {
        nextLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightbox();
      }
    });

    // Touch swipe
    initTouchSwipe();

    // Initial render
    renderGallery('all', false);

    // Populate tab counter badges dynamically
    filterButtons.forEach(btn => {
      const cat = btn.getAttribute('data-filter');
      const count = filterItems(cat).length;
      let badge = btn.querySelector('.tab-count-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'tab-count-badge';
        btn.appendChild(badge);
      }
      badge.textContent = count;
    });
  }

  // Expose global methods for compatibility
  window.openLightbox = function (src, caption) {
    const idx = filteredItems.findIndex(i => i.src === src);
    if (idx !== -1) {
      openLightboxAtIndex(idx);
    } else {
      // Fallback
      if (lightboxImg) lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption || '';
      if (lightboxModal) lightboxModal.classList.add('active');
    }
  };
  window.closeLightbox = closeLightboxModal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
