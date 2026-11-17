import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { spaInfo, services } from '../data/spaData';

export default function Footer({ onNavigate, onOpenBooking, onSelectService, onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredServiceLinks = services.slice(0, 6);

  return (
    <footer className="relative bg-forest-darker text-cream overflow-hidden border-t border-gold/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-forest/30 via-transparent to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative w-full px-4 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src="/logo-gold.png"
                  alt="Mudra Wellness Spa Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(197,164,109,0.5)]"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-[0.2em] text-cream uppercase font-light">
                  Mudra <span className="text-gold italic font-normal">Wellness Spa</span>
                </h3>
                <p className="text-[11px] tracking-[0.25em] uppercase text-sage-light font-sans mt-0.5">
                  Spa & Wellness Centre · Sainikpuri
                </p>
              </div>
            </div>

            <p className="text-sage-light/80 text-sm leading-relaxed pr-4 font-light">
              A peaceful sanctuary nestled in Sainikpuri, Hyderabad, where relaxation meets rejuvenating care. Discover therapeutic massages, luminous skincare, and tailored salon wellness designed to renew your vitality.
            </p>

            {/* Social & Contact Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={spaInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest border border-gold/30 flex items-center justify-center text-gold hover:text-white hover:bg-gold hover:border-gold transition-all duration-300 group shadow-sm"
                title="Follow Mudra Wellness Spa on Instagram"
              >
                <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${spaInfo.whatsappNumber}?text=Hi%20Mudra%20Wellness%20Spa,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest border border-gold/30 flex items-center justify-center text-gold hover:text-white hover:bg-emerald-700 hover:border-emerald-600 transition-all duration-300 group shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`tel:${spaInfo.phoneRaw}`}
                className="w-10 h-10 rounded-full bg-forest border border-gold/30 flex items-center justify-center text-gold hover:text-white hover:bg-gold hover:border-gold transition-all duration-300 group shadow-sm"
                title="Call Directly"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sage-light hover:text-gold transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sage-light hover:text-gold transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  About Our Brand
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sage-light hover:text-gold transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Services Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sage-light hover:text-gold transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-gold font-medium hover:text-cream transition-colors flex items-center space-x-1.5 pt-1"
                >
                  <span>Book Appointment</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Therapies (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-2">
              Featured Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              {featuredServiceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      if (onSelectService) onSelectService(service);
                    }}
                    className="text-sage-light hover:text-gold transition-colors hover:translate-x-1 inline-block duration-200 text-left line-clamp-1"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg tracking-[0.15em] text-gold uppercase border-b border-gold/20 pb-2">
              Visit Sanctuary
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-sage-light">
              <div
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contact');
                  }
                  setTimeout(() => {
                    const mapEl = document.getElementById('map');
                    if (mapEl) {
                      mapEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 150);
                }}
                className="flex items-start space-x-3 cursor-pointer group"
                title="Click to view location map"
              >
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed group-hover:text-gold transition-colors">
                  PNO 164-C, Eshwaripuri Colony, Sainikpuri, Kapra, A.S. Rao Nagar, Hyderabad 500094
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${spaInfo.phoneRaw}`}
                  className="hover:text-gold transition-colors text-cream font-medium"
                >
                  +91 99084 17555
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${spaInfo.email}`}
                  className="hover:text-gold transition-colors break-all"
                >
                  {spaInfo.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>10:00 AM – 9:00 PM<br /><span className="text-[11px] text-sage-light/70 font-light">Open Monday through Sunday</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-forest-light/40 flex flex-col sm:flex-row items-center justify-between text-xs text-sage-light/60 space-y-4 sm:space-y-0">
          <p className="text-center sm:text-left">
            © 2026 Mudra Wellness Spa. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span>Sainikpuri, Hyderabad, Telangana</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-forest border border-gold/20 text-gold hover:bg-gold hover:text-forest-darker transition-all duration-300"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
