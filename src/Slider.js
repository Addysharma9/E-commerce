import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/zoom';

// Import required modules
import { Navigation, Pagination, EffectCreative, Zoom, Autoplay } from 'swiper/modules';
import Slider1 from './assets/Slider1.png';
import Slider2 from './assets/Slider2.jpg';
import Slider3 from './assets/Slide3.jpg';
import './css/Slider.css';

export default () => {
  // Array of slide content - can be expanded as needed
  const slideContent = [
    {
      image: Slider1,
      title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
      description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
      button: "Shop Now",
      stats: [
        { number: "200+", label: "International Brands" },
        { number: "2,000+", label: "High-Quality Products" },
        { number: "30,000+", label: "Happy Customers" }
      ]
    },
    {
        image: Slider2,
        title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
        description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
        button: "Shop Now",
        stats: [
          { number: "200+", label: "International Brands" },
          { number: "2,000+", label: "High-Quality Products" },
          { number: "30,000+", label: "Happy Customers" }
        ]
      },
    {
        image: Slider3,
        title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
        description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
        button: "Shop Now",
        stats: [
          { number: "200+", label: "International Brands" },
          { number: "2,000+", label: "High-Quality Products" },
          { number: "30,000+", label: "Happy Customers" }
        ]
      },
    // Add more slide objects as needed
  ];

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
        {slideContent.map((slide, index) => (
          <SwiperSlide key={index} className="slide-item">
            <div className="swiper-zoom-container">
              <div className="image-wrapper">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <button className="button-55">{slide.button}</button>
                  
                  <div className="slide-stats">
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="stat-item">
                        <div className="stat-number">{stat.number}</div>
                        <br />
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};