import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Flower2, 
  Compass, 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { spaInfo, whyChooseUs, services, galleryImages } from '../data/spaData';
import ServiceSlideshow from '../components/ServiceSlideshow';

const iconMap = {
  Sparkles: Sparkles,
  Award: Award,
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck
};

const heroSlides = [
  {
    id: "thai-massage",
    name: "Thai Massage",
    image: "/images/Thai-massage/1.jpeg"
  },
  {
    id: "aroma-massage",
    name: "Aroma Massage",
    image: "/images/Aroma-Massage/1.jpeg"
  },
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    image: "/images/Swedish-Massage/1.jpeg"
  },
  {
    id: "balinese-massage",
    name: "Balinese Massage",
    image: "/images/Balinese-Massage/1.jpg"
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    image: "/images/Deep-Tissue-Massage/2.jpg"
  }
];

const heroSlideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.3,
    scale: 1.06
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 220, damping: 26 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0.1,
    scale: 0.94,
    transition: {
      x: { type: 'spring', stiffness: 220, damping: 26 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.5, ease: 'easeIn' }
    }
  })
};

export default function Home({ onNavigate, onOpenBooking, onSelectService }) {
  const featuredServices = services.slice(0, 5);
  const previewGallery = galleryImages.slice(0, 6);

  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [heroSlideDirection, setHeroSlideDirection] = useState(1);
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  const paginateHero = (newDirection) => {
    setHeroSlideDirection(newDirection);
    setHeroSlideIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % heroSlides.length;
      }
      return (prev - 1 + heroSlides.length) % heroSlides.length;
    });
  };

  const jumpToHeroSlide = (idx) => {
    if (idx === heroSlideIndex) return;
    setHeroSlideDirection(idx > heroSlideIndex ? 1 : -1);
    setHeroSlideIndex(idx);
  };

  useEffect(() => {
    if (isHeroHovered) return;
    const timer = setInterval(() => {
      paginateHero(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHeroHovered, heroSlideIndex]);

  const handleHeroPrev = (e) => {
    e?.stopPropagation?.();
    paginateHero(-1);
  };

  const handleHeroNext = (e) => {
    e?.stopPropagation?.();
    paginateHero(1);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-darker text-cream pt-20">
        {/* Background Image with Slow Zoom & Parallax feel */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-bg.jpg"
            alt="Mudra Wellness Spa Luxury Spa Ambience"
            className="w-full h-full object-cover object-center animate-hero-zoom scale-105"
          />
          {/* Dark Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-darker via-forest-darker/70 to-forest-darker/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(10,28,22,0.85)_100%)]" />
        </div>

        {/* Hero Content: Full-Width 2-Column Responsive Layout without excessive side gaps */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            
            {/* Left Column: Heading, Subheading, CTAs, Quick Info */}
            <div className="w-full text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-cream font-light tracking-tight leading-[1.08] sm:leading-[1.05]"
              >
                Relax. Rejuvenate. <br />
                <span className="italic font-normal text-transparent bg-clip-text animate-light-sweep">
                  Rediscover Yourself.
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-cream/90 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed font-sans"
              >
                {spaInfo.subheading}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-2"
              >
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/50 bg-forest/40 hover:bg-forest text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-md hover:border-gold transition-all duration-300 hover:scale-[1.03]"
                >
                  Explore Our Services
                </button>

                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold text-forest-darker text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] shadow-luxury-gold hover:shadow-glow-gold transition-all duration-300 hover:scale-[1.03] flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Appointment</span>
                </button>
              </motion.div>

              {/* Quick Info Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="pt-6 border-t border-gold/20 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 text-xs sm:text-sm text-sage-light/80"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span>Open Daily: 10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Eshwaripuri Colony, Sainikpuri</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>Certified Wellness Practitioners</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Slideshow with Massage Name Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="w-full relative"
            >
              {/* Decorative luxury gold glow background */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold/30 via-forest-light/10 to-gold/20 blur-xl opacity-70 pointer-events-none -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-gold/30 pointer-events-none -z-0 hidden sm:block" />

              {/* Main Slideshow Frame */}
              <div
                className="relative h-[380px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] 2xl:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/50 bg-forest-darker group select-none"
                onMouseEnter={() => setIsHeroHovered(true)}
                onMouseLeave={() => setIsHeroHovered(false)}
              >
                {/* Active Slide Image with Directional Horizontal Spring Slide Animation */}
                <AnimatePresence custom={heroSlideDirection} initial={false}>
                  <motion.div
                    key={heroSlides[heroSlideIndex].id}
                    custom={heroSlideDirection}
                    variants={heroSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -40 || velocity.x < -200) {
                        paginateHero(1);
                      } else if (offset.x > 40 || velocity.x > 200) {
                        paginateHero(-1);
                      }
                    }}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    onClick={() => onSelectService(heroSlides[heroSlideIndex].id)}
                    title={`View ${heroSlides[heroSlideIndex].name} details`}
                  >
                    <img
                      src={heroSlides[heroSlideIndex].image}
                      alt={heroSlides[heroSlideIndex].name}
                      className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Dark Subtle Luxury Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/90 via-transparent to-forest-darker/40 pointer-events-none z-10" />

                {/* Massage Name Badge Only (Top-Left) with Smooth Slide Transition */}
                <div className="absolute top-5 left-5 z-20 pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={heroSlides[heroSlideIndex].name}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-forest-darker/90 backdrop-blur-md text-gold text-xs sm:text-sm font-semibold uppercase tracking-wider border border-gold/60 shadow-luxury"
                    >
                      {heroSlides[heroSlideIndex].name}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Navigation Chevrons */}
                <button
                  onClick={handleHeroPrev}
                  aria-label="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-forest-darker/80 hover:bg-gold text-cream hover:text-forest-darker flex items-center justify-center transition-all duration-300 opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-md border border-gold/40 hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleHeroNext}
                  aria-label="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-forest-darker/80 hover:bg-gold text-cream hover:text-forest-darker flex items-center justify-center transition-all duration-300 opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-md border border-gold/40 hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Navigation Dots Indicator (5 Signature Therapies) */}
                <div
                  className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center space-x-2 pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => jumpToHeroSlide(idx)}
                      aria-label={`Jump to ${slide.name}`}
                      className={`transition-all duration-300 rounded-full ${
                        heroSlideIndex === idx
                          ? 'w-7 h-2 bg-gold shadow-gold-sm'
                          : 'w-2 h-2 bg-cream/50 hover:bg-cream/90'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="py-24 sm:py-32 bg-cream text-forest relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column (Cols 1-6) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-luxury border-4 border-white">
                <img
                  src="/images/Thai-massage/2.jpg"
                  alt="Mudra Wellness Spa Peaceful Spa Sanctuary"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Inset Accent Box */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-forest text-cream p-6 sm:p-7 rounded-2xl shadow-2xl max-w-xs border border-gold/30 hidden sm:block">
                <div className="w-10 h-10 mb-3">
                  <img
                    src="/logo-gold.png"
                    alt="Emblem"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(197,164,109,0.5)]"
                  />
                </div>
                <h4 className="font-serif text-lg text-gold font-medium">
                  Peaceful Sanctuary
                </h4>
                <p className="text-xs text-sage-light mt-1 font-light leading-relaxed">
                  Every treatment tailored to refresh your mind, body, and spirit in complete tranquility.
                </p>
              </div>

              {/* Decorative outline */}
              <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-gold/30 pointer-events-none -z-0" />
            </motion.div>

            {/* Text Column (Cols 7-12) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 text-gold-dark text-xs font-semibold tracking-[0.25em] uppercase">
                <Flower2 className="w-4 h-4 text-gold" />
                <span>Sanctuary of Serenity</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight">
                Welcome to <span className="italic font-normal text-forest-light">Mudra Wellness Spa</span>
              </h2>

              <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-transparent" />

              <p className="text-base sm:text-lg text-forest/85 leading-relaxed font-light">
                Step into a peaceful sanctuary where relaxation meets rejuvenation. At Mudra Wellness Spa, we believe that self-care is essential to a balanced lifestyle. Experience a calming environment and personalized wellness services designed to help you relax, refresh, and feel your best.
              </p>

              <p className="text-sm sm:text-base text-forest/75 leading-relaxed font-light">
                Located in the heart of Sainikpuri, Hyderabad, our centre offers an escape from the city’s pace. From traditional herbal compresses to aromatic therapies and revitalizing skincare, our experienced therapists ensure each moment is devoted to your peace of mind.
              </p>

              <div className="pt-4 flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-forest hover:text-gold-dark group border-b-2 border-forest hover:border-gold-dark pb-1 transition-all"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-wider font-semibold hover:bg-forest-dark transition-colors shadow-sm"
                >
                  Reserve Visit
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-forest-subtle text-cream relative overflow-hidden">
        {/* Subtle patterned glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,184,154,0.08)_0%,_transparent_70%)] pointer-events-none" />

        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">
              The Mudra Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream font-light mt-3 leading-tight">
              Why Choose <span className="italic font-normal text-gold">Mudra Wellness Spa</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 mb-4" />
            <p className="text-sm sm:text-base text-sage-light/80 font-light leading-relaxed">
              We combine timeless wellness traditions with meticulous hospitality to create an unforgettable retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group relative bg-forest-dark/80 rounded-2xl p-8 border border-gold/20 hover:border-gold/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury-gold flex flex-col justify-between"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-forest-light/40 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-darker transition-all duration-300 mb-6 group-hover:scale-110">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-cream group-hover:text-gold transition-colors font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-sage-light/85 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-forest-light/40 flex items-center text-[11px] tracking-widest uppercase text-gold/70 group-hover:text-gold">
                    <span>Mudra Touch</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES */}
      <section className="py-24 sm:py-32 bg-cream text-forest relative">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
                Signature Curations
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-forest font-light mt-3 leading-tight">
                Featured <span className="italic font-normal text-forest-light">Wellness Therapies</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-forest hover:text-gold-dark group border-b border-forest hover:border-gold-dark pb-1 self-start md:self-auto transition-all"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-luxury border border-forest/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Slideshow or Static */}
                  <ServiceSlideshow
                    images={service.images}
                    fallbackImage={service.image}
                    alt={service.name}
                    serviceName={service.name}
                    aspectRatioClass="h-64 sm:h-72"
                  />

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl text-forest group-hover:text-gold-dark transition-colors font-medium">
                      {service.name}
                    </h3>
                    <p className="text-xs text-forest-light/80 italic mt-1 font-sans">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-xs sm:text-sm text-forest/75 font-light leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-cream-accent/60">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold tracking-wider uppercase text-forest hover:text-gold-dark transition-colors"
                  >
                    Explore More
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    className="px-4 py-2 rounded-full bg-forest hover:bg-forest-dark text-cream text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE SECTION */}
      <section className="py-24 sm:py-32 bg-forest-darker text-cream relative overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-forest/40 via-transparent to-transparent pointer-events-none" />

        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Information (Cols 1-6) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
                Atmosphere & Care
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl text-cream font-light leading-tight">
                Your Journey to <br />
                <span className="italic font-normal text-gold">Relaxation Begins Here</span>
              </h2>

              <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-transparent" />

              <p className="text-base sm:text-lg text-sage-light font-light leading-relaxed">
                From the moment you step through our doors in Sainikpuri, the noise of daily life fades into peaceful ambiance. Delicate aromas of lavender and lemongrass greet your senses, while soothing melodies prepare your spirit for stillness.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-cream text-sm">Quiet Private Therapy Suites</h4>
                    <p className="text-xs text-sage-light/75 font-light mt-0.5">
                      Individual temperature control, ambient lighting, and immaculate linens for total privacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-cream text-sm">Pure Botanical Formulations</h4>
                    <p className="text-xs text-sage-light/75 font-light mt-0.5">
                      Cold-pressed oils, authentic Ayurvedic potlis, and gentle skin-loving extracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-cream text-sm">Dedicated Attention & Discretion</h4>
                    <p className="text-xs text-sage-light/75 font-light mt-0.5">
                      Every session begins with a personalized consultation to understand your focus areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold text-forest-darker text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] shadow-luxury-gold hover:shadow-glow-gold transition-all duration-300 hover:scale-[1.02]"
                >
                  Experience Mudra Wellness Spa
                </button>
              </div>
            </motion.div>

            {/* Collage Showcase (Cols 7-12) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div
                  onClick={() => {
                    const matched = services.find((s) => s.id === 'thai-massage');
                    if (matched && onSelectService) onSelectService(matched);
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl h-56 sm:h-64 border border-gold/25 cursor-pointer"
                >
                  <img
                    src="/images/Thai-massage/1.jpeg"
                    alt="Thai Massage at Mudra Wellness Spa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/85 via-forest-darker/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-cream">
                    <p className="text-xs sm:text-sm font-serif font-medium text-cream tracking-wide">
                      Thai Massage
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => {
                    const matched = services.find((s) => s.id === 'aroma-massage');
                    if (matched && onSelectService) onSelectService(matched);
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl h-44 sm:h-52 border border-gold/25 cursor-pointer"
                >
                  <img
                    src="/images/Aroma-Massage/2.jpeg"
                    alt="Aroma Massage at Mudra Wellness Spa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/85 via-forest-darker/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-cream">
                    <p className="text-xs sm:text-sm font-serif font-medium text-cream tracking-wide">
                      Aroma Massage
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div
                  onClick={() => {
                    const matched = services.find((s) => s.id === 'swedish-massage');
                    if (matched && onSelectService) onSelectService(matched);
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl h-44 sm:h-52 border border-gold/25 cursor-pointer"
                >
                  <img
                    src="/images/Swedish-Massage/1.jpeg"
                    alt="Swedish Massage at Mudra Wellness Spa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/85 via-forest-darker/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-cream">
                    <p className="text-xs sm:text-sm font-serif font-medium text-cream tracking-wide">
                      Swedish Massage
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => {
                    const matched = services.find((s) => s.id === 'balinese-massage');
                    if (matched && onSelectService) onSelectService(matched);
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl h-56 sm:h-64 border border-gold/25 cursor-pointer"
                >
                  <img
                    src="/images/Balinese-Massage/1.jpg"
                    alt="Balinese Massage at Mudra Wellness Spa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/85 via-forest-darker/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-cream">
                    <p className="text-xs sm:text-sm font-serif font-medium text-cream tracking-wide">
                      Balinese Massage
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-24 sm:py-32 bg-cream text-forest">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
              Visual Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-forest font-light mt-3 leading-tight">
              A Glimpse Into <span className="italic font-normal text-forest-light">Mudra Wellness Spa</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 mb-4" />
            <p className="text-sm sm:text-base text-forest/75 font-light leading-relaxed">
              Authentic glimpses of our peaceful treatment suites, therapeutic botanicals, and calming ambiance.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {previewGallery.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  if (img.serviceId && onSelectService) {
                    const matched = services.find((s) => s.id === img.serviceId);
                    if (matched) {
                      onSelectService(matched);
                      return;
                    }
                  }
                  onNavigate('services');
                }}
                className="group relative h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gold/20"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/90 via-forest-darker/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-cream" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-lg text-cream font-medium">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full border border-forest text-forest hover:bg-forest hover:text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            >
              <span>Explore Full Service Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 bg-forest-darker text-cream relative overflow-hidden border-t border-gold/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services-hero.jpg"
            alt="Relaxation at Mudra Wellness Spa"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-forest-darker/85 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="w-16 h-16 mx-auto mb-2">
            <img
              src="/logo-gold.png"
              alt="Mudra Wellness Spa Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(197,164,109,0.7)]"
            />
          </div>

          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Your Sanctuary Awaits
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream font-light leading-tight">
            Take a Moment for Yourself
          </h2>

          <p className="text-base sm:text-lg text-sage-light/90 max-w-2xl mx-auto font-light leading-relaxed">
            Your relaxation deserves a special place. Visit Mudra Wellness Spa in Sainikpuri and experience the difference of attentive, restorative care.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold text-forest-darker text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] shadow-luxury-gold hover:shadow-glow-gold transition-all duration-300 hover:scale-[1.03]"
            >
              Book Your Appointment
            </button>

            <a
              href={`https://wa.me/${spaInfo.whatsappNumber}?text=Hi%20Mudra%20Wellness%20Spa,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold/10 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all"
            >
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
