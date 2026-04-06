import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass-panel ${isVisible ? 'visible' : ''}`}>
      <div className="nav-logo">
        SMARTKET
        <span className="nav-i">
          I
          <span className="nav-dot"></span>
        </span>
        NG
      </div>
      <ul className="nav-links">
        <li><a href="#despre-noi">Despre Noi</a></li>
        <li><a href="#servicii">Servicii</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
