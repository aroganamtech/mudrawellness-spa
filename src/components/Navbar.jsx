import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { spaInfo } from '../data/spaData';

export default function Navbar({ activeSection, onNavigate, onOpenBooking, onReplayIntro }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-xl'
            : 'bg-gradient-to-b from-forest-darker/80 via-forest-darker/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Hamburger Toggle + Brand Logo & Name */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Mobile Menu Button on the Left Side */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-1.5 -ml-1 text-cream hover:text-gold transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6 text-cream" />
              </button>

              <button
                onClick={() => handleLinkClick('home')}
                className="flex items-center space-x-2.5 sm:space-x-3 group text-left focus:outline-none"
              >
                <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/logo-gold.png"
                    alt="Mudra Wellness Spa Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(197,164,109,0.5)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm sm:text-2xl text-cream tracking-[0.16em] sm:tracking-[0.18em] uppercase font-light leading-tight group-hover:text-gold transition-colors">
                    MUDRA <span className="text-gold italic font-normal block sm:inline">WELLNESS SPA</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-sage-light/75 font-sans mt-0.5 sm:mt-1">
                    SAINIKPURI · HYDERABAD
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 nav-link-hover py-1 font-medium ${
                    activeSection === link.id
                      ? 'text-gold active'
                      : 'text-cream/90 hover:text-gold'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${spaInfo.phoneRaw}`}
                className="flex items-center space-x-2 text-xs tracking-wider text-sage-light hover:text-gold transition-colors py-2 px-3 rounded-full hover:bg-forest-light/30 border border-transparent hover:border-gold/30"
                title="Call Mudra Wellness Spa"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>+91 99084 17555</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold text-forest-darker text-xs font-semibold uppercase tracking-[0.15em] shadow-luxury-gold hover:shadow-glow-gold transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center space-x-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Header Right: Quick Book Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 rounded-full bg-gold hover:bg-gold-light text-forest-darker text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center space-x-1.5 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Left Sidebar Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Left Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[86%] max-w-[340px] bg-[#0d221c] border-r border-gold/30 shadow-2xl md:hidden transition-transform duration-300 ease-in-out flex flex-col justify-between py-5 px-5 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-5">
          {/* Top Bar inside Sidebar: Logo Brand on Left, Close X on Right */}
          <div className="flex items-center justify-between pb-3 border-b border-gold/20">
            <div className="flex items-center space-x-2.5 text-left">
              <div className="w-8 h-8 flex-shrink-0">
                <img
                  src="/logo-gold.png"
                  alt="Mudra Wellness Spa"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(197,164,109,0.5)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xs text-cream tracking-[0.16em] uppercase font-light leading-tight">
                  MUDRA <span className="text-gold italic font-normal">SPA</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] uppercase text-sage-light/75 font-sans mt-0.5">
                  SAINIKPURI
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-cream hover:text-gold transition-colors focus:outline-none rounded-lg hover:bg-forest-light/20"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6 text-cream" />
            </button>
          </div>

          {/* Centered Glowing Logo & Brand Emblem */}
          <div className="text-center pt-2">
            <div className="relative w-16 h-16 mx-auto mb-2">
              <div className="absolute inset-0 rounded-full bg-gold/25 blur-xl pointer-events-none" />
              <img
                src="/logo-gold.png"
                alt="Mudra Wellness Spa"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(197,164,109,0.65)]"
              />
            </div>
            <h2 className="font-serif text-xl tracking-[0.22em] text-cream uppercase font-light">
              MUDRA <span className="text-gold italic font-normal">WELLNESS SPA</span>
            </h2>
            <p className="text-[10px] tracking-[0.28em] text-sage-light uppercase mt-1 font-sans">
              SAINIKPURI · HYDERABAD
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 w-full pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left font-serif tracking-[0.22em] uppercase text-sm sm:text-base transition-all duration-300 py-3.5 px-5 rounded-2xl flex items-center ${
                    isActive
                      ? 'bg-[#122e26] text-gold border border-gold/30 border-l-[3px] border-l-gold shadow-lg font-medium'
                      : 'text-cream/90 hover:text-gold hover:bg-forest/20'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer info in sidebar */}
        <div className="text-center text-xs text-sage-light/60 tracking-wider pt-6 border-t border-gold/15">
          <p>10:00 AM – 9:00 PM · Open 7 Days</p>
          <p className="mt-1">Eshwaripuri Colony, Sainikpuri</p>
        </div>
      </aside>
    </>
  );
}
