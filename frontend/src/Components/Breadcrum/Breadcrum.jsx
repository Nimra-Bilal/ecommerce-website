// import React from 'react';
// import './Breadcrum.css';
// import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/breadcrum_arrow.png';

// const Breadcrum = (props) => {
//   const { product } = props;

//   return (
//     <div className="breadcrum">
//       <span>
//         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
//       </span>
//     </div>
//   );
// };

// export default Breadcrum;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {

  const { product } = props;
//product is obj containing category and name

//latest logic
 // Prevent rendering if product is undefined
  if (!product) {
    return <p>Loading...</p>; // Show a placeholder while data loads , data is fetched asynchronously
  }

  return (
    <div className="d-flex align-items-center gap-2 text-secondary fw-semibold text-capitalize my-3 mx-3">
      <span>
        HOME <img src={arrow_icon} alt="" className="mx-1" />
        SHOP <img src={arrow_icon} alt="" className="mx-1" />
        {product.category} <img src={arrow_icon} alt="" className="mx-1" />
        {product.name}
      </span>
    </div>
  );
};

export default Breadcrum;
