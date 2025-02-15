// import React from 'react'
// import './NewsLetter.css'
// const NewsLetter = () => {
//   return (
//     <div className='newsletter'>
//         <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
//         <p>SUBSCRIBE TO OUR NEWS CHANNEL AND STAY UPDATED</p>
//     <div>
//         <input type="email" placeholder="Enter your email" />
//         <button>SUBSCRIBE</button>
//     </div>
//     </div>
//   )
// }

// export default NewsLetter

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import

const NewsLetter = () => {
  return (
    <div className="container my-5 py-5 text-center bg-light rounded"> 
        <h1 className="fw-bold">GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p className="fs-5 text-muted">SUBSCRIBE TO OUR NEWS CHANNEL AND STAY UPDATED</p>

        <div className="d-flex justify-content-center align-items-center bg-white border border-secondary rounded-pill p-2 w-75 mx-auto">
            <input 
                type="email" 
                className="form-control border-0 shadow-none w-75" 
                placeholder="Enter your email"
            />
            <button className="btn btn-dark rounded-pill px-4">SUBSCRIBE</button>
        </div>
    </div>
  );
};

export default NewsLetter;
