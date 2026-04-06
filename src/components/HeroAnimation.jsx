import React, { useEffect, useRef } from 'react';

const frameCount = 75;
const currentFrame = (index) => `/frames/${index.toString().padStart(4, '0')}.jpg`;

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const titleBoxRef = useRef(null);

  const drawFrame = (frameIndex) => {
    const images = imagesRef.current;
    if (!canvasRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = images[Math.min(frameIndex - 1, images.length - 1)];
    
    // Check if the image is actually loaded before drawing
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Maintain aspect ratio while covering the canvas
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
                  centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let firstDrawn = false;
    
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            if (!firstDrawn) {
                // Initial draw when the first image is complete
                drawFrame(1);
                firstDrawn = true;
            }
        };
        loadedImages.push(img);
    }
    // Set the ref synchronously so drawFrame can access them
    imagesRef.current = loadedImages;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 2; // matches 300vh container (200vh inner scrollable)
      
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      // Calculate blur and brightness based on scrollFraction
      // Normalizes from blur(15px) and brightness(30%) down to 0 and 100% by 25% of the scroll
      const blurValue = Math.max(0, 15 - scrollFraction * 60); 
      const brightnessValue = Math.min(100, 30 + scrollFraction * 280);
      
      if (canvasRef.current) {
        canvasRef.current.style.filter = `blur(${blurValue}px) brightness(${brightnessValue}%)`;
      }
      
      if (titleBoxRef.current) {
        if (window.scrollY > 50) {
          titleBoxRef.current.classList.add('visible');
        } else {
          titleBoxRef.current.classList.remove('visible');
        }
      }

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      
      requestAnimationFrame(() => drawFrame(frameIndex + 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Resize
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // redraw current frame based on scroll
        const scrollTop = window.scrollY;
        const maxScroll = window.innerHeight * 2;
        const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
        
        const blurValue = Math.max(0, 15 - scrollFraction * 60); 
        const brightnessValue = Math.min(100, 30 + scrollFraction * 280);
        canvasRef.current.style.filter = `blur(${blurValue}px) brightness(${brightnessValue}%)`;

        if (titleBoxRef.current) {
          if (window.scrollY > 50) {
            titleBoxRef.current.classList.add('visible');
          } else {
            titleBoxRef.current.classList.remove('visible');
          }
        }

        const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
        drawFrame(frameIndex + 1);
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // initial setup
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div id="despre-noi" className="hero-section" ref={containerRef}>
      <div className="canvas-container">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <div ref={titleBoxRef} className="hero-title-box">
            <h1 className="hero-title" style={{ position: 'relative', zIndex: 2 }}>
              SMARTKET
              <span className="letter-i-wrapper">
                I
                <span className="red-dot"></span>
              </span>
              NG
            </h1>
            <p className="hero-desc" style={{ position: 'relative', zIndex: 2 }}>
              Elevate your brand with premium digital marketing and striking visual content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
