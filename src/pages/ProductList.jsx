import React from 'react';
import { plantsData } from '../data/plants';
import ProductCard from '../components/ProductCard';
import './ProductList.css';

const ProductList = () => {
    return (
    <div className='productListContainer'>
        <h1>Our Plants</h1>
        
        {plantsData.map((categoryGroup, index)=> (
            <div key={index} className='plant-card-Category'>
                <h2 className='product-category'>{categoryGroup.category}</h2>
                <div className='plant-card-container'>
                    {categoryGroup.plants.map(plant => (
                        <ProductCard key={plant.id} plant={plant} />
                    ))}
                </div>
            </div>
        ))}
        
    </div>
)};

export default ProductList;