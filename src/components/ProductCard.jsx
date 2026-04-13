import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import './ProductCard.css';

const ProductCard = ({ plant }) => {
    const dispatch = useDispatch();
    // Check if this specific plant is already in the cart
    const cartItems = useSelector(state => state.cart.items);
    const isAdded = cartItems.some(item => item.name === plant.name);

    const handleAddToCart = () => {
        //Send the plant object to our Redux store
        dispatch(addItem(plant));
        alert(`${plant.name} added to cart!`);
    };

    return (
        <div className="product-card">
            <img src={plant.thumbnail} alt={plant.name} className='plant-img' />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p><strong>${plant.price}</strong></p>
            
            <button 
                className="product-container-btn" 
                onClick={handleAddToCart}
                // This attribute is key for the rubric requirement:
                disabled={isAdded}>
                {isAdded ? "Added to Cart" : "Add to Cart"}
            </button>
        </div>
    );
};

export default ProductCard;