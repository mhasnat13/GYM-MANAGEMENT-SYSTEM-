import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
          <p>Learn more about our gym management system</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>
              We are a comprehensive gym management system dedicated to helping fitness
              centers streamline their operations and provide better service to their members.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To empower fitness centers with cutting-edge technology that simplifies
              member management, booking, and tracking while enhancing the overall
              fitness experience.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <ul>
              <li>Easy online package booking</li>
              <li>Member management system</li>
              <li>Flexible package options</li>
              <li>Secure payment tracking</li>
              <li>Real-time booking updates</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
