import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'

// Styled Components
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  border-bottom: 1px solid grey
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }
`;

const ProductCard = styled(motion.div)`
  background-color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const DiscountBadge = styled(motion.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff4d4d;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.8rem;
  z-index: 2;
`;

const ProductInfo = styled.div`
  padding: 1.2rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Stars = styled.div`
  color: #FFD700;
  margin-right: 5px;
`;

const RatingValue = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: #333;
  }
  
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::after {
    left: 100%;
  }
`;

const ViewAllContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ViewAllButton = styled(motion.button)`
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  border-radius: 30px;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #000;
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
  }
  
  &:hover::before {
    width: 100%;
  }
`;
const bordermaker = styled.div`
border-bottom: 2px solid grey;
`;
// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  
  return (
    <Stars>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < fullStars ? '★' : i === fullStars && halfStar ? '★' : '☆'}
        </span>
      ))}
    </Stars>
  );
};

// New Arrivals Component
const NewArrivals = (props) => {
  const [cart, setCart] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});
  
  // Full product list (14 products)
  const allProducts = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      image: p1,
      price: 120,
      originalPrice: 120,
      rating: 4.5,
      discount: null
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      image: p2,
      price: 240,
      originalPrice: 260,
      rating: 3.5,
      discount: "20%"
    },
    {
      id: 3,
      name: "Checkered Shirt",
      image: p3,
      price: 180,
      originalPrice: 180,
      rating: 4.5,
      discount: null
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      image: p4,
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      discount: "20%"
    },
    // Additional 10 products (using the same images in rotation for demo purposes)
    {
        id: 5,
        name: "Slim Fit Denim Jacket",
        image: p1,
        price: 220,
        originalPrice: 250,
        rating: 4.7,
        discount: "12%"
      },
      {
        id: 6,
        name: "Cotton Blend Sweater",
        image: p2,
        price: 150,
        originalPrice: 150,
        rating: 4.2,
        discount: null
      },
      {
        id: 7,
        name: "Casual Oxford Shirt",
        image: p3,
        price: 135,
        originalPrice: 165,
        rating: 4.4,
        discount: "18%"
      },
      {
        id: 8,
        name: "Vintage Logo T-shirt",
        image: p4,
        price: 110,
        originalPrice: 110,
        rating: 4.0,
        discount: null
      },
      {
        id: 9,
        name: "Relaxed Fit Hoodie",
        image: p1,
        price: 175,
        originalPrice: 195,
        rating: 4.8,
        discount: "10%"
      },
      {
        id: 10,
        name: "Cargo Pants",
        image: p2,
        price: 190,
        originalPrice: 190,
        rating: 4.3,
        discount: null
      },
      {
        id: 11,
        name: "Premium Cotton Polo",
        image: p3,
        price: 145,
        originalPrice: 165,
        rating: 4.6,
        discount: "12%"
      },
      {
        id: 12,
        name: "Slim Fit Chinos",
        image: p4,
        price: 160,
        originalPrice: 160,
        rating: 4.1,
        discount: null
      },
      {
        id: 13,
        name: "Graphic Print Sweatshirt",
        image: p1,
        price: 155,
        originalPrice: 185,
        rating: 4.4,
        discount: "16%"
      },
      {
        id: 14,
        name: "Distressed Denim Jeans",
        image: p2,
        price: 210,
        originalPrice: 240,
        rating: 4.7,
        discount: "13%"
      }
    ];
    
    // Show only the first 4 products initially, or all if viewAll is true
    const displayedProducts = viewAll ? allProducts : allProducts.slice(0, 4);
    
    const handleAddToCart = (productId) => {
      setCart([...cart, productId]);
      
      // Set animation state
      setAddedItems({ ...addedItems, [productId]: true });
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setAddedItems({ ...addedItems, [productId]: false });
      }, 600);
    };
    
    const toggleViewAll = () => {
      // Add animation before changing state
      const productsGrid = document.querySelector('.products-grid');
      if (productsGrid) {
        productsGrid.style.transition = 'opacity 0.3s ease';
        productsGrid.style.opacity = '0';
        
        setTimeout(() => {
          setViewAll(!viewAll);
          
          // After state changes, fade back in
          setTimeout(() => {
            productsGrid.style.opacity = '1';
          }, 50);
        }, 300);
      } else {
        setViewAll(!viewAll);
      }
    };
  
    return (
      <Section className='border-maker' >
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
        >
         {props.title}
        </SectionTitle>
        
        <ProductsGrid className="products-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(product.id * 0.1, 1) }}
              whileHover={{ scale: 1.02 }}
            >
              <ProductImage>
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <DiscountBadge
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    -{product.discount}
                  </DiscountBadge>
                )}
              </ProductImage>
              
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <Rating>
                  <StarRating rating={product.rating} />
                  <RatingValue>{product.rating}/5</RatingValue>
                </Rating>
                
                <PriceContainer>
                  <CurrentPrice>${product.price}</CurrentPrice>
                  {product.originalPrice > product.price && (
                    <OriginalPrice>${product.originalPrice}</OriginalPrice>
                  )}
                </PriceContainer>
                
                <AddToCartButton
                  onClick={() => handleAddToCart(product.id)}
                  whileTap={{ scale: 0.95 }}
                  animate={addedItems[product.id] ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <FiShoppingCart size={18} />
                  {addedItems[product.id] ? "Added to Cart" : "Add to Cart"}
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
        
        <ViewAllContainer>
          <ViewAllButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={toggleViewAll}
          >
            {viewAll ? "Show Less" : "View All"}
          </ViewAllButton>
        </ViewAllContainer>
      </Section>
    );
  };
  
  // App Component with Cart functionality
  const App = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    
    return (
      <div className="app">
        <NewArrivals title={props.title} />
      </div>
    );
  };
  
  export default App;
    // Additional 10 products (using the same images in rotation