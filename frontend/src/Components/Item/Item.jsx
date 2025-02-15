// import React from 'react';
// import './Item.css';
// import { Link } from 'react-router-dom';
// const Item = (props) => {
//   return (
//     <div className="item">
//     <Link to = {`/Product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name || "item"} /></Link> 
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">${props.new_price}</div>
//         <div className="item-price-old">${props.old_price}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React from 'react';
import { Link } from 'react-router-dom';

//passed productDetails via props
const Item = (props) => {
  return (
    <div className="col-lg-10 col-md-6 col-sm-6 mb-4">
      <div className="card text-center border-0 shadow-sm">
        <Link to={`/Product/${props.id}`}>
          <img 
            onClick={() => window.scrollTo(0, 0)} 
            src={props.image} 
            alt={props.name || "item"} 
            className="card-img-top" 
          />
        </Link>
        <div className="card-body">
          <p className="card-title h4 m-2">{props.name}</p>
          <div className="d-flex justify-content-center gap-3">
            <span className="fw-bold text-dark fs-5">${props.new_price}</span>
            <span className="text-muted text-decoration-line-through fs-6">${props.old_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
