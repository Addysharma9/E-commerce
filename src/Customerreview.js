import React, { useState, useEffect, useRef } from 'react';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const autoScrollRef = useRef(null);
  const totalReviews = 5;
  
  // Determine number of visible cards based on screen width
  const getVisibleReviews = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 900) return 2; // Tablet
    return 3; // Desktop
  };
  
  const visibleReviews = getVisibleReviews();
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Reset carousel position when visible reviews change
  useEffect(() => {
    if (currentIndex > totalReviews - visibleReviews) {
      setCurrentIndex(0);
    }
  }, [visibleReviews, currentIndex]);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "I'm impressed by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece has exceeded my expectations."
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      text: "I was someone that struggled with my personal style until I discovered Shop.co. The range of options they offer is just remarkable."
    },
    {
      id: 3,
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is amazing."
    },
    {
      id: 4,
      name: "Moira P.",
      rating: 5,
      text: "The quality of the fabrics and the attention to detail in every design is outstanding. Shop.co has become my go-to destination."
    },
    {
      id: 5,
      name: "David R.",
      rating: 5,
      text: "Customer service at Shop.co is exceptional! They helped me find the perfect outfit for my interview. Definitely coming back for more."
    }
  ];

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [visibleReviews]);

  const startAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalReviews - visibleReviews + 1));
    }, 3000);
  };

  const pauseAutoScroll = () => {
    clearInterval(autoScrollRef.current);
  };

  const resumeAutoScroll = () => {
    startAutoScroll();
  };

  const handlePrev = () => {
    pauseAutoScroll();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalReviews - visibleReviews : prevIndex - 1
    );
    resumeAutoScroll();
  };

  const handleNext = () => {
    pauseAutoScroll();
    setCurrentIndex((prevIndex) => 
      prevIndex === totalReviews - visibleReviews ? 0 : prevIndex + 1
    );
    resumeAutoScroll();
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<span key={i} style={{ color: '#FFD700' }}>★</span>);
    }
    return stars;
  };

  // Responsive container styles
  const containerStyle = {
    padding: windowWidth < 640 ? '20px 10px' : '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  // Responsive header styles
  const headerStyle = {
    display: 'flex',
    flexDirection: windowWidth < 640 ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: windowWidth < 640 ? 'flex-start' : 'center',
    marginBottom: windowWidth < 640 ? '15px' : '30px',
    gap: windowWidth < 640 ? '15px' : '0'
  };

  // Responsive title styles
  const titleStyle = {
    fontSize: windowWidth < 640 ? '22px' : '28px',
    fontWeight: 'bold',
    margin: 0
  };

  // Responsive card styles
  const cardStyle = {
    padding: windowWidth < 640 ? '12px' : '15px',
    borderRadius: '8px',
    border: '1px solid #f0f0f0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    background: 'white',
    height: windowWidth < 640 ? '160px' : '180px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>OUR HAPPY CUSTOMERS</h2>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handlePrev}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #eee',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #eee',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            →
          </button>
        </div>
      </div>

      <div 
        style={{ 
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      >
        <div style={{ 
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)`
        }}>
          {reviews.map((review) => (
            <div 
              key={review.id}
              style={{ 
                minWidth: `${100 / visibleReviews}%`,
                padding: '0 10px',
                boxSizing: 'border-box'
              }}
            >
              <div style={cardStyle}>
                <div style={{ display: 'flex', marginBottom: '8px' }}>
                  {renderStars(review.rating)}
                </div>
                
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    width: windowWidth < 640 ? '24px' : '28px',
                    height: windowWidth < 640 ? '24px' : '28px',
                    borderRadius: '50%',
                    background: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    fontWeight: 'bold',
                    color: '#555'
                  }}>
                    {review.name.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 'bold' }}>{review.name}</span>
                </div>
                
                <p style={{
                  margin: 0,
                  fontSize: windowWidth < 640 ? '13px' : '14px',
                  lineHeight: '1.4',
                  color: '#555',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                  flex: 1
                }}>
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginTop: windowWidth < 640 ? '15px' : '20px',
          gap: '6px'
        }}>
          {Array.from({ length: totalReviews - visibleReviews + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                pauseAutoScroll();
                setCurrentIndex(idx);
                resumeAutoScroll();
              }}
              style={{
                width: idx === currentIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === currentIndex ? '#333' : '#ddd',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;