import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Calendar, 
  Navigation, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { spaInfo, services } from '../data/spaData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0]?.name || 'Deep Tissue Massage',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    // Prepare WhatsApp Message
    const text = 
`*Mudra Wellness Spa Contact Form Inquiry*
------------------------------------
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
${formData.email ? `✉️ *Email:* ${formData.email}\n` : ''}🌸 *Service Inquiry:* ${formData.service}
📅 *Preferred Date:* ${formData.date || 'Earliest available'}
${formData.message ? `💬 *Message:* ${formData.message}\n` : ''}📍 *Branch:* Sainikpuri, Hyderabad
------------------------------------
Looking forward to your response.`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${spaInfo.whatsappNumber}?text=${encoded}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  const faqs = [
    {
      q: "Do I need to make an appointment in advance?",
      a: "While walk-ins are warmly welcomed, we highly recommend booking in advance—especially on weekends—to ensure your preferred private therapy suite and therapist are ready for you."
    },
    {
      q: "What should I wear or bring to my spa appointment?",
      a: "No special preparation is required. We provide fresh, sterilized disposable robes, slippers, and towels. Simply arrive comfortably."
    },
    {
      q: "Where is Mudra Wellness Spa located and is parking available?",
      a: "We are conveniently located at PNO 164-C, Eshwaripuri Colony, Sainikpuri (adjacent to Kapra and A.S. Rao Nagar). Convenient street parking and visitor spaces are readily accessible."
    },
    {
      q: "What are your operating hours?",
      a: "We are open 7 days a week, from 10:00 AM to 9:00 PM, allowing flexible morning and post-work relaxation slots."
    }
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-forest-darker text-cream pt-24 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact Mudra Wellness Spa Reception"
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
            Get in <span className="italic font-normal text-gold">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl text-sage-light font-light max-w-2xl mx-auto leading-relaxed"
          >
            We're here to help you begin your wellness journey.
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION: INFO + FORM */}
      <section className="py-24 bg-cream text-forest">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Verified Business Details (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
                  Visit Our Centre
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light mt-2">
                  Mudra <span className="italic font-normal text-forest-light">Wellness Sanctuary</span>
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mt-3 mb-6" />
                <p className="text-sm sm:text-base text-forest/75 font-light leading-relaxed">
                  Located in peaceful Eshwaripuri Colony in Sainikpuri, our centre offers an intimate sanctuary from the daily buzz. Drop by or connect via phone or WhatsApp.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div
                  onClick={() => {
                    const mapEl = document.getElementById('map');
                    if (mapEl) {
                      mapEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-white shadow-sm border border-forest/10 hover:border-gold/40 transition-colors cursor-pointer group"
                  title="Click to view on map"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-subtle text-forest flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-5 h-5 text-gold-dark group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">
                      Our Location
                    </h4>
                    <p className="text-sm text-forest font-medium mt-1 leading-relaxed group-hover:text-gold-dark transition-colors">
                      PNO 164-C, Eshwaripuri Colony, Sainikpuri, Kapra, A.S. Rao Nagar, Hyderabad, Telangana 500094
                    </p>
                    <a
                      href={spaInfo.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-1 text-xs text-gold-dark hover:text-forest font-semibold mt-2 group/link"
                    >
                      <Navigation className="w-3 h-3 group-hover/link:rotate-45 transition-transform" />
                      <span>Get Driving Directions</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white shadow-sm border border-forest/10 hover:border-gold/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-forest-subtle text-forest flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">
                      Phone Reservation
                    </h4>
                    <a
                      href={`tel:${spaInfo.phoneRaw}`}
                      className="text-base text-forest hover:text-gold-dark font-medium mt-1 block transition-colors"
                    >
                      +91 99084 17555
                    </a>
                    <p className="text-xs text-forest/60 mt-0.5">
                      Call our concierge for direct bookings
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white shadow-sm border border-forest/10 hover:border-gold/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-forest-subtle text-forest flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${spaInfo.email}`}
                      className="text-sm text-forest hover:text-gold-dark font-medium mt-1 block transition-colors break-all"
                    >
                      {spaInfo.email}
                    </a>
                    <p className="text-xs text-forest/60 mt-0.5">
                      Quick responses for general questions
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white shadow-sm border border-forest/10 hover:border-gold/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-forest-subtle text-forest flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">
                      Sanctuary Hours
                    </h4>
                    <p className="text-sm text-forest font-medium mt-1">
                      10:00 AM – 9:00 PM
                    </p>
                    <p className="text-xs text-forest/60 mt-0.5">
                      Open 7 Days a Week (Monday – Sunday)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center space-x-4">
                <a
                  href={spaInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white border border-forest/10 text-forest hover:border-gold/40 hover:text-gold-dark flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>

                <a
                  href={`https://wa.me/${spaInfo.whatsappNumber}?text=Hi%20Mudra%20Wellness,%20I'd%20like%20to%20connect.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-forest text-cream hover:bg-forest-dark flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Functional Frontend Contact Form (Cols 6-12) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-luxury border border-forest/10 relative">
                <div className="mb-8">
                  <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
                    Direct Inquiry
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest font-light mt-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-forest/70 mt-1 font-light">
                    Fill out the form below. Your appointment details will be dispatched immediately.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-forest/10 border-2 border-forest rounded-full flex items-center justify-center mx-auto text-forest">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-forest">
                      Thank You for Reaching Out!
                    </h4>
                    <p className="text-sm text-forest/80 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been formulated and sent. Our reception at Mudra Wellness Spa Sainikpuri will review and reach back out to you promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: services[0]?.name || 'Deep Tissue Massage',
                          date: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-wider font-semibold hover:bg-forest-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 text-sm bg-cream/40 border border-forest/15 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 99084 17555"
                          className="w-full px-4 py-3 text-sm bg-cream/40 border border-forest/15 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 text-sm bg-cream/40 border border-forest/15 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-cream/40 border border-forest/15 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                        Select Therapy / Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-cream/40 border border-forest/15 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                        Your Message or Preferred Time
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us any specifics, allergies, preferred slot, or questions..."
                        className="w-full px-4 py-3 text-sm bg-cream/40 border border-forest/15 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-forest hover:bg-forest-dark text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-luxury flex items-center justify-center space-x-2 group hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                      <span>Submit Inquiry to Mudra Wellness Spa</span>
                    </button>
                    <p className="text-[11px] text-center text-forest/60 mt-1">
                      Instantly connected via WhatsApp & Concierge System
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBED */}
      <section id="map" className="relative w-full h-[450px] sm:h-[500px] bg-forest-dark border-y border-gold/20 overflow-hidden">
        <iframe
          title="Mudra Wellness Spa Location Google Maps"
          src={spaInfo.mapEmbedUrl}
          className="w-full h-full border-0 filter saturate-90 contrast-105"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-cream text-forest">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-gold-dark text-xs tracking-[0.25em] uppercase font-semibold">
              Guest Inquiries
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-forest font-light mt-2">
              Frequently Asked Questions
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-forest/10 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl text-forest font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-dark transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 text-xs sm:text-sm text-forest/75 leading-relaxed font-light border-t border-cream-accent">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
