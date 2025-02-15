// import React from 'react'
// import './Footer.css'
// import footer_logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo_big.png'
// import instagram_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/instagram_icon.png'
// import pinterester_icon from  '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/whatsapp_icon.png'
// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-logo">
//             <img src={footer_logo} alt="" />
//             <p>SHOPPER</p>
//             </div>
// <ul className='footer-links'>
//     <li>COMPANY</li>
//     <li>PRODUCTS</li>
//     <li>OFFICES</li>
//     <li>ABOUT</li>
//     <li>CONTACTS</li>
// </ul>
// <div className="footer-social-icon">
//     <div className="footer-icons-container">
//         <img src={instagram_icon} alt="" />
//         </div>
//         <div className="footer-icons-container">
//             <img src={pinterester_icon} alt="" />
//         </div>
//         <div className="footer-icons-container">
//             <img src={whatsapp_icon} alt="" />
//         </div>
//         </div>
//         <div className="footer-copywrite">
//             <hr />
//             <p>Copywrite @ 2025 - All Rights Reserved</p>
//         </div>
        
//     </div>
//   )
// }

// export default Footer


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import footer_logo from "../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo_big.png";
import instagram_icon from "../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/instagram_icon.png";
import pinterest_icon from "../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer bg-light text-center py-5">
      {/* Logo Section */}
      <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
        <img src={footer_logo} alt="Logo" style={{ height: "50px" }} />
        <p className="fw-bold fs-3 text-dark mb-0">SHOPPER</p>
      </div>

      {/* Navigation Links */}
      <ul className="nav justify-content-center gap-4 mb-4">
        <li className="nav-item">
         COMPANY
        </li>
        <li className="nav-item">
         PRODUCTS
        </li>
        <li className="nav-item">
       OFFICES
        </li>
        <li className="nav-item">
         ABOUT
        </li>
        <li className="nav-item">
          CONTACTS
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <div className="p-2 border rounded bg-white">
          <img src={instagram_icon} alt="Instagram" style={{ height: "25px" }} />
        </div>
        <div className="p-2 border rounded bg-white">
          <img src={pinterest_icon} alt="Pinterest" style={{ height: "25px" }} />
        </div>
        <div className="p-2 border rounded bg-white">
          <img src={whatsapp_icon} alt="WhatsApp" style={{ height: "25px" }} />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container">
        <hr className="border-2 border-secondary opacity-50" />
        <p className="mt-3 text-dark fw-medium">Copyright © 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
