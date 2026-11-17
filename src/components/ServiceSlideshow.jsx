import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServiceSlideshow({
  images = [],
  fallbackImage = '',
  alt = 'Service Image',
  serviceName = '',
  showBadge = true,
  className = 'w-full h-full',
  interval = 3500,
  showControls = true,
  autoPlay = true,
  aspectRatioClass = 'h-64 sm:h-72',
  children
}) {
  const slideList = images && images.length > 0 ? images : (fallbackImage ? [fallbackImage] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = slideList.length;
  const displayName = serviceName || alt;

  useEffect(() => {
    if (!autoPlay || total <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [total, autoPlay, isHovered, interval]);

  if (total === 0) {
    return (
      <div className={`relative ${aspectRatioClass} bg-forest/20 flex items-center justify-center`}>
        <span className="text-forest-light text-xs font-serif">Mudra Wellness Spa</span>
        {children}
      </div>
    );
  }

  if (total === 1) {
    return (
      <div className={`relative ${aspectRatioClass} overflow-hidden group`}>
        <img
          src={slideList[0]}
          alt={alt}
          className={`${className} object-cover transition-transform duration-700 group-hover:scale-108`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />
        {showBadge && displayName && (
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-darker/90 backdrop-blur-md text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-gold/40 shadow-sm">
              <span>{displayName}</span>
            </span>
          </div>
        )}
        {children}
      </div>
    );
  }

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleDotClick = (e, idx) => {
    e.stopPropagation();
    setCurrentIndex(idx);
  };

  return (
    <div
      className={`relative ${aspectRatioClass} overflow-hidden group select-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Active Slide with AnimatePresence Cross-fade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slideList[currentIndex]}
          src={slideList[currentIndex]}
          alt={`${alt} slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </AnimatePresence>

      {/* Atmospheric dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-darker/85 via-forest-darker/20 to-transparent pointer-events-none" />

      {/* Massage Name Badge in top-left */}
      {showBadge && displayName && (
        <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 pointer-events-none">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-darker/90 backdrop-blur-md text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-gold/40 shadow-sm">
            <span>{displayName}</span>
          </span>
        </div>
      )}

      {/* Next / Prev Navigation Buttons */}
      {showControls && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-forest-darker/80 hover:bg-gold text-cream hover:text-forest-darker flex items-center justify-center transition-all duration-300 opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm border border-gold/40 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-forest-darker/80 hover:bg-gold text-cream hover:text-forest-darker flex items-center justify-center transition-all duration-300 opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm border border-gold/40 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Navigation Dots Indicator */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center space-x-1.5 pointer-events-auto">
        {slideList.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => handleDotClick(e, idx)}
            aria-label={`Jump to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? 'w-6 h-1.5 bg-gold shadow-gold-sm'
                : 'w-1.5 h-1.5 bg-cream/50 hover:bg-cream/90'
            }`}
          />
        ))}
      </div>

      {/* Optional Children Overlays */}
      {children}
    </div>
  );
}
