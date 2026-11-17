import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Flower2 } from 'lucide-react';
import { spaInfo, services } from '../data/spaData';
import ServiceSlideshow from '../components/ServiceSlideshow';

export default function Services({ onSelectService, onOpenBooking }) {
  const handleDirectWhatsApp = (serviceName) => {
    const text = encodeURIComponent(
      `Hello Mudra Wellness Spa! I would like to inquire about and book *${serviceName}* at your Sainikpuri centre.`
    );
    window.open(`https://wa.me/${spaInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden bg-forest-darker text-cream pt-24 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/services-hero.jpg"
            alt="Mudra Wellness Spa Services"
            className="w-full h-full object-cover object-center animate-hero-zoom scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-darker via-forest-darker/80 to-forest-darker/60" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream font-light tracking-tight leading-tight"
          >
            Signature <span className="italic font-normal text-gold">Massage Therapies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-sage-light font-light max-w-2xl mx-auto leading-relaxed"
          >
            Experience our 5 authentic therapeutic body massages: Thai Massage, Aroma Massage, Swedish Massage, Balinese Massage, and Deep Tissue Massage.
          </motion.p>
        </div>
      </section>

      {/* 2. AUTHENTIC MENU BADGE BAR */}
      <section className="bg-forest-subtle py-4 border-b border-gold/20 shadow-sm text-cream">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase">
          <div className="flex items-center space-x-2 text-gold">
            <Flower2 className="w-4 h-4" />
            <span className="font-semibold">Mudra Wellness Spa Menu</span>
          </div>
          <div className="text-sage-light font-light hidden sm:block">
            5 Exclusive Authentic Massage Therapies · Sainikpuri, Hyderabad
          </div>
          <button
            onClick={onOpenBooking}
            className="text-gold hover:text-cream font-medium tracking-widest flex items-center space-x-1"
          >
            <span>Reserve Session</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* 3. SERVICE GRID (5 Core Therapies) */}
      <section className="py-20 sm:py-28 bg-cream text-forest">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-luxury border border-forest/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Image Slideshow or Static Image */}
                  <ServiceSlideshow
                    images={service.images}
                    fallbackImage={service.image}
                    alt={service.name}
                    serviceName={service.name}
                    aspectRatioClass="h-64"
                  >
                    <div className="absolute top-4 right-4 pointer-events-none z-10">
                      <span className="w-8 h-8 rounded-full bg-gold/90 text-forest-darker text-xs font-bold flex items-center justify-center shadow-md">
                        0{idx + 1}
                      </span>
                    </div>
                  </ServiceSlideshow>

                  {/* Info */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-2xl text-forest group-hover:text-gold-dark transition-colors font-medium">
                      {service.name}
                    </h3>
                    <p className="text-xs text-forest-light/80 italic mt-1 font-sans">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-xs sm:text-sm text-forest/75 font-light leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Benefits preview snippet */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-cream-accent/60 space-y-1.5">
                        <p className="text-[11px] font-semibold tracking-wider uppercase text-forest/60">
                          Therapeutic Benefits:
                        </p>
                        <p className="text-xs text-forest/80 flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-light flex-shrink-0" />
                          <span className="truncate">{service.benefits[0]}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-cream-accent/60 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full sm:flex-1 py-2.5 px-3 rounded-xl border border-forest/30 text-forest hover:bg-forest hover:text-cream text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(service.name)}
                    className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-forest hover:bg-forest-dark text-gold hover:text-cream text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm text-center flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-gold" />
                    <span>Book on WA</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MUDRA WELLNESS ASSURANCE BANNER */}
      <section className="py-16 bg-forest-subtle text-cream border-t border-gold/20">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 text-gold mx-auto" />
              <h4 className="font-serif text-xl text-cream font-medium">Authentic & Certified</h4>
              <p className="text-xs text-sage-light/80 font-light max-w-xs mx-auto">
                No unverified claims or fake packages. Genuine therapies delivered by trained professionals.
              </p>
            </div>

            <div className="space-y-2">
              <Sparkles className="w-8 h-8 text-gold mx-auto" />
              <h4 className="font-serif text-xl text-cream font-medium">Tailored Consultations</h4>
              <p className="text-xs text-sage-light/80 font-light max-w-xs mx-auto">
                Discuss your pressure, aroma, and skincare needs directly with your therapist prior to session.
              </p>
            </div>

            <div className="space-y-2">
              <Calendar className="w-8 h-8 text-gold mx-auto" />
              <h4 className="font-serif text-xl text-cream font-medium">Easy Appointment Booking</h4>
              <p className="text-xs text-sage-light/80 font-light max-w-xs mx-auto">
                Instant confirmation over WhatsApp or quick call at +91 99084 17555.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 bg-cream text-forest text-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-forest font-light">
            Unsure Which Therapy Best Suits You?
          </h3>
          <p className="text-sm sm:text-base text-forest/75 font-light leading-relaxed">
            Connect with our wellness concierge in Sainikpuri. We will gladly guide you to the perfect massage or skincare treatment for your needs.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-forest text-cream text-xs uppercase tracking-wider font-semibold hover:bg-forest-dark transition-all shadow-md"
            >
              Request Custom Appointment
            </button>
            <a
              href={`https://wa.me/${spaInfo.whatsappNumber}?text=Hi%20Mudra%20Wellness,%20I%20need%20assistance%20choosing%20the%20best%20spa%20service%20for%20my%20needs.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-forest text-forest hover:bg-forest hover:text-cream text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Ask Our Specialists on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
