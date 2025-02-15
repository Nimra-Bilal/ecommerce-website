// import React from 'react'
// import './Hero.css'
// import hand_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hand_icon.png'
// import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/arrow.png'
// import hero_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hero_image.png'
// const Hero = () => {
//   return (
//     <div className='hero'>
// <div className="hero-left">
// <h2>NEW ARRIVALS ONLY</h2>
// <div>
//     <div className="hand-hand-icon">
//        <img src={hand_icon} alt="hand_icon" /> <p>new </p>
       
//         </div>
//         <p>collections</p>
//         <p>for everyone</p>
//       </div>
//     <div className="hero-latest-btn">
//         <div>latest collection</div>
//             <img src={arrow_icon} alt="arrow_icon" />
// </div>
// </div>
// <div className="hero-right"></div>
// <img src={hero_image} alt="hero_image" />

//     </div>
//   )
// }

// export default Hero


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap include karna zaroori hai
import './Hero.css';
import hand_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero container-fluid d-flex align-items-center">
      <div className="hero-left col-md-6 text-start">
        <h2 className="fw-bold">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon d-flex align-items-center">
            <img src={hand_icon} alt="hand_icon" className="img-fluid" />
            <p className="fw-bold display-4">new</p>
          </div>
          <p className="fw-bold display-3">collections</p>
          <p className="fw-bold display-3">for everyone</p>
        </div>
        <div className="hero-latest-btn btn btn-danger btn-lg d-flex align-items-center justify-content-center gap-3">
          <div>latest collection</div>
          <img src={arrow_icon} alt="arrow_icon" className="img-fluid" />
        </div>
      </div>
      <div className="hero-right col-md-6 d-flex justify-content-center">
        <img src={hero_image} alt="hero_image" className="img-fluid" />
      </div>
    </div>
  );
};

export default Hero;
