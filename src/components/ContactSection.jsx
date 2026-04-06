import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container glass-panel">
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Contact</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Nume</label>
            <input type="text" placeholder="Numele tău" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Adresa de email" />
          </div>
          <div className="form-group">
            <label>Mesaj</label>
            <textarea placeholder="Cu ce te putem ajuta?" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-btn">Trimite Mesaj</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
