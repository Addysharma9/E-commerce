// components/CartItem.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <motion.div 
      className="cart-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="item-image">
        <img src={item.image || `https://via.placeholder.com/80`} alt={item.name} />
      </div>
      
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="item-meta">Size: {item.size}</p>
        <p className="item-meta">Color: {item.color}</p>
        <p className="item-price">${item.price}</p>
      </div>
      
      <div className="item-actions">
        <div className="quantity-control">
          <button 
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            −
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      {/* Remove button with animation */}
      <button 
        className="remove-btn"
        onClick={() => removeItem(item.id)}
        aria-label="Remove item"
      >
        <i className="fas fa-trash-alt"></i>
        Trash
      </button>
    </motion.div>
  );
};

export default CartItem;