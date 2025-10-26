import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📧 Email</h3>
              <p>info@gym.com</p>
              <p>support@gym.com</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+1 (234) 567-890</p>
              <p>+1 (234) 567-891</p>
            </div>

            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123 Fitness Street</p>
              <p>Health City, HC 12345</p>
            </div>

            <div className="info-card">
              <h3>🕐 Hours</h3>
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
