import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Paradise Nursery</h2>
      <p className="about-us-description">
        At Paradise Nursery, we believe that every home deserves a touch of nature. 
        Our mission is to provide high-quality, vibrant houseplants that not only 
        beautify your living space but also improve your well-being.
      </p>
      <div className="about-us-features">
        <div className="feature-card">
          <h3>Quality Plants</h3>
          <p>Sourced from the best nurseries to ensure health and longevity.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Advice</h3>
          <p>Our team of botanists is here to help you become a pro plant parent.</p>
        </div>
        <div className="feature-card">
          <h3>Eco-Friendly</h3>
          <p>We use sustainable packaging and organic fertilizers only.</p>
        </div>
      </div>
      <p className="about-us-mission">
        "Bringing the serenity of the outdoors, right to your doorstep."
      </p>
    </div>
  );
};

export default AboutUs;