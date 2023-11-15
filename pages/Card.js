// Card.js
import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ title, imageUrl, onClickBuy }) => {
  return (
    <div className="card2">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <button className="buy-button" onClick={onClickBuy}>
        Shop Infinity
        </button>
      </div>
    </div>
  );
};

export default Card;
