import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className='landing-page-content'>
            <div className='landing'>
      <h1 className='landing-page-title'>Paradise Nursery</h1>
      <p>Where Greenery Meets Your Home</p>
      <Link to="/products">
      <button className='cta-btn'>Get Started</button></Link>
    </div>
    </div>
    </div>
  );
};

export default LandingPage;