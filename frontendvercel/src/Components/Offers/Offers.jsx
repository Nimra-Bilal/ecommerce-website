// import React from 'react'
// import './Offers.css'
// import exclusive_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/exclusive_image.png'
// const Offers = () => {
//   return (
//     <div className='offers'>
//         <div className="offers-left">
// <h1>EXCLUSIVE</h1>
// <h1>OFFERS FOR YOU</h1>
// <p>ONLY ON BEST SELLER PRODUCTS</p>
// <button>check now</button>
//         </div>
//         <div className="offers-right">
// <img src={exclusive_image} alt="exclusive_image" />
//         </div>
//     </div>
//   )
// }

// export default Offers


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import
import exclusive_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="container-fluid  my-5 py-5 bg-light rounded">
      <div className="row align-items-center bg-light text-center text-md-start">
        {/* Left Section */}
        <div className="col-md-6">
          <h1 className="fw-bold display-4">EXCLUSIVE</h1>
          <h1 className="fw-bold display-4">OFFERS FOR YOU</h1>
          <p className="fs-5 text-muted">ONLY ON BEST SELLER PRODUCTS</p>
          <button className="btn btn-danger btn-lg rounded-pill px-4 mt-3">
            CHECK NOW
          </button>
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <img 
            src={exclusive_image} 
            alt="exclusive_image" 
            className="img-fluid w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
