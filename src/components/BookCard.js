// src/components/BookCard.js

import React from 'react';
import './BookCard.css'; // Import your custom CSS

const BookCard = ({ title, discountRate, coverImage, price }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt="Book Cover" className="cover-image" />
      <div className="book-details">
        <h2 className="title">{title}</h2>
        <p className="discount-rate">Discount: {discountRate}%</p>
        <p className="price">Price: ${price}</p>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
};

export default BookCard;
