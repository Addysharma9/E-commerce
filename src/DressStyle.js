import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Styled components
const BrowseSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 40px 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyleCard = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 220px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    img {
      transform: scale(1.1);
    }
    
    .style-name {
      transform: translateY(-5px) scale(1.05);
      background-color: white;
    }
    
    .style-overlay {
      height: 50%;
    }
  }
`;

const StyleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

const StyleName = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
  z-index: 1;
`;

const StyleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  transition: height 0.4s ease;
`;

// Main Component
const BrowseByDressStyle = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const styleCategories = [
    {
      id: 1,
      name: 'Casual',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Formal',
      image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Party',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Gym',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <BrowseSection ref={sectionRef}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        BROWSE BY DRESS STYLE
      </SectionTitle>
      
      <StyleGrid>
        {styleCategories.map((category, index) => (
          <StyleCard
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            whileHover={{ y: -10 }}
          >
            <StyleName className="style-name">{category.name}</StyleName>
            <StyleImage src={category.image} alt={`${category.name} Style`} />
            <StyleOverlay className="style-overlay" />
          </StyleCard>
        ))}
      </StyleGrid>
    </BrowseSection>
  );
};

export default BrowseByDressStyle;