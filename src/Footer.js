import React, { useState } from 'react';
import './css/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter section */}
        <div className="newsletter">
          <div className="newsletter-content">
            <h3>STAY UP TO DATE</h3>
            <p>Subscribe to our newsletter for the latest offers</p>
          </div>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Main footer content */}
        <div className="footer-grid">
          {/* Brand section */}
          <div className="brand-column">
            <h2>SHOP.CO</h2>
            <p>We love clothes that suit your style and which you're proud to wear.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Links columns */}
          <div className="links-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h4>HELP</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">eBooks</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© 2025 Shop.co. All rights reserved by Addy Sharma.</p>
          <div className="payment-methods">
            <span>Payment Methods:</span>
            <div className="payment-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg" alt="Mastercard" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg" alt="PayPal" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;