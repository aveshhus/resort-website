with open('assets/gallery_items.html', 'r', encoding='utf-8') as f:
    items = f.read()

template = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Photo & Video Gallery | Shrii Palace Resorts Rajasthan</title>
  <meta name="description" content="Explore genuine photo and video gallery of Shrii Palace Resorts across Udaipurwati and Nangal. Grand lawns, rooms, swimming pool, and banquets.">
  <link rel="canonical" href="https://shriipalaceresorts.com/gallery.html">
  <link rel="stylesheet" href="css/main.css">
  <link rel="icon" type="image/webp" href="assets/images/logo.webp">
  <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js" defer></script>
</head>
<body>

  <!-- Switcher Bar -->
  <div class="dest-switcher-bar">
    <div class="dest-pill-group">
      <span style="color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.72rem; margin-right: 0.25rem;">Filter:</span>
      <button class="dest-pill active" data-set-destination="all">All Photos</button>
      <button class="dest-pill" data-set-destination="udaipurwati">Udaipurwati</button>
      <button class="dest-pill" data-set-destination="nangal">Nangal</button>
    </div>
    <div class="quick-contact-links">
      <a href="tel:+919509771500">📞 +91 95097 71500</a>
      <a href="https://wa.me/919509771500" target="_blank" rel="noopener" style="color: #10B981;">💬 WhatsApp</a>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand-logo">
        <img src="assets/images/logo.webp" alt="Shrii Palace Resorts Logo">
        <div class="brand-title-wrap">
          <span class="brand-name">Shrii Palace</span>
          <span class="brand-tagline">Resorts • Rajasthan</span>
        </div>
      </a>

      <nav class="desktop-nav">
        <a href="destinations/index.html" class="nav-link">Destinations</a>
        <a href="stay.html" class="nav-link">Stay & Rooms</a>
        <a href="weddings.html" class="nav-link">Weddings</a>
        <a href="events.html" class="nav-link">Conferences</a>
        <a href="dining.html" class="nav-link">Dining</a>
        <a href="experiences.html" class="nav-link">Experiences</a>
        <a href="gallery.html" class="nav-link active">Gallery</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>

      <div class="header-actions">
        <button class="btn btn-primary btn-sm open-enquiry-modal">Plan Visit</button>
        <button class="menu-toggle-btn" aria-label="Toggle Mobile Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-backdrop"></div>
  <aside class="mobile-nav-drawer">
    <div>
      <div class="eyebrow" style="margin-bottom: 1.5rem;">Explore Destinations</div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem;">
        <a href="destinations/udaipurwati.html" class="btn btn-outline btn-sm">🏛️ Shrii Palace Udaipurwati</a>
        <a href="destinations/nangal.html" class="btn btn-outline btn-sm">🌿 Shrii Palace Nangal</a>
      </div>
      <nav class="mobile-nav-links">
        <a href="index.html">Home</a>
        <a href="destinations/index.html">All Destinations</a>
        <a href="stay.html">Stay & Rooms</a>
        <a href="weddings.html">Royal Weddings</a>
        <a href="events.html">Conferences</a>
        <a href="dining.html">Dining</a>
        <a href="experiences.html">Experiences</a>
        <a href="gallery.html">Gallery</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
    <div class="mobile-nav-bottom">
      <button class="btn btn-primary open-enquiry-modal" style="width: 100%;">Enquire Now</button>
    </div>
  </aside>

  <!-- Page Banner -->
  <section class="section" style="background: radial-gradient(circle at 50% 0%, rgba(197, 168, 128, 0.1) 0%, transparent 60%); text-align: center; padding-top: 4rem; padding-bottom: 3rem;">
    <div class="container" style="max-width: 850px;">
      <span class="eyebrow centered">Visual Splendor</span>
      <h1 style="font-size: var(--fs-h1); margin-bottom: 1.25rem;">Authentic Moments & Architecture</h1>
      <p style="color: var(--text-muted); font-size: var(--fs-body); line-height: 1.7;">
        Explore 45+ authentic high-resolution photographs capturing our palace lawns, rooms, swimming pool, banquet halls, and Rajasthan nightscapes.
      </p>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="gallery-filter-tabs">
        <button class="gallery-filter-btn active" data-filter="all">All Photos</button>
        <button class="gallery-filter-btn" data-filter="udaipurwati">Udaipurwati</button>
        <button class="gallery-filter-btn" data-filter="nangal">Nangal</button>
        <button class="gallery-filter-btn" data-filter="weddings">Weddings & Lawns</button>
        <button class="gallery-filter-btn" data-filter="rooms">Rooms & Suites</button>
        <button class="gallery-filter-btn" data-filter="pool">Poolside</button>
        <button class="gallery-filter-btn" data-filter="events">Banquets & Halls</button>
      </div>

      <div class="gallery-masonry">
{items}
      </div>
    </div>
  </section>

  <!-- Lightbox Container -->
  <div class="lightbox-modal" aria-hidden="true">
    <button class="lightbox-close" aria-label="Close Lightbox">✕</button>
    <button class="lightbox-nav-btn lightbox-prev" aria-label="Previous Image">‹</button>
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-img">
      <div class="lightbox-caption"></div>
    </div>
    <button class="lightbox-nav-btn lightbox-next" aria-label="Next Image">›</button>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Shrii Palace Resorts. Complete Gallery.</div>
        <div style="display: flex; gap: 1.5rem;">
          <a href="index.html">Home</a>
          <a href="destinations/index.html">Destinations</a>
          <a href="stay.html">Rooms</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Enquiry Modal -->
  <div class="enquiry-modal" aria-hidden="true">
    <div class="enquiry-dialog">
      <button class="enquiry-close-btn">✕</button>
      <span class="eyebrow">Reservations & Events</span>
      <h3 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Enquire for Dates</h3>
      <form id="shrii-enquiry-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Preferred Destination *</label>
            <select id="enquiry-location-select" class="form-control form-select" required>
              <option value="both">Both / Need Guidance</option>
              <option value="udaipurwati">Shrii Palace Udaipurwati</option>
              <option value="nangal">Shrii Palace Nangal</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Occasion *</label>
            <select id="enquiry-type-select" class="form-control form-select" required>
              <option value="Destination Wedding">Destination Wedding</option>
              <option value="Room Stay / Vacation">Room Stay / Vacation</option>
              <option value="Corporate Conference">Corporate Conference</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Your Name *</label>
            <input type="text" id="enquiry-name" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp *</label>
            <input type="tel" id="enquiry-phone" class="form-control" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">Connect on WhatsApp 💬</button>
      </form>
    </div>
  </div>

  <script src="js/destinationsData.js"></script>
  <script src="js/main.js"></script>
</body>
</html>"""

with open('gallery.html', 'w', encoding='utf-8') as f:
    f.write(template)

print('Generated gallery.html successfully!')
