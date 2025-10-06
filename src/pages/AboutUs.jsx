import React from 'react';

const AboutUs = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>About Us</h1>
      </header>
      
      <div className="content-card">
        <div className="about-section">
          <h3>NAWASSCO - Nakuru Water and Sanitation Services Company</h3>
          <p>
            We are committed to providing reliable and sustainable water and sanitation 
            services to the residents of Nakuru County and its environs.
          </p>
        </div>
        
        <div className="services-section">
          <h3>Our Services</h3>
          <ul>
            <li>Water Supply and Distribution</li>
            <li>Sewerage and Wastewater Management</li>
            <li>Billing and Customer Service</li>
            <li>New Water Connections</li>
            <li>Maintenance and Repairs</li>
            <li>Water Quality Testing</li>
          </ul>
        </div>
        
        <div className="mission-section">
          <h3>Our Mission</h3>
          <p>
            To provide efficient, reliable, and sustainable water and sanitation services 
            through innovative solutions and excellent customer care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;