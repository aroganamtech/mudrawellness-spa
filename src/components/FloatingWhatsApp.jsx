import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { spaInfo } from '../data/spaData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent("Hello Mudra Wellness Spa! I'd like to book an appointment or inquire about your spa services.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-white text-forest-dark px-3.5 py-2 rounded-full shadow-luxury-gold border border-gold/30 text-xs font-medium relative animate-fade-in">
          <span>Need help? Chat with us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-forest/40 hover:text-forest"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gold/30 rotate-45" />
        </div>
      )}

      {/* WhatsApp Button with Glow */}
      <a
        href={`https://wa.me/${spaInfo.whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        title="Chat on WhatsApp with Mudra Wellness Spa"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
