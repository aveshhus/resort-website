/**
 * Single Source of Truth for Shrii Palace Resorts (Udaipurwati & Nangal)
 * Verified business data, rooms, wedding venues, conference halls, experiences, and imagery.
 */

const RESORTS_DATA = {
  brand: {
    name: "Shrii Palace Resorts",
    tagline: "One Brand. Two Destinations. One Extraordinary Experience.",
    shortTagline: "Two destinations. Different experiences. One signature of hospitality.",
    phone: "+91 95097 71500",
    phoneDisplay: "+91 95097 71500",
    whatsappNumber: "919509771500",
    email: "book@nangalresort.com",
    established: "Rajasthan, India",
    instagram: "https://www.instagram.com/shrii.palace/",
    facebook: "https://www.facebook.com/profile.php?id=61550515152918",
    youtube: "https://www.youtube.com/@nangalresort",
    logoPath: "assets/images/logo.webp"
  },
  destinations: {
    udaipurwati: {
      id: "udaipurwati",
      name: "Shrii Palace Udaipurwati",
      shortName: "Udaipurwati",
      subtitle: "Celebration Resort & Grand Venue",
      heroHeadline: "Royal Celebrations in the Heart of Shekhawati",
      heroDescription: "A grand celebration-led destination with magnificent outdoor lawns, majestic air-conditioned banquet spaces, bridal suites, and event-ready hospitality crafted for milestone weddings.",
      address: "SH 37, Near Tagore College, Gudha Gorji, Jhunjhunu District, Rajasthan – 333022",
      pincode: "333022",
      googleMapsUrl: "https://maps.google.com/?q=Tagore+College+Gudha+Gorji+Jhunjhunu+Rajasthan",
      highlightBadge: "Grand Celebration Hub",
      heroImage: "assets/images/_DSC5147_lg.webp",
      cardImage: "assets/images/_DSC5147_md.webp",
      videoReel: "assets/videos/lawn-celebration.mp4",
      vibe: "Grand royal weddings, massive outdoor lawns, luxury banqueting, and seamless celebration hospitality.",
      stats: [
        { label: "Grand Celebration Lawn", value: "30,000+ sq.ft." },
        { label: "Guest Capacity", value: "1,500+ Guests" },
        { label: "Air-Conditioned Banquets", value: "Grand Hall" },
        { label: "Celebration Stays", value: "Dedicated Suites" }
      ],
      features: [
        "Massive landscaped celebration lawn with custom mandap stage",
        "Pillarless grand air-conditioned banquet hall",
        "Dedicated bridal & family dressing suites",
        "In-house Royal Rajasthani and multi-cuisine catering infrastructure",
        "Valet parking and expansive guest arrival courtyard",
        "Scenic location on SH-37 near Shekhawati fresco belt"
      ],
      venues: [
        {
          name: "The Royal Meadow Lawn",
          type: "Outdoor Celebration Space",
          capacity: "Up to 1,500 Guests",
          description: "An expansive lush green lawn with a grand entry aisle and illuminated floral archways, ideal for royal Sangeet, Varmala, and grand receptions.",
          image: "assets/images/_DSC5149_md.webp"
        },
        {
          name: "The Grand Regal Banquet",
          type: "Indoor Air-Conditioned Hall",
          capacity: "Up to 500 Guests",
          description: "An opulent indoor banquet hall with high ceilings, acoustic engineering, and modern chandelier lighting for indoor dining and auspicious ceremonies.",
          image: "assets/images/_DSC5153_md.webp"
        },
        {
          name: "Courtyard & Pre-Function Arena",
          type: "Semi-Covered Gathering Area",
          capacity: "Up to 300 Guests",
          description: "Charming traditional open-air courtyard perfect for Haldi, Mehendi, High-Tea, and welcoming cocktail hours.",
          image: "assets/images/_DSC5144_md.webp"
        }
      ],
      rooms: [
        {
          name: "Royal Heritage Suite",
          occupancy: "2-3 Guests",
          bedType: "King Sized Bed",
          description: "Spacious luxury suites tailored for wedding hosts and couples, featuring traditional carved accents, modern vanity baths, and courtyard views.",
          features: ["Air Conditioning", "Ensuite Marble Bath", "Dressing Area", "24/7 Room Service", "High Speed Wi-Fi"],
          image: "assets/images/_DSC5113_md.webp"
        },
        {
          name: "Celebration Guest Room",
          occupancy: "2-4 Guests",
          bedType: "Twin / Double Bed",
          description: "Comfortable and elegant accommodations designed to host wedding attendees, families, and private groups in relaxed comfort.",
          features: ["Air Conditioning", "Modern Bathroom", "Tea/Coffee Maker", "Wardrobe", "Daily Housekeeping"],
          image: "assets/images/_DSC5114_md.webp"
        }
      ],
      distances: [
        { destination: "Jhunjhunu City Center", distance: "28 km", time: "~35 mins" },
        { destination: "Shakambhari Mata Temple", distance: "22 km", time: "~30 mins" },
        { destination: "Nawalgarh Painted Havelis", distance: "32 km", time: "~40 mins" },
        { destination: "Jaipur International Airport", distance: "135 km", time: "~2.5 hrs" },
        { destination: "Delhi NCR", distance: "245 km", time: "~4.5 hrs" }
      ]
    },
    nangal: {
      id: "nangal",
      name: "Shrii Palace Nangal",
      shortName: "Nangal",
      subtitle: "Resort Stay, Poolside & Celebration Destination",
      heroHeadline: "A Tranquil Resort Retreat in the Aravalli Foothills",
      heroDescription: "Nestled away from urban noise, Nangal Resort blends heritage architectural charm with serene poolside lounging, a panoramic rooftop restaurant, 3 banquet halls, and 30+ well-appointed rooms.",
      address: "Sikar Road, Opposite Power House, Nangal, Udaipurwati, Rajasthan – 333307",
      pincode: "333307",
      googleMapsUrl: "https://maps.google.com/?q=Nangal+Resort+Sikar+Road+Udaipurwati+Rajasthan",
      highlightBadge: "Resort Retreat & Leisure",
      heroImage: "assets/images/_DSC4754_lg.webp",
      cardImage: "assets/images/_DSC5138_md.webp",
      videoReel: "assets/videos/poolside-ambience.mp4",
      vibe: "Serene resort holidays, crystal swimming pool, rooftop dining with pure A2 cow dairy, corporate offsites, and scenic mountain weddings.",
      stats: [
        { label: "Total Guest Rooms", value: "30+ Published (44 Capacity)" },
        { label: "Banquet Facilities", value: "4,000 sq.ft. + 2x1,000 sq.ft." },
        { label: "Conference Breakouts", value: "12 Meeting Rooms" },
        { label: "Leisure & Dining", value: "Pool & Rooftop Dine" }
      ],
      features: [
        "Crystal clear outdoor swimming pool with sunbeds and evening party deck",
        "Rooftop multi-cuisine restaurant serving authentic regional food with fresh in-house A2 cow milk",
        "4,000 sq.ft. Grand Ballroom + Two 1,000 sq.ft. Banquet Halls",
        "12 executive breakout conference rooms for corporate offsites",
        "Lush landscaped lawns surrounded by the majestic Aravalli peaks",
        "Close proximity to Shakambhari Mata Mandir (14 km) & Kot Dam (10 km)"
      ],
      venues: [
        {
          name: "Grand Ballroom & Conference Center",
          type: "Indoor Banquet & Event Space",
          capacity: "Up to 500 Guests (4,000 sq.ft.)",
          description: "Meticulously designed large banquet hall with modern AV capabilities, ideal for corporate seminars, wedding ceremonies, and gala banquets.",
          image: "assets/images/_DSC5158_md.webp"
        },
        {
          name: "Emerald Banquet Halls I & II",
          type: "Breakout & Intimate Venues",
          capacity: "Up to 120 Guests each (1,000 sq.ft.)",
          description: "Two boutique air-conditioned banquet spaces tailored for corporate workshops, private dining, Ring ceremonies, and family gatherings.",
          image: "assets/images/_DSC5156_md.webp"
        },
        {
          name: "Aravalli Poolside Deck & Lawn",
          type: "Open Air Resort Setting",
          capacity: "Up to 400 Guests",
          description: "Romantic illuminated poolside deck with mountain backdrop for cocktail nights, pool parties, and evening receptions under the stars.",
          image: "assets/images/_DSC5138_md.webp"
        }
      ],
      rooms: [
        {
          name: "Deluxe Room",
          occupancy: "2 Guests (Extra Bed Available)",
          bedType: "King / Queen Sized Bed",
          description: "Comfortably furnished room with modern en-suite bathroom, high-speed Wi-Fi, air conditioning, and peaceful mountain or garden vistas.",
          features: ["2 Person Occupancy", "Attached Modern Bathroom", "24/7 Hot Water", "Tea/Coffee Maker", "Flat Screen TV", "Room Service"],
          image: "assets/images/_DSC5115_md.webp"
        },
        {
          name: "Super Deluxe Room",
          occupancy: "2 Guests (Extra Bed Available)",
          bedType: "Premium King Bed",
          description: "Elevated luxury with generous space, premium linen, ambient lighting, private seating nook, and sweeping views of the Aravalli hills.",
          features: ["Pool or Hill View", "Luxury Toiletries", "Mini Seating Lounge", "Air Conditioning", "Work Desk", "High Speed Wi-Fi"],
          image: "assets/images/_DSC5117_md.webp"
        },
        {
          name: "Family Suite Room",
          occupancy: "4 Guests (Extra Bed Available)",
          bedType: "Double King Beds / Multi-Bed Setup",
          description: "Expansive family room designed for vacationing groups and families with children, offering twin sleeping zones and dedicated wardrobe space.",
          features: ["4 Person Occupancy", "Spacious Floor Plan", "Ensuite Bath", "Family Sitting Area", "Climate Control", "In-Room Dining"],
          image: "assets/images/_DSC5119_md.webp"
        }
      ],
      distances: [
        { destination: "Sikar & Neem Ka Thana", distance: "30 km", time: "~35 mins" },
        { destination: "Shakambhari Mata Temple", distance: "14 km", time: "~20 mins" },
        { destination: "Kot Dam & Hunting Lodge", distance: "10 km", time: "~15 mins" },
        { destination: "Salasar Balaji Temple", distance: "54 km", time: "~55 mins" },
        { destination: "Khatu Shyam Ji Mandir", distance: "60 km", time: "~1 hr" },
        { destination: "Jaipur (Pink City)", distance: "118 km", time: "~2 hrs" },
        { destination: "Delhi NCR", distance: "280 km", time: "~4.5 hrs" }
      ]
    }
  },
  gallery: [
    { src: "assets/images/_DSC4754_lg.webp", thumb: "assets/images/_DSC4754_sm.webp", title: "Resort Architecture & Frontage", destination: "nangal", category: "architecture", caption: "Authentic Rajasthani arches and grand arrival courtyard at Nangal." },
    { src: "assets/images/_DSC5138_lg.webp", thumb: "assets/images/_DSC5138_sm.webp", title: "Resort Swimming Pool & Deck", destination: "nangal", category: "pool", caption: "Crystal blue swimming pool with sunbeds set against Aravalli foothills." },
    { src: "assets/images/_DSC5147_lg.webp", thumb: "assets/images/_DSC5147_sm.webp", title: "Grand Celebration Lawn", destination: "udaipurwati", category: "weddings", caption: "Sprawling manicured lawn tailored for royal destination weddings." },
    { src: "assets/images/_DSC5149_lg.webp", thumb: "assets/images/_DSC5149_sm.webp", title: "Wedding Mandap Setting", destination: "udaipurwati", category: "weddings", caption: "Elegantly illuminated open-air stage for sacred vows and evening ceremonies." },
    { src: "assets/images/_DSC5158_lg.webp", thumb: "assets/images/_DSC5158_sm.webp", title: "4,000 sq.ft. Grand Banquet Hall", destination: "nangal", category: "events", caption: "State-of-the-art indoor banquet and conference hall." },
    { src: "assets/images/_DSC5156_lg.webp", thumb: "assets/images/_DSC5156_sm.webp", title: "Banquet Dining Setup", destination: "nangal", category: "dining", caption: "Opulent banquet dining and reception arrangement." },
    { src: "assets/images/_DSC5113_lg.webp", thumb: "assets/images/_DSC5113_sm.webp", title: "Super Deluxe Suite Interior", destination: "nangal", category: "rooms", caption: "Warm wooden textures, heritage aesthetics, and plush bedding." },
    { src: "assets/images/_DSC5115_lg.webp", thumb: "assets/images/_DSC5115_sm.webp", title: "Deluxe Bedroom", destination: "nangal", category: "rooms", caption: "Clean contemporary comforts with traditional Rajasthani warmth." },
    { src: "assets/images/_DSC5117_lg.webp", thumb: "assets/images/_DSC5117_sm.webp", title: "Royal Guest Suite", destination: "udaipurwati", category: "rooms", caption: "Spacious bridal and host accommodation with private vanity lounge." },
    { src: "assets/images/_DSC5119_lg.webp", thumb: "assets/images/_DSC5119_sm.webp", title: "Family Accommodation Suite", destination: "nangal", category: "rooms", caption: "Multi-occupancy comfort tailored for extended family vacations." },
    { src: "assets/images/_DSC5142_lg.webp", thumb: "assets/images/_DSC5142_sm.webp", title: "Resort Facade at Sunset", destination: "nangal", category: "architecture", caption: "Golden hour glow highlighting the heritage stone carvings." },
    { src: "assets/images/_DSC5140_lg.webp", thumb: "assets/images/_DSC5140_sm.webp", title: "Poolside Evening Lounge", destination: "nangal", category: "pool", caption: "Ambient lighting and tranquil mountain breeze by the poolside." },
    { src: "assets/images/_DSC5153_lg.webp", thumb: "assets/images/_DSC5153_sm.webp", title: "Grand Indoor Ballroom", destination: "udaipurwati", category: "events", caption: "High ceiling AC hall with stage for corporate meets and indoor Sangeet." },
    { src: "assets/images/_DSC5144_lg.webp", thumb: "assets/images/_DSC5144_sm.webp", title: "Central Heritage Courtyard", destination: "udaipurwati", category: "architecture", caption: "Intimate gathering courtyard for Mehendi and cultural evenings." },
    { src: "assets/images/_DSC5160_lg.webp", thumb: "assets/images/_DSC5160_sm.webp", title: "Corporate Conference Hall", destination: "nangal", category: "events", caption: "Seating layout configured for corporate presentations and business summits." }
  ],
  experiences: [
    {
      title: "Shakambhari Mata Pilgrimage",
      destination: "Both (14 km from Nangal / 22 km from Udaipurwati)",
      description: "Pay homage at the ancient Shakambhari Devi Shaktipeeth nestled in a serene mountain gorge, an easy 20-minute drive from the resorts.",
      tag: "Spiritual Heritage",
      image: "assets/images/_DSC5142_md.webp"
    },
    {
      title: "Mansamata Sanctuary & Kot Dam Safari",
      destination: "Nangal (10 km)",
      description: "Embark on guided open-top Jeep safaris across the rugged Aravalli slopes, Kot Dam lake bed, and wildlife sanctuary corridors.",
      tag: "Eco Adventure",
      image: "assets/images/_DSC4754_md.webp"
    },
    {
      title: "Shekhawati Open-Air Art Gallery",
      destination: "Udaipurwati & Nangal Region",
      description: "Explore the world-famous painted havelis, frescoed cenotaphs, and historical forts of Nawalgarh, Mandawa, and Gudha Gorji.",
      tag: "Art & Culture",
      image: "assets/images/_DSC5144_md.webp"
    },
    {
      title: "Farm-Fresh A2 Milk & Royal Rajasthani Feasts",
      destination: "Nangal & Udaipurwati",
      description: "Indulge in authentic Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, and rich desserts prepared using farm-fresh pure A2 cow milk.",
      tag: "Culinary Legacy",
      image: "assets/images/_DSC5156_md.webp"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RESORTS_DATA;
}
