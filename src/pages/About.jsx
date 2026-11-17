import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Leaf, 
  Flower2, 
  CheckCircle, 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  Award 
} from 'lucide-react';
import { spaInfo, valuesList } from '../data/spaData';

export default function About({ onNavigate, onOpenBooking }) {
  return (
    <div className="w-full">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-forest-darker text-cream pt-24 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/Thai-massage/3.jpg"
            alt="About Mudra Wellness Spa"
            className="w-full h-full object-cover object-center animate-hero-zoom scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-darker via-forest-darker/75 to-forest-darker/60" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream font-light tracking-tight leading-tight"
          >
            About <span className="italic font-normal text-gold">Mudra Wellness Spa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl text-sage-light font-light tracking-wide font-serif italic"
          >
            Where Wellness Meets Relaxation.
          </motion.p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-24 bg-cream text-forest relative">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-white">
                <img
                  src="/images/Deep-Tissue-Massage/2.jpg"
                  alt="Therapist providing care at Mudra Wellness Spa"
                  className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-forest-darker text-cream p-5 sm:p-6 rounded-2xl shadow-2xl border border-gold/30 hidden sm:block max-w-xs">
                <p className="text-gold font-serif text-2xl font-light">Sainikpuri Sanctuary</p>
                <p className="text-xs text-sage-light/80 mt-1 font-light">
                  Dedicated to mindful rejuvenation and unhurried self-care.
                </p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
                Our Genesis & Vision
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight">
                Crafting a Sacred Space for <br />
                <span className="italic font-normal text-forest-light">Self-Care & Balance</span>
              </h2>

              <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-transparent" />

              <p className="text-base sm:text-lg text-forest/85 leading-relaxed font-light">
                Mudra Wellness Spa was created with a clear purpose: to bring a truly refined, serene, and holistic wellness experience to the community of Sainikpuri, Kapra, and A.S. Rao Nagar in Hyderabad.
              </p>

              <p className="text-sm sm:text-base text-forest/75 leading-relaxed font-light">
                In an increasingly fast-paced world, finding time to pause and reconnect with one’s own physical and mental well-being has never been more vital. We set out to build an unhurried sanctuary—where our guests are not rushed, where every sensory detail from aroma to acoustic tranquility is tailored for comfort, and where skilled therapists treat wellness as an art form.
              </p>

              <p className="text-sm sm:text-base text-forest/75 leading-relaxed font-light">
                Whether you seek profound tension release through our Deep Tissue or Thai therapies, a radiant boost through our signature facials, or professional grooming, Mudra Wellness Spa stands as your sanctuary of renewal.
              </p>

              <div className="pt-2 flex items-center space-x-6 text-xs sm:text-sm text-forest-light font-medium">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold-dark" />
                  <span>Sainikpuri, Hyderabad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gold-dark" />
                  <span>10:00 AM – 9:00 PM Daily</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY SECTION */}
      <section className="py-24 bg-forest-subtle text-cream relative overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6">
            <img
              src="/logo-gold.png"
              alt="Mudra Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(197,164,109,0.6)]"
            />
          </div>

          <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
            The Mudra Creed
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream font-light mt-3 leading-tight">
            "Wellness Is More Than Just Relaxation"
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 mb-8" />

          <p className="text-base sm:text-xl text-sage-light/90 max-w-3xl mx-auto leading-relaxed font-light font-sans">
            Our philosophy is centered on creating a comfortable and peaceful environment where every guest can take time for themselves. We focus on personalized care, quality services, and a welcoming atmosphere.
          </p>

          <p className="text-sm sm:text-base text-sage-light/75 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            True wellness is the harmonious alignment of physical vitality, sensory calm, and inner stillness. Every therapy we offer is designed to nurture all three dimensions.
          </p>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-24 sm:py-32 bg-cream text-forest">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-forest font-light mt-3 leading-tight">
              Our Core <span className="italic font-normal text-forest-light">Values</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 mb-4" />
            <p className="text-sm sm:text-base text-forest/75 font-light leading-relaxed">
              Every appointment is guided by our steadfast commitment to guest comfort, clinical hygiene, and therapeutic mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesList.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-luxury border border-forest/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-forest-subtle text-forest flex items-center justify-center mb-6 font-serif text-xl font-bold border border-gold/30">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-forest font-medium">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-forest/75 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-accent flex items-center text-[11px] tracking-widest uppercase text-gold-dark">
                  <span>Mudra Standard</span>
                </div>
              </motion.div>
            ))}

            {/* Bonus Box: Sainikpuri Locality Care */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-forest text-cream rounded-2xl p-8 shadow-luxury border border-gold/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-light text-gold flex items-center justify-center mb-6 border border-gold/40">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-cream font-medium">
                  Local Dedication
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-sage-light font-light leading-relaxed">
                  Proudly serving our Sainikpuri, Kapra, and A.S. Rao Nagar neighbors with warm local hospitality and dependable wellness excellence.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest-light flex items-center text-[11px] tracking-widest uppercase text-gold">
                <span>Hyderabad, Telangana</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. OUR ENVIRONMENT SECTION */}
      <section className="py-24 bg-forest-darker text-cream relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">
              The Healing Ambience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream font-light mt-3 leading-tight">
              Our <span className="italic font-normal text-gold">Spa Environment</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 mb-4" />
            <p className="text-sm sm:text-base text-sage-light/85 font-light leading-relaxed">
              Step into an intimate sanctuary built for sensory calm. Each treatment room is an oasis of silence, soothing mood lighting, and temperature-controlled comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-72 border border-gold/20">
                <img
                  src="/images/branding/Screenshot 2026-11-16 173934.png"
                  alt="Private Therapy Room at Mudra Wellness Spa"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
              </div>
              <h4 className="font-serif text-xl text-cream">Private Treatment Rooms</h4>
              <p className="text-xs text-sage-light/75 font-light leading-relaxed">
                Acoustically insulated suites designed for complete privacy and undistracted rest.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-72 border border-gold/20">
                <img
                  src="/images/Swedish-Massage/1.jpeg"
                  alt="Pristine Linens and Warm Lighting"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
              </div>
              <h4 className="font-serif text-xl text-cream">Immaculate Linen & Hygiene</h4>
              <p className="text-xs text-sage-light/75 font-light leading-relaxed">
                Hospital-grade sterilization, single-use disposables, and ultra-plush fresh linens.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-72 border border-gold/20">
                <img
                  src="/images/Aroma-Massage/4.jpg"
                  alt="Aromatic Diffusers and Candlelight"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
              </div>
              <h4 className="font-serif text-xl text-cream">Aromatic Sensory Immersion</h4>
              <p className="text-xs text-sage-light/75 font-light leading-relaxed">
                Subtle vapor diffusers with eucalyptus, sweet orange, and pure French lavender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING SECTION */}
      <section className="py-24 bg-cream text-forest text-center relative border-t border-gold/20">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
            Begin Your Wellness Ritual
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Discover the Art of Relaxation with <br />
            <span className="italic font-normal text-forest-light">Mudra Wellness Spa</span>
          </h2>

          <p className="text-base sm:text-lg text-forest/75 max-w-2xl mx-auto font-light leading-relaxed">
            Allow our dedicated team in Sainikpuri to welcome you into an experience of deep rest, gentle beauty, and refreshed vitality.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] hover:bg-forest-dark transition-all duration-300 shadow-luxury hover:scale-[1.02]"
            >
              Book an Appointment
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-forest text-forest hover:bg-forest hover:text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all"
            >
              View Available Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
