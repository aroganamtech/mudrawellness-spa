import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { spaInfo } from '../data/spaData';
import ServiceSlideshow from './ServiceSlideshow';

export default function ServiceDetailModal({ service, onClose, onBookService }) {
  if (!service) return null;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Mudra Wellness Spa! I would like to book an appointment for *${service.name}* at your Sainikpuri centre. Please let me know available slots.`
    );
    window.open(`https://wa.me/${spaInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-darker/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-cream-light rounded-2xl shadow-2xl overflow-hidden border border-gold/30 z-10 my-8 text-forest"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-forest-darker/80 text-cream hover:text-gold hover:bg-forest-darker transition-colors focus:outline-none shadow-md border border-gold/30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image Slideshow or Static */}
          <div className="relative">
            <ServiceSlideshow
              images={service.images}
              fallbackImage={service.image}
              alt={service.name}
              serviceName={service.name}
              showBadge={false}
              aspectRatioClass="h-64 sm:h-76"
            >
              <div className="absolute bottom-5 left-6 right-6 z-10 pointer-events-none">
                <span className="inline-block px-3 py-1 rounded-full bg-gold/90 text-forest-darker text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 shadow-sm">
                  Official Signature Therapy
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-cream font-medium tracking-wide drop-shadow-sm">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-cream/85 italic mt-1 font-sans drop-shadow-sm">
                  {service.tagline}
                </p>
              </div>
            </ServiceSlideshow>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark mb-2">
                Therapy Overview
              </h4>
              <p className="text-sm sm:text-base text-forest/85 leading-relaxed font-light">
                {service.fullDescription || service.shortDescription}
              </p>
            </div>

            {/* Key Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-sage-subtle/60 rounded-xl p-5 border border-sage/20">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Key Therapeutic Benefits</span>
                </h4>
                <ul className="space-y-2.5">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-forest/90">
                      <CheckCircle className="w-4 h-4 text-forest-light flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mudra Wellness Spa Assurance */}
            <div className="text-xs text-forest/70 border-t border-cream-accent pt-4 flex items-center justify-between">
              <span>Location: Eshwaripuri Colony, Sainikpuri</span>
              <span>Daily: 10:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Modal Footer / Actions */}
          <div className="p-6 bg-cream border-t border-gold/15 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleWhatsAppBooking}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-forest hover:bg-forest-dark text-cream text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>Book via WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold text-forest-darker text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-luxury-gold hover:scale-[1.01]"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
