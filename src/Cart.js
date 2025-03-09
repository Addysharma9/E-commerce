import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import './css/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      image: '/images/tshirt.jpg',
      quantity: 1,
      size: 'Large',
      color: 'White',
      discount:20
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      price: 180,
      image: '/images/checkered.jpg',
      quantity: 1,
      size: 'Medium',
      color: 'Red',
      discount:10
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      price: 240,
      image: '/images/jeans.jpg',
      quantity: 1,
      size: 'Large',
      color: 'Blue',
      discount:5
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [itemToRemove, setItemToRemove] = useState(null);
  let discountofall = useRef(0)
  const deliveryFee = 15;

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const calculateTotals = () => {
    // Calculate subtotal (price * quantity for each item)
    const itemSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(itemSubtotal);
    
    // Calculate total discount amount by applying each item's discount to its own price
    const totalDiscountAmount = cartItems.reduce((sum, item) => {
      const itemTotal = item.price * item.quantity;
      const itemDiscountAmount = Math.round(itemTotal * (item.discount / 100));
      return sum + itemDiscountAmount;
    }, 0);
    
    setDiscount(totalDiscountAmount);
    
    // Calculate final total
    setTotal(itemSubtotal - totalDiscountAmount + deliveryFee);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const confirmRemove = (id) => {
    setItemToRemove(id);
  };

  const cancelRemove = () => {
    setItemToRemove(null);
  };
  
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    setItemToRemove(null);
  };

  return (
    <div className="container">
      <h1>YOUR CART</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            <AnimatePresence>
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  updateQuantity={updateQuantity}
                  removeItem={() => confirmRemove(item.id)}
                />
              ))}
            </AnimatePresence>
          ) : (
            <div className="empty-cart">
              <i className="fas fa-shopping-cart"></i>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <button className="continue-shopping">Continue Shopping</button>
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <OrderSummary 
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
            total={total}
          />
        )}
      </div>

      {/* Confirmation Dialog */}
      {itemToRemove && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Remove Item</h3>
            <p>Are you sure you want to remove this item from your cart?</p>
            <div className="confirm-buttons">
              <button className="cancel-btn" onClick={cancelRemove}>Cancel</button>
              <button className="confirm-btn" onClick={() => removeItem(itemToRemove)}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;