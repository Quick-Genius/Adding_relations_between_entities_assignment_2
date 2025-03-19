import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingWidget.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  // State for the selected rating
  const [rating, setRating] = useState(0);
  // State for the hovered rating
  const [hoveredRating, setHoveredRating] = useState(0);

  // Handle star click
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Handle mouse enter on star
  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  // Handle mouse leave from rating container
  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  // Handle rating submission
  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset rating after submission
    }
  };

  // Render stars
  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= (hoveredRating || rating) ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
        >
          ★
        </span>
      );
    }
    
    return stars;
  };

  return (
    <div className="rating-widget">
      <div 
        className="stars-container"
        onMouseLeave={handleMouseLeave}
      >
        {renderStars()}
      </div>
      <button 
        className="submit-button"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;