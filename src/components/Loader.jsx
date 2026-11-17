import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant luxury timing: 1.9s total display before smooth dissolve
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        setTimeout(onLoadingComplete, 700);
      }
    }, 1900);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.03,
            filter: 'blur(8px)',
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#091B15] px-6 select-none"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(24,61,50,0.55)_0%,_rgba(9,27,21,0.92)_65%,_#06130E_100%)] pointer-events-none" />

          {/* Single Thin Expanding Zen Aura Ring (Ensō inspiration) */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ 
              scale: [0.75, 1.25, 1.35],
              opacity: [0, 0.45, 0]
            }}
            transition={{ 
              duration: 2.2, 
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold/30 pointer-events-none"
          />

          {/* Central Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Soft Breathing Golden Glow Behind Emblem */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-gold/20 via-gold-glow/30 to-gold/20 blur-2xl pointer-events-none"
            />

            {/* Mudra Wellness Spa Emblem */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 p-1"
            >
              <img
                src="/logo-gold.png"
                alt="Mudra Wellness Spa Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_0_22px_rgba(222,193,144,0.75)]"
              />
            </motion.div>

            {/* Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="mt-6 text-center"
            >
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] text-cream uppercase font-light">
                Mudra <span className="text-gold italic font-normal">Wellness Spa</span>
              </h2>

              <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-sage-light/80 font-light mt-2">
                Sanctuary of Peace & Rejuvenation
              </p>
              
              <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 font-sans mt-1">
                Sainikpuri · Hyderabad
              </p>
            </motion.div>

            {/* Sleek Golden Hairline Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "160px" }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mt-6 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ x: [-160, 160] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-white/70 blur-[1px]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
