import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';
import './ProductCard.css';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          <span className="rating-value">
            Average Rating: {product.avgRating.toFixed(1)}
          </span>
          <span className="rating-count">
            ({product.totalRatings} ratings)
          </span>
        </div>
        <RatingWidget 
          productId={product.id} 
          onRatingSubmit={onRatingSubmit} 
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;