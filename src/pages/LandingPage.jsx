import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

const LandingPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const handleGetStarted = () => {
    navigate('/products'); // Tell React to move to the products route
  };
  return (
    <div className="landing-page">
        <div className='landing-page-content'>
            <div className='landing'>
      <h1 className='landing-page-title'>Paradise Nursery</h1>
      <p>Where Greenery Meets Your Home</p>
      <button className='cta-btn' onClick={handleGetStarted}>
            Get Started
          </button>
          <AboutUs />
    </div>
    
    </div>
    </div>
  );
};

export default LandingPage;