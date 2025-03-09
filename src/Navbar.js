import React, { useState, useEffect, useRef } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('Shop');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  const navTabs = [
    { name: 'Shop', icon: 'shopping_bag' },
    { name: 'On Sale', icon: 'local_offer' },
    { name: 'New Arrivals', icon: 'star' },
    { name: 'Brands', icon: 'business' },
  ];

  // Check if mobile view on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Set up event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchText('');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar-container ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      {isMobileView ? (
        // Mobile View
        <>
          <div className="navbar mobile">
            <button 
              className="menu-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className="material-icons">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            <div className="navbar-logo">
              <h1>SHOP.CO</h1>
            </div>

            <div className="navbar-actions">
              {!isSearchOpen ? (
                <>
                  <button className="icon-button" onClick={toggleSearch}>
                    <span className="material-icons">search</span>
                  </button>
                  <button className="icon-button">
                   
                    <span className="material-icons">shopping_cart</span>
                
                  </button>
                </>
              ) : (
                <div className="mobile-search-container">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="search-input"
                    placeholder="Search for products..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <button className="icon-button" onClick={toggleSearch}>
                    <span className="material-icons">close</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-tabs">
              {navTabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`mobile-tab ${activeTab === tab.name ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="material-icons">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
            
            <div className="mobile-menu-additional">
              <button className="mobile-menu-item">
                <span className="material-icons">home</span>
                <span>Home</span>
              </button>
              <button className="mobile-menu-item">
                <span className="material-icons">category</span>
                <span>Categories</span>
              </button>
              <button className="mobile-menu-item">
                <span className="material-icons">favorite</span>
                <span>Wishlist</span>
              </button>
              <button className="mobile-menu-item">
                <span className="material-icons">person</span>
                <span>Account</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        // Desktop View
        <>
          <div className="navbar desktop">
            <div className="navbar-left">
              <div className="navbar-logo">
                <h1>SHOP.CO</h1>
              </div>
              
              <div className="desktop-tabs">
                {navTabs.map((tab) => (
                  <button
                    key={tab.name}
                    className={`desktop-tab ${activeTab === tab.name ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="navbar-right">
              <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="search-input"
                  placeholder="Search for products..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                  className="icon-button search-button" 
                  onClick={toggleSearch}
                >
                  <span className="material-icons">
                    {isSearchOpen ? 'close' : 'search'}
                  </span>
                </button>
              </div>
              
              <button className="icon-button">
          
             
              <Link to="/cart">
                <span className="material-icons">shopping_cart</span>
              </Link>
            
              </button>
              
              <button className="icon-button">
                <span className="material-icons">person</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;