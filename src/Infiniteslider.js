import { motion } from "framer-motion";
import logo1 from './assets/logo1.png'
import logo2 from './assets/logo2.png'
import logo3 from './assets/logo3.png'
import logo4 from './assets/logo4.png'
import logo5 from './assets/logo5.png'
import "./css/Infinite.css"; 

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function InfiniteSlider() {
  return (
    <div className="mono-slider-container">
      <div className="mono-gradient-left"></div>
      <div className="mono-slider-content">
        <motion.div
          className="mono-slider-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear",
            repeatType: "loop" 
          }}
        >
          {/* Double the logos to ensure seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="mono-logo-item" key={index}>
              <img src={logo} alt={`Partner ${index % logos.length + 1}`} className="mono-logo" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mono-gradient-right"></div>
    </div>
  );
}