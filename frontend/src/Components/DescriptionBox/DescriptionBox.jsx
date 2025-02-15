// import React from 'react';
// import './DescriptionBox.css';

// export const DescriptionBox = () => {
//   return (
//     <div className="descriptionbox">
//       {/* Navigator Tabs */}
//       <div className="descriptionbox-navigator">
//         <div className="descriptionbox-nav-box active">Description</div>
//         <div className="descriptionbox-nav-box">Review (132)</div>
//       </div>

//       {/* Content Section */}
//       <div className="descriptionbox-content">
//         {/* Description Section */}
//         <div className="descriptionbox-section">
//           <h2>Description</h2>
//           <p>
//             Clothes are wearable items designed to provide comfort, style, and protection. They come in various materials such as cotton, wool, silk, and synthetic blends, catering to different occasions and seasons. From casual wear like t-shirts, jeans, and hoodies to formal attire like suits, dresses, and blazers, clothing reflects personal style and cultural influences.
//           </p>
//           <p>
//             Modern clothing often incorporates features such as breathable fabrics, stretchable materials, and functional pockets, making them versatile and practical. Fashion trends evolve constantly, offering a range of patterns, colors, and cuts to suit all preferences.
//           </p>
//         </div>

//         {/* Review Section */}
//         <div className="descriptionbox-section">
//           <h2>Review (132)</h2>
//           <p>
//             This product has received excellent reviews from customers. With an average rating of 4.5 stars, users praise its quality, comfort, and style. Here's what some of our customers have to say:
//           </p>
//           <ul>
//             <li>"Absolutely love this! Highly recommend." - Sarah</li>
//             <li>"The material is great and feels comfortable." - John</li>
//             <li>"Would definitely buy again." - Maria</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");
  //description is default tab

  return (
    <div className="container my-5">
      {/* Navigator Tabs */}
      <div className="d-flex border-bottom"> 
        <div
          className={`p-3 flex-grow-1 text-center fw-bold border ${
            activeTab === "description" ? "border-bottom-2 border-danger text-danger bg-light" : "text-secondary bg-white"
          }`}
          onClick={() => setActiveTab("description")}
          style={{ cursor: "pointer" }}
        >
          Description
        </div>
        <div
          className={`p-3 flex-grow-1 text-center fw-bold border ${
            activeTab === "reviews" ? "border-bottom-2 border-danger text-danger bg-light" : "text-secondary bg-white"
          }`}
          onClick={() => setActiveTab("reviews")}
          style={{ cursor: "pointer" }}
        >
          Review (132)
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-3 p-4 border">
        {activeTab === "description" && (
          <div>
            <h2>Description</h2>
            <p>
              Clothes are wearable items designed to provide comfort, style, and protection. They come in various materials such as cotton, wool, silk, and synthetic blends, catering to different occasions and seasons. From casual wear like t-shirts, jeans, and hoodies to formal attire like suits, dresses, and blazers, clothing reflects personal style and cultural influences.
            </p>
            <p>
              Modern clothing often incorporates features such as breathable fabrics, stretchable materials, and functional pockets, making them versatile and practical. Fashion trends evolve constantly, offering a range of patterns, colors, and cuts to suit all preferences.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2>Review (132)</h2>
            <p>
              This product has received excellent reviews from customers. With an average rating of 4.5 stars, users praise its quality, comfort, and style. Here's what some of our customers have to say:
            </p>
            <ul>
              <li>"Absolutely love this! Highly recommend." - Sarah</li>
              <li>"The material is great and feels comfortable." - John</li>
              <li>"Would definitely buy again." - Maria</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
