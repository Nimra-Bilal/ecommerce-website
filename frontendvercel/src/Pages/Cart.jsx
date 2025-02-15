// import React from "react";
// import CartItems from "../Components/CartItems/CartItems";

// const Cart = () => {
//   return (
//     <div>
//       <CartItems />
//     </div>
//   );
// };

// export default Cart;
 

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Cart;
