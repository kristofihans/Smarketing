import React, { useEffect } from 'react';
import HeroAnimation from './components/HeroAnimation';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';

function App() {
  // Scroll to top on load to ensure hero animation starts fresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <HeroAnimation />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer style={{ padding: '4rem', textAlign: 'center', color: '#666' }}>
        <p>© {new Date().getFullYear()} SMARTKETING Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
