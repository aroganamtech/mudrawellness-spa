export const spaInfo = {
  name: "Mudra Wellness Spa",
  tagline: "Relax. Rejuvenate. Rediscover Yourself.",
  subheading: "Experience the perfect harmony of relaxation, beauty, and wellness at Mudra Wellness Spa.",
  locationArea: "Sainikpuri, Hyderabad",
  address: "PNO 164-C, Eshwaripuri Colony, Sainikpuri, Kapra, A.S. Rao Nagar, Hyderabad, Telangana 500094",
  phone: "+91 99084 17555",
  phoneRaw: "9908417555",
  whatsappNumber: "919908417555",
  email: "mudrawellness2025@gmail.com",
  timings: "10:00 AM – 9:00 PM (Open 7 Days a Week)",
  instagram: "https://www.instagram.com/mudra_wellness_sainikpuri/",
  mapEmbedUrl: "https://maps.google.com/maps?q=17.4872239,78.5533777+(Mudra+Wellness)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  directionsUrl: "https://www.google.com/maps/place/Mudra+Wellness/@17.4872239,78.5533777,17z/data=!4m6!3m5!1s0x3bcb9b40a736998f:0x64e9a85af1c1faf6!8m2!3d17.4872239!4d78.5533777!16s%2Fg%2F11yq_7_mfm"
};

export const whyChooseUs = [
  {
    id: 1,
    title: "Relaxing Ambience",
    description: "Immerse yourself in a serene sanctuary designed with soothing aromatics, calming lighting, and peaceful soundscapes.",
    icon: "Sparkles"
  },
  {
    id: 2,
    title: "Professional Care",
    description: "Highly trained therapists and grooming specialists dedicated to delivering attentive, master-level wellness treatments.",
    icon: "Award"
  },
  {
    id: 3,
    title: "Personalized Experience",
    description: "Every body and skin type is unique. We tailor our therapies and pressure levels precisely to your relaxation goals.",
    icon: "HeartHandshake"
  },
  {
    id: 4,
    title: "Quality Wellness Services",
    description: "Premium grade botanical oils, pure herbal formulations, and uncompromised hygiene protocols across all treatments.",
    icon: "ShieldCheck"
  }
];

export const serviceCategories = [
  { id: "all", label: "All 5 Signature Therapies" }
];

export const services = [
  {
    id: "thai-massage",
    category: "spa",
    name: "Thai Massage",
    tagline: "Traditional Acupressure & Passive Yoga Stretches",
    shortDescription: "Ancient restorative therapy combining deep rhythmic pressure, energy line (Sen) stimulation, and passive yoga stretching.",
    fullDescription: "Rooted in centuries-old Eastern wellness traditions, Thai Massage uses rhythmic rocking, acupressure on vital energy pathways, and assisted yoga-like stretches. Performed without oils or with soothing herbal balms, this therapy releases deep joint stiffness, improves physical mobility, and balances internal energy flow.",
    benefits: [
      "Increases full-body flexibility and joint range of motion",
      "Relieves deep back, hip, and shoulder stiffness",
      "Stimulates natural energy meridians and circulation",
      "Calms the nervous system and alleviates mental fatigue"
    ],
    image: "/images/Thai-massage/1.jpeg",
    images: [
      "/images/Thai-massage/1.jpeg",
      "/images/Thai-massage/2.jpg",
      "/images/Thai-massage/3.jpg",
      "/images/Thai-massage/4.jpg",
      "/images/Thai-massage/5.jpg"
    ]
  },
  {
    id: "aroma-massage",
    category: "spa",
    name: "Aroma Massage",
    tagline: "Sensory Serenity & Therapeutic Essential Plant Oils",
    shortDescription: "A gentle, restorative full-body massage combining rhythmic soothing touch with customized pure essential oils.",
    fullDescription: "A deeply relaxing sensory journey using precious botanical oils chosen to harmonize your body and spirit. Lavender, eucalyptus, and citrus extracts penetrate the skin while soothing aromatic vapors calm the nervous system, reduce tension, and induce profound mental peace.",
    benefits: [
      "Alleviates anxiety, chronic stress, and emotional strain",
      "Promotes deep, restorative and uninterrupted sleep",
      "Hydrates and nourishes delicate skin with plant extracts",
      "Harmonizes natural mood and inner vitality"
    ],
    image: "/images/Aroma-Massage/1.jpeg",
    images: [
      "/images/Aroma-Massage/1.jpeg",
      "/images/Aroma-Massage/2.jpeg",
      "/images/Aroma-Massage/3.avif",
      "/images/Aroma-Massage/4.jpg"
    ]
  },
  {
    id: "swedish-massage",
    category: "spa",
    name: "Swedish Massage",
    tagline: "Classic Full-Body Gentle Rejuvenation",
    shortDescription: "The timeless gold standard of therapeutic relaxation using long, flowing strokes, kneading, and circular motions.",
    fullDescription: "A timeless full-body therapy that gently warms muscle tissues, releases surface tensions, and promotes total harmony throughout body and mind using therapeutic body oils.",
    benefits: [
      "Stimulates blood circulation and oxygen flow",
      "Relieves everyday stress and physical stiffness",
      "Promotes complete muscular and mental relaxation",
      "Flushes out metabolic impurities naturally"
    ],
    image: "/images/Swedish-Massage/1.jpeg",
    images: [
      "/images/Swedish-Massage/1.jpeg",
      "/images/Swedish-Massage/2.jpeg",
      "/images/Swedish-Massage/3.jpeg",
      "/images/Swedish-Massage/4.webp"
    ]
  },
  {
    id: "balinese-massage",
    category: "spa",
    name: "Balinese Massage",
    tagline: "Exotic Indonesian Acupressure & Aromatherapy Ritual",
    shortDescription: "A traditional holistic therapy combining gentle stretching, acupressure, palm kneading, and warm aromatic oils.",
    fullDescription: "Hailing from the lush island of Bali, this comprehensive ritual combines gentle stretches, acupressure point stimulation, long soothing strokes, and rhythmic palm pressing. Infused with warm botanical oils, it melts away deep-seated tensions, awakens sluggish energy, and brings holistic tranquility.",
    benefits: [
      "Relieves tight connective tissues and muscular tension",
      "Stimulates lymphatic drainage and blood flow",
      "Re-energizes fatigued body meridians",
      "Provides an exotic, deeply calming sensory retreat"
    ],
    image: "/images/Balinese-Massage/1.jpg",
    images: [
      "/images/Balinese-Massage/1.jpg",
      "/images/Balinese-Massage/2.avif",
      "/images/Balinese-Massage/3.webp",
      "/images/Balinese-Massage/4.jpeg"
    ]
  },
  {
    id: "deep-tissue",
    category: "spa",
    name: "Deep Tissue Massage",
    tagline: "Therapeutic Muscle Relief & Stress Release",
    shortDescription: "Targeted firm therapy designed to release chronic tension in deeper layers of muscle tissue and fascia.",
    fullDescription: "Our Deep Tissue Massage uses slow, deliberate strokes and deep finger pressure to alleviate chronic muscle aches, realign deeper muscle layers, and relieve tension in the neck, lower back, and shoulders.",
    benefits: [
      "Relieves chronic muscle tightness and persistent knots",
      "Increases joint mobility and physical flexibility",
      "Promotes faster recovery from muscular fatigue",
      "Lowers stress hormones while boosting circulation"
    ],
    image: "/images/Deep-Tissue-Massage/1.avif",
    images: [
      "/images/Deep-Tissue-Massage/1.avif",
      "/images/Deep-Tissue-Massage/2.jpg",
      "/images/Deep-Tissue-Massage/3.jpeg",
      "/images/Deep-Tissue-Massage/4.jpg"
    ]
  }
];

export const valuesList = [
  {
    title: "Customer Comfort",
    description: "Every detail—from ambient music to plush linens—is curated to make you feel instantly at ease and deeply cared for."
  },
  {
    title: "Professional Service",
    description: "Our certified practitioners bring deep expertise, respect, and dedicated craftsmanship to every single therapy."
  },
  {
    title: "Quality Care",
    description: "We use only premium, body-friendly botanical oils, therapeutic grade herbal extracts, and dermatologically vetted products."
  },
  {
    title: "Cleanliness & Hygiene",
    description: "We maintain immaculate standards of cleanliness, fresh sterilized linens, and sanitized private therapy rooms."
  },
  {
    title: "Personalized Attention",
    description: "We listen to your individual needs, preferences, and body cues to craft an experience unique to your wellness goals."
  }
];

export const galleryImages = [
  {
    id: 1,
    title: "Thai Massage Sanctuary",
    category: "Traditional Acupressure",
    serviceId: "thai-massage",
    src: "/images/Thai-massage/1.jpeg"
  },
  {
    id: 2,
    title: "Aroma Massage Therapy",
    category: "Sensory Essential Oils",
    serviceId: "aroma-massage",
    src: "/images/Aroma-Massage/1.jpeg"
  },
  {
    id: 3,
    title: "Swedish Classic Rejuvenation",
    category: "Therapeutic Effleurage",
    serviceId: "swedish-massage",
    src: "/images/Swedish-Massage/1.jpeg"
  },
  {
    id: 4,
    title: "Balinese Holistic Ritual",
    category: "Aromatic Palm Kneading",
    serviceId: "balinese-massage",
    src: "/images/Balinese-Massage/1.jpg"
  },
  {
    id: 5,
    title: "Deep Tissue Muscle Recovery",
    category: "Targeted Fascia Relief",
    serviceId: "deep-tissue",
    src: "/images/Deep-Tissue-Massage/2.jpg"
  },
  {
    id: 6,
    title: "Thai Passive Yoga Stretches",
    category: "Authentic Thai Technique",
    serviceId: "thai-massage",
    src: "/images/Thai-massage/3.jpg"
  }
];
