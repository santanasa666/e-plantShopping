import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className='landing-page-content'>
            <div className='landing'>
      <h1 className='landing-page-title'>Paradise Nursery</h1>
      <p>Where Greenery Meets Your Home</p>
      <button className='cta-btn' onClick={() => window.location.href='/products'}>Get Started</button>
    </div>
    </div>
    </div>
  );
};

export default LandingPage;