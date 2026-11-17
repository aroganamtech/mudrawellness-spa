Mudra Wellness Spa — Master Project Specification & Technical Dossier
Mudra Wellness Spa Brand
Mudra Wellness Spa Brand

"Relax. Rejuvenate. Rediscover Yourself."
A sanctuary of peace, holistic healing, and master therapeutic wellness located in Sainikpuri, Hyderabad.

1. Executive Summary & Verified Business Profile
Mudra Wellness Spa (officially Mudra Wellness Spa & Saloon) is a premier luxury wellness center located in Hyderabad, India. The web application is engineered as a responsive, high-performance static web experience built on modern web standards (React 19, Vite 6, Tailwind CSS 3.4, and Framer Motion 12), honoring the sanctuary's visual identity—a radiant gold tree of life rooted in mindfulness.

Verified Business Information
Official Business Name: Mudra Wellness Spa
Complete Physical Address: PNO 164-C, Eshwaripuri Colony, Sainikpuri, Kapra, A.S. Rao Nagar, Hyderabad, Telangana 500094
Direct Telephone / WhatsApp: +91 99084 17555
Raw Phone Number: 9908417555 (Click-to-call / direct WhatsApp enabled)
Official Email: mudrawellness2025@gmail.com
Operating Hours: 10:00 AM – 9:00 PM (Open 7 Days a Week, Monday through Sunday)
Official Instagram: instagram.com/mudra_wellness_sainikpuri
Verified Geolocation Coordinates: 17.4872239, 78.5533777
Google Maps Place ID: 0x3bcb9b40a736998f:0x64e9a85af1c1faf6
Direct Directions URL: Open Mudra Wellness on Google Maps
2. Design Language & Visual System
The design aesthetic is anchored in an Ultra-Luxury Spa & Holistic Sanctuary paradigm, harmonizing calm organic earth tones with warm champagne metallics.

Mermaid diagram
Color Palette
Color Token	Hex Code	Visual Role & Usage
Forest Darker	#0a1c16	Hero backgrounds, mobile drawer background, high-contrast dark backdrops
Deep Forest Green	#183D32	Primary brand anchor, header bars, active navigation pills, modal wrappers
Forest Light	#245446	Subtle gradients, secondary borders, active states
Sage Green	#A8B89A	Secondary text, subtle badge borders, soothing accents
Warm Cream	#F7F3EB	Section backgrounds, high-legibility body cards, primary text on dark backgrounds
Champagne Gold	#C5A46D	Metallic accents, CTA buttons, active slide dots, logo glow effects
Gold Dark / Radiant	#997736 / #E2CA9E	Gradient stops for luxury primary buttons and shimmering light sweeps
Typography Hierarchy
Display & Headings: Cormorant Garamond & Playfair Display — High-end classical serifs with wide letter-spacing (tracking-[0.18em] to tracking-[0.25em]) and italic flourishes.
Body & Navigation: Poppins & Inter — High-legibility modern sans-serifs ensuring readability across mobile viewports, form controls, and badge overlays.
Key CSS & Motion Animations
animate-hero-zoom: Continuous slow ambient scale (1.05 -> 1.12 -> 1.05 over 24 seconds) applied to hero backdrops.
animate-light-sweep: Linear gradient shimmer passing across headline keywords.
animate-enso-expand: Golden Zen Ensō circle expanding during initial page load.
Directional Spring Slides: Framer Motion spring physics (stiffness: 220, damping: 26) for touch-enabled horizontal carousel slide transitions.
3. Core Pages & Feature Specification
Mermaid diagram
Page 1: Home Page (src/pages/Home.jsx)
Luxury Ensō Opening Loader (Loader.jsx):

Displays the golden Mudra tree emblem accompanied by an expanding golden Ensō ring.
Displays "Mudra Wellness Spa" in Cormorant Garamond typography before dissolving via smooth silk fade.
Hero Section (Symmetric 2-Column Full-Width Grid):

Full-Width Edge Expansion: Container uses w-full px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 eliminating dead lateral margins.
Left Column:
Primary headline: "Relax. Rejuvenate. Rediscover Yourself." with radiant gradient sweep.
Subheading: "Experience the perfect harmony of relaxation, beauty, and wellness at Mudra Wellness Spa."
Dual CTAs: "Explore Our Services" (scrolls to catalogue) and "Book Your Appointment" (opens modal).
Operational badges: Open Daily: 10:00 AM – 9:00 PM, Eshwaripuri Colony, Sainikpuri, and Certified Wellness Practitioners.
Right Column (Hero Slideshow):
Cycles through the 5 signature therapies with authentic photos (Thai-massage/1.jpeg, Aroma-Massage/1.jpeg, Swedish-Massage/1.jpeg, Balinese-Massage/1.jpg, Deep-Tissue-Massage/2.jpg).
Massage Name Only: Displays exclusively the massage name (e.g., THAI MASSAGE, AROMA MASSAGE) in an elegant frosted gold pill badge.
Directional Spring Slide Animation: Horizontal slide transitions with x: 100% -> 0 and 0 -> -100%, drag-to-swipe gestures, chevron arrows, and 5 interactive progress dots.
Welcome Section:

Editorial presentation introducing Mudra Wellness Spa accompanied by authentic therapy imagery (/images/Thai-massage/2.jpg).
Why Choose Us Section:

4 pillars: Relaxing Ambience, Professional Care, Personalized Experience, and Quality Wellness Services.
Featured Services Showcase:

Grid of signature therapies equipped with interactive multi-image slideshows, massage name badges, and "Explore More" triggers.
Atmosphere & Care Collage ("Your Journey to Relaxation Begins Here"):

4-photo luxury mosaic featuring authentic Thai, Aroma, Swedish, and Balinese therapy photos. Clean presentation with zero distracting labels.
Visual Sanctuary Gallery Preview ("A Glimpse Into Mudra Wellness Spa"):

6 authentic photos showcasing private treatment rooms, essential oils, hot stone therapies, and calming aesthetics.
Call-to-Action Banner:

Full-width luxury emerald banner with instant booking action.
Page 2: About Us Page (src/pages/About.jsx)
Hero Banner:

High-resolution authentic therapy photograph (/images/Thai-massage/3.jpg).
Headline: "Crafting Sanctuaries of Peace & Restorative Healing". Clean layout with top badge removed.
Our Story & Heritage:

Authentic therapy photo (/images/Deep-Tissue-Massage/2.jpg) highlighting skilled practitioner craftsmanship and mindful relaxation.
Our Philosophy:

Section exploring holistic rejuvenation: physical vitality, mental clarity, and inner serenity.
Core Values Grid:

5 pillars: Customer Comfort, Professional Service, Quality Care, Cleanliness & Hygiene, and Personalized Attention, plus a dedicated Local Dedication card for Sainikpuri residents.
Our Spa Environment:

Private Treatment Rooms: Showcases verified authentic Mudra room photo (public/images/branding/Screenshot 2026-11-16 173934.png).
Immaculate Linen & Hygiene: Features /images/Swedish-Massage/1.jpeg.
Aromatic Sensory Immersion: Features /images/Aroma-Massage/4.jpg.
Page 3: Services Page (src/pages/Services.jsx)
Hero Banner:

Ambient emerald backdrop with luxury title: "Our Healing Therapies & Rituals". Top badge removed.
The 5 Official Signature Therapies:

01. Thai Massage: Ancient Acupressure & Passive Yoga Stretches (5 authentic photos).
02. Aroma Massage: Sensory Serenity & Pure Essential Plant Oils (4 authentic photos; lead image: 1.jpeg).
03. Swedish Massage: Classic Full-Body Gentle Rejuvenation (4 authentic photos).
04. Balinese Massage: Indonesian Acupressure & Aromatherapy Ritual (4 authentic photos).
05. Deep Tissue Massage: Targeted Firm Therapy for Chronic Tension (4 authentic photos).
Service Detail Modal (ServiceDetailModal.jsx):

Triggered by clicking "Learn More" on any therapy card.
Header houses the multi-image slideshow cycling through all authentic photos of that specific service.
Full therapeutic description, 4 key health benefits, hygiene assurances, and direct WhatsApp booking with the service title pre-filled.
Compliance: Strictly avoids fictional prices, durations, or discount coupons.
Page 4: Contact Us Page (src/pages/Contact.jsx)
Hero Banner:

Ambient sanctuary backdrop with luxury title: "Connect With Mudra Wellness". Top badge removed.
Verified Contact Cards:

Address Card: PNO 164-C, Eshwaripuri Colony, Sainikpuri, Kapra, A.S. Rao Nagar, Hyderabad 500094. Clicking triggers smooth scroll down to the #map section.
Phone Card: +91 99084 17555 with direct click-to-call link.
Email Card: mudrawellness2025@gmail.com with direct mailto: link.
Operating Hours Card: 10:00 AM – 9:00 PM, Open 7 Days a Week.
Interactive Contact Form:

Guest inputs: Full Name, Phone Number, Preferred Service, Preferred Date, and Special Requests.
Validates input fields and compiles a pre-formatted WhatsApp message ready to send to +91 99084 17555.
Unobstructed Google Maps Pin:

Live Google Maps embed centered at 17.4872239, 78.5533777.
Floating overlay box removed to ensure Google Maps' native place card, reviews, and "Directions" button remain 100% visible and interactive.
Guest FAQ Accordion:

4 expandable questions covering booking etiquette, parking availability in Eshwaripuri Colony, hygiene protocols, and first-time visitor recommendations.
4. Mobile Left Sidebar Navigation Architecture
The mobile navigation is built as an off-canvas Left Sidebar drawer engineered for one-handed thumb ergonomics:

Mermaid diagram
Key Elements of the Mobile Experience
Mobile Header (Fixed Top):
Top-Left: Mobile hamburger menu button (<Menu />) directly beside the Mudra brand emblem and title.
Top-Right: Gold [Calendar] Book button for 1-tap booking from any scroll position.
Left Sidebar Drawer (<aside>):
Position: Fixed to the left edge: fixed top-0 bottom-0 left-0 w-[86%] max-w-[340px] z-50 bg-[#0d221c] border-r border-gold/30 shadow-2xl.
Animation: Smooth 300ms cubic slide transition (translate-x-0 on open, -translate-x-full on close).
Frosted Backdrop: fixed inset-0 bg-black/60 backdrop-blur-sm z-40—tapping the backdrop immediately closes the drawer.
Top Row inside Drawer: Brand logo on left, clean ✕ close button on right.
Centered Emblem: Glowing gold Mudra tree with MUDRA WELLNESS SPA and SAINIKPURI · HYDERABAD.
Active "HOME" Pill: Rounded dark emerald container (bg-[#122e26]) with a 3px solid champagne-gold left vertical accent bar (border-l-[3px] border-l-gold) and gold serif text.
Pure Navigation Focus: Clutter-free design with booking options removed from inside the sidebar per user specification.
Footer inside Drawer: Operating hours (10:00 AM – 9:00 PM · Open 7 Days) and address (Eshwaripuri Colony, Sainikpuri).
5. Authentic Media Asset Inventory
All images deployed across the application are authentic photographs sourced from dedicated directory structures:

Directory Path	Service Name	Photos	Lead / Key Images Used
public/images/Thai-massage/	Thai Massage	5	1.jpeg (Lead / Hero Slide), 2.jpg (Welcome section), 3.jpg (About Hero), 4.jpg, 5.jpg
public/images/Aroma-Massage/	Aroma Massage	4	1.jpeg (Lead / Hero Slide), 2.jpeg (Collage), 3.avif, 4.jpg (About Aromatics)
public/images/Swedish-Massage/	Swedish Massage	4	1.jpeg (Lead / Hero Slide / Linen card), 2.jpeg (Collage), 3.jpeg, 4.webp
public/images/Balinese-Massage/	Balinese Massage	4	1.jpg (Lead / Hero Slide), 2.avif (Collage), 3.webp, 4.jpeg
public/images/Deep-Tissue-Massage/	Deep Tissue Massage	4	2.jpg (Lead / Hero Slide / About Story), 1.avif, 3.jpeg, 4.jpg
public/images/branding/	Brand & Suite Assets	4	Screenshot 2026-11-16 173934.png (Authentic Private Suite photo), mudra-logo-gold.png, logo-gold.png
6. Project Directory Tree

Mudra/
├── index.html                   # HTML entry point with luxury Google Fonts preloaded
├── package.json                 # Project dependencies and script declarations
├── postcss.config.js            # PostCSS configuration for Tailwind and Autoprefixer
├── tailwind.config.js           # Custom Tailwind theme (forest greens, champagne golds, shadows)
├── vite.config.js               # Vite config with strictPort: false and port 3031
├── public/
│   ├── favicon.ico              # Browser tab icon
│   ├── logo-gold.png            # Primary brand emblem with gold glow
│   └── images/
│       ├── hero-bg.jpg          # Ambient spa hero background
│       ├── Thai-massage/        # 5 authentic Thai therapy photos (1.jpeg - 5.jpg)
│       ├── Aroma-Massage/       # 4 authentic Aroma therapy photos (1.jpeg - 4.jpg)
│       ├── Swedish-Massage/     # 4 authentic Swedish therapy photos (1.jpeg - 4.webp)
│       ├── Balinese-Massage/    # 4 authentic Balinese therapy photos (1.jpg - 4.jpeg)
│       ├── Deep-Tissue-Massage/ # 4 authentic Deep Tissue therapy photos (1.avif - 4.jpg)
│       └── branding/            # Logo variants & authentic private room screenshot
└── src/
    ├── main.jsx                 # React root mounting point
    ├── App.jsx                  # Main SPA router, state manager, modal coordinators
    ├── data/
    │   └── spaData.js           # Single source of truth for business data, therapies, and gallery
    ├── components/
    │   ├── Navbar.jsx           # Sticky glass navbar & mobile left sidebar drawer
    │   ├── Footer.jsx           # Global footer with verified coordinates & Instagram link
    │   ├── Loader.jsx           # Ultra-luxury Ensō silk opening animation
    │   ├── ServiceSlideshow.jsx # Reusable multi-image crossfade slideshow component
    │   ├── ServiceDetailModal.jsx # Detailed therapy modal with slideshow and WhatsApp booking
    │   ├── AppointmentModal.jsx # Global appointment booking form with WhatsApp generator
    │   ├── FloatingWhatsApp.jsx # Floating emerald concierge widget with pulse effect
    │   └── Icons.jsx            # Custom SVG icon definitions (InstagramIcon)
    ├── pages/
    │   ├── Home.jsx             # Home page with 2-column hero & directional slideshow
    │   ├── About.jsx            # About page with private suite photo & philosophy
    │   ├── Services.jsx         # Services catalogue page with 5 signature therapies
    │   └── Contact.jsx          # Contact page with verified map embed and WhatsApp form
    └── styles/
        ├── global.css           # Tailwind base, utilities, font families, and custom scrollbars
        └── animations.css       # Custom keyframe animations (hero zoom, light sweep, Ensō expand)
7. Execution & Build Commands
Development Server
bash

# Starts Vite development server on port 3031 with local network exposure
npm run dev
# Or direct command:
npx vite --port 3031 --host
Production Build & Packaging
bash

# Compiles optimized production bundle to the dist/ directory
npm run build
Build Verification Output:
dist/index.html ~ 4.15 kB
dist/assets/index.css ~ 54.8 kB (minified Tailwind bundle)
dist/assets/index.js ~ 476.6 kB (React 19 + Framer Motion 12 bundle)
Clean exit code 0 with zero compiler warnings or errors.
Local Preview
bash

# Previews production build locally
npm run preview
8. Summary of Recent Improvements & User Feedback Addressed
Swedish Massage Folder Integration: Corrected directory mapping to public/images/Swedish-Massage with 4 authentic photos.
5-Service Multi-Image Slideshows: Enabled multi-image slideshows across Thai, Aroma, Swedish, Balinese, and Deep Tissue therapies with individual photo galleries.
Collage Clean-Up: Removed generic SIGNATURE THERAPY 01/02/03/04 badges from the Home collage.
Hero Slideshow Redesign:
Transformed the hero into a full-width 2-column symmetrical layout.
Implemented a directional horizontal spring slide animation with swipe support.
Displayed massage name only in a frosted gold badge.
Removed excessive lateral margins so both columns fill the viewport evenly.
Aroma Massage Photo Correction: Updated slide 1 to public/images/Aroma-Massage/1.jpeg.
Verified Google Maps Pin: Centered map embed at 17.4872239, 78.5533777 and removed the custom overlay so Google's native card and Directions button are fully accessible.
Mobile Left Sidebar Navigation: Re-architected mobile menu into an off-canvas left sidebar drawer with a left-aligned hamburger toggle, glowing emblem, and active "HOME" pill with a gold vertical accent bar, keeping booking options strictly on the main header.
Dev Server Port In-Use Fix: Cleared orphaned process locks and set strictPort: false in vite.config.js to ensure the server starts seamlessly on port 3031.
