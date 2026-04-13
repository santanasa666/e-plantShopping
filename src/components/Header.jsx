import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
  // Grab the totalQuantity from our Redux cart state
  const totalQuantity = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <nav className='navBar'>
      <div>
        <Link to="/" className="navLink-logo">Paradise Nursery</Link>
        <Link to="/products" className='navLink'>Plants</Link>
      </div>
      <div>
        <Link to="/cart" className='navLink'>
          Cart <span>({totalQuantity})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;