import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/zoom';

// Import required modules
import { Navigation, Pagination, EffectCreative, Zoom, Autoplay } from 'swiper/modules';

import Image from './assets/Slider1.png';
import './css/Slider.css'; // We'll create custom styles

export default () => {
  return (
    <div className="slider-container">
      <div className="slider-overlay"></div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><span class="bullet-indicator"></span></span>';
          },
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        zoom={{
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
        }}
        modules={[Navigation, Pagination, EffectCreative, Zoom, Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i} className="slide-item">
            <div className="swiper-zoom-container">
              <div className="image-wrapper">
                <img src={Image} alt={`Slide ${i}`} />
                <div className="slide-content">
                  
                </div>
              </div>
            </div>
            <div className="zoom-controls">
           
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};