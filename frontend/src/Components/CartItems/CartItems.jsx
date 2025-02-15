// import './CartItems.css';
// import React, { useContext } from 'react';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//         <hr />
//       </div>
     
//       {all_product.map((e) => {
//         // Ensure cartItems[e.id] exists and is greater than 0
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt={e.name} className="carticon-product-icon" />
//                 <p>{e.name}</p>
//                 <p>${e.new_price.toFixed(2)}</p>
//                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                 <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
//                 <img
//                   src={remove_icon}
//                   onClick={() => removeFromCart(e.id)}
//                   alt="Remove Item"
//                   className="remove-icon"
//                 />
//               </div>
//            <hr /> </div> 
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//             <h1>CART TOTAL</h1>
//             <div>
//                 <div className="cartitems-total-item">
//                     <p>SUBTOTAL : </p>
//                     <p>${getTotalCartAmount()}</p>
                    
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <p>SHIPPING FEE</p>
//                     <p>FREE</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <h3>TOTAL : </h3>
//                     <h3>${getTotalCartAmount()}</h3>
//                 </div>
//             </div>
//             <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//             <p>If you have a promo code , enter it here </p>
//             <div className="cartitems-promobox">
//                 <input type="text" placeholder='promo code' />
//                 <button>SUBMIT</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

import './CartItems.css';
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container my-5">
      <div className="table-responsive">
        <table className="table text-secondary text-center align-middle">
          <thead className="bg-light">
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody> 
            {all_product.map((e) =>
              cartItems[e.id] > 0 ? (
                <tr key={e.id}>
                  <td><img src={e.image} alt={e.name} className="img-fluid" style={{ height: "50px" }} /></td>
                  <td>{e.name}</td>
                  <td>${e.new_price.toFixed(2)}</td>
                  <td><button className="btn btn-outline-secondary">{cartItems[e.id]}</button></td>
                  <td>${(e.new_price * cartItems[e.id]).toFixed(2)}</td>
                  <td><img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" className="btn btn-sm" /></td>
                </tr> 
                //to fixed 2 means to display 2 decimal places
                //e is an obj
                //this func iterates through allproducts and only shows the products that are in data 
              ) : null
            )}
          </tbody>
        </table>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h3>CART TOTAL</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>SUBTOTAL:</span> <strong>${getTotalCartAmount()}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>SHIPPING FEE:</span> <strong>FREE</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <span>TOTAL:</span> <strong>${getTotalCartAmount()}</strong>
            </li>
          </ul>
          <button className="btn btn-danger w-100 mt-3">PROCEED TO CHECKOUT</button>
        </div>

        <div className="col-md-6">
          <p>If you have a promo code, enter it here:</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code" />
            <button className="btn btn-dark">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

