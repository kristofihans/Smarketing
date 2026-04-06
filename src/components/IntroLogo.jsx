import React, { useEffect, useState } from 'react';

const IntroLogo = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait for the animation + small delay before fading out
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // Tell parent component it's done after fade transition
      setTimeout(() => {
        onComplete();
      }, 1000); // matches the CSS transition duration
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-logo">
        SMARTKET
        <span className="letter-i-wrapper">
          I
          <span className="red-dot"></span>
        </span>
        NG
      </div>
    </div>
  );
};

export default IntroLogo;
