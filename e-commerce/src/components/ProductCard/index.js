import React from 'react';
import './index.css';

const ProductCard = ( {product} ) => {
  const { id, title, price, image } = product;
  const discount = Math.round((price * 2)) ;


  return (
    <div key={id} className="product-card">
      <img className='image' src={image} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <div className='price-dis'>
        <p className='price-para'>₹{price}</p>
        <p className='discount'>{discount} </p>
        <p className='percent'>(50% off)</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
