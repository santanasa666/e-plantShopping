import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, updateQuantity } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Local state for basic feedback/error messaging
    const [message, setMessage] = useState('');

    //calculate total cost
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleRemove = (id, name) => {
    try {
      dispatch(removeItem(id));
      setMessage(`${name} removed from cart.`);
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to remove item. Please try again.');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setMessage('Your cart is empty. Add items before checking out.');
      return;
    }
    alert('Coming Soon!');
  };


    return (
    <div className='cart-page'>
      <h2>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is empty.</p>
          <Link to="/products">
            <button className='cart-empty-btn'>
                Go back to Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className='cart-items'>
          {cartItems.map(item => (
            <div key={item.id} className='cart-item'>
              <img src={item.thumbnail} alt={item.name} className='cart-thumb' />
              <div className='cart-item-info'>
                <h3 className='cart-item-name'>{item.name}</h3>
                <p className='cart-item-unit'>Unit Price: ${item.price}</p>
                <p className='cart-item-unit'>Subtotal: ${item.price * item.quantity}</p>
              </div>
              
              <div className='qty-controls'>
                <button className='qty-btn' onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
                <span className='qty-val'>{item.quantity}</span>
                <button className='qty-btn' onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
                
                <button
                    className='del-btn' 
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className='summary-row'>
          <div className=''>
            <h3 className='summary-total'>Total Amount: ${calculateTotal()}</h3>
            <div className='cart-actions'>
            <button className='btn-primary' onClick={() => alert('Coming Soon!')}>Checkout</button>
            <Link to="/products">
              <button className='btn-secondary'>Continue Shopping</button>
            </Link>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;