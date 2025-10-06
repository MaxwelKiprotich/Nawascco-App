import React from 'react';

const FindUs = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Find Us</h1>
      </header>
      
      <div className="content-card">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <strong>Telephone:</strong> +254-XXX-XXXXXX
          </div>
          <div className="contact-item">
            <strong>Email:</strong> info@nawassco.co.ke
          </div>
          <div className="contact-item">
            <strong>Address:</strong> Nakuru Water Works, Nakuru, Kenya
          </div>
        </div>
        
        <div className="map-placeholder">
          <div className="map">
            {/* In real app, integrate Google Maps */}
            <p>Map would be displayed here</p>
            <p>Nakuru Water and Sanitation Services Company</p>
          </div>
        </div>
        
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;