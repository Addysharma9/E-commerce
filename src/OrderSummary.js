// components/OrderSummary.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderSummary = ({ subtotal, discount, deliveryFee, total }) => {
  const [promoCode, setPromoCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (!promoCode) return;
    
    setIsApplying(true);
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false);
      setPromoCode('');
      // Here you would handle the promo code application
      alert('Promo code applied!');
    }, 1000);
  };

  return (
    <motion.div 
      className="cart-summary"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Order Summary</h2>
      
      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      
      <div className="summary-row discount">
        <span>Discount (-20%)</span>
        <span className="discount-amount">-${discount}</span>
      </div>
      
      <div className="summary-row">
        <span>Delivery Fee</span>
        <span>${deliveryFee}</span>
      </div>
      
      <div className="summary-row total">
        <span>Total</span>
        <span>${total}</span>
      </div>
      
      <form className="promo-form" onSubmit={handlePromoSubmit}>
        <div className="promo-input">
          <i className="fas fa-tag"></i>
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="apply-btn"
          disabled={isApplying}
        >
          {isApplying ? 'Applying...' : 'Apply'}
        </button>
      </form>
      
      <motion.button 
        className="checkout-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Go to Checkout <i className="fas fa-arrow-right"></i>
      </motion.button>
    </motion.div>
  );
};

export default OrderSummary;
