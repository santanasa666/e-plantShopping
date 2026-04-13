import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Header from './components/Header'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* The Header stays visible on all pages */}
        <Header />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;