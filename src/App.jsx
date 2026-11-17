import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServiceDetailModal from './components/ServiceDetailModal';
import AppointmentModal from './components/AppointmentModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingInitialService, setBookingInitialService] = useState(null);

  // Sync with URL hash or scroll behavior
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithService = (service) => {
    setBookingInitialService(service);
    setIsBookingOpen(true);
  };

  const handleGeneralBookingOpen = () => {
    setBookingInitialService(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-forest selection:bg-gold selection:text-forest-darker">
      {/* 1. Brand Loading Screen */}
      {isLoading && (
        <Loader onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Sticky Navbar */}
      <Navbar
        activeSection={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={handleGeneralBookingOpen}
        onReplayIntro={() => setIsLoading(true)}
      />

      {/* 3. Main Content Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onOpenBooking={handleGeneralBookingOpen}
            onSelectService={(service) => setSelectedService(service)}
          />
        )}

        {currentPage === 'about' && (
          <About
            onNavigate={navigateTo}
            onOpenBooking={handleGeneralBookingOpen}
          />
        )}

        {currentPage === 'services' && (
          <Services
            onSelectService={(service) => setSelectedService(service)}
            onOpenBooking={handleGeneralBookingOpen}
          />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* 4. Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={handleGeneralBookingOpen}
        onSelectService={(service) => setSelectedService(service)}
        onReplayIntro={() => setIsLoading(true)}
      />

      {/* 5. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 6. Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleOpenBookingWithService}
      />

      {/* 7. Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingInitialService}
      />
    </div>
  );
}
