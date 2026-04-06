import React from 'react';

const ServiceIconVideo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const ServiceIconAds = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    <polyline points="12 16 16 12 12 8"></polyline>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const ServiceIconWeb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Promotional Videos & Photos",
      desc: "High-quality, eye-catching visual content engineered to capture attention and elevate your brand aesthetic on any platform.",
      icon: <ServiceIconVideo />
    },
    {
      title: "Meta Ads",
      desc: "Data-driven advertising campaigns that target your ideal audience with precision to maximize reach, engagement, and conversions.",
      icon: <ServiceIconAds />
    },
    {
      title: "Web Development & Design",
      desc: "Premium, ultra-fast websites combining modern glassmorphism design with seamless UX to turn visitors into loyal clients.",
      icon: <ServiceIconWeb />
    }
  ];

  return (
    <div id="servicii" className="services-section">
      <div className="services-container">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-panel">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
