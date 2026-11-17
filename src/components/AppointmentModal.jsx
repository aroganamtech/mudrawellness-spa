import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { spaInfo, services } from '../data/spaData';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: initialService.id || initialService.name
      }));
    } else if (services.length > 0 && !formData.serviceId) {
      setFormData((prev) => ({
        ...prev,
        serviceId: services[0].id
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    const selectedServiceObj = services.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.name : formData.serviceId || 'Spa Session';

    // Format WhatsApp Message
    const appointmentText = 
`*New Appointment Request - Mudra Wellness Spa*
---------------------------------------
👤 *Guest Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
${formData.email ? `✉️ *Email:* ${formData.email}\n` : ''}🌸 *Service:* ${serviceName}
📅 *Preferred Date:* ${formData.date || 'Earliest Available'}
⏰ *Preferred Time:* ${formData.timeSlot}
${formData.notes ? `📝 *Notes:* ${formData.notes}\n` : ''}📍 *Location:* Mudra Wellness Spa, Sainikpuri, Hyderabad
---------------------------------------
Please confirm the appointment slot.`;

    const encodedMsg = encodeURIComponent(appointmentText);
    const whatsappUrl = `https://wa.me/${spaInfo.whatsappNumber}?text=${encodedMsg}`;

    // Mark submitted and open WhatsApp
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceId: services[0]?.id || '',
      date: '',
      timeSlot: 'Morning (10:00 AM - 1:00 PM)',
      notes: ''
    });
    onClose();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-darker/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-cream-light rounded-2xl shadow-2xl overflow-hidden border border-gold/30 z-10 my-8 text-forest"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-forest-dark/20 hover:bg-forest-dark/40 text-forest hover:text-forest-darker transition-colors focus:outline-none"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="bg-forest-darker px-6 py-6 sm:px-8 text-cream relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 flex-shrink-0">
                <img
                  src="/logo-gold.png"
                  alt="Mudra Wellness Spa"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(197,164,109,0.5)]"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-medium">
                Mudra Wellness Spa · Sainikpuri
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream font-medium">
              Reserve Your Sanctuary Session
            </h3>
            <p className="text-xs sm:text-sm text-sage-light mt-1 font-light">
              Submit your preferred time and therapy. We confirm directly via WhatsApp & Phone.
            </p>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-forest/10 border-2 border-forest rounded-full flex items-center justify-center mx-auto text-forest">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-forest">
                  Appointment Request Initiated!
                </h4>
                <p className="text-sm text-forest/80 max-w-sm mx-auto leading-relaxed">
                  Your appointment details have been prepared for WhatsApp dispatch. Our concierge team at Mudra Wellness Spa Sainikpuri will confirm your reserved slot shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-wider font-semibold hover:bg-forest-dark transition-colors"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-forest/40 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Priya Sharma"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-forest/40 absolute left-3 top-3" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                    Email Address <span className="text-forest/40 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-forest/40 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                    Select Desired Therapy *
                  </label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-forest/40 absolute left-3 top-3" />
                      <input
                        type="date"
                        name="date"
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-forest/40 absolute left-3 top-3" />
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1.5">
                    Special Notes or Preferences <span className="text-forest/40 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-forest/40 absolute left-3 top-3" />
                    <textarea
                      name="notes"
                      rows="2"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Focus on neck and shoulder tension relief"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-forest/20 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-forest"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-forest via-forest-light to-forest text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] shadow-luxury hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-[1.01]"
                  >
                    <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
                    <span>Confirm & Book on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-forest/60 mt-2 font-light">
                    Direct instant booking · No pre-payment required
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
