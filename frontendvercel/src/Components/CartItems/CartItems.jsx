

import './CartItems.css';
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removefromcart } = useContext(ShopContext);

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
                  <td><img src={remove_icon} onClick={() => removefromcart(e.id)} alt="Remove" className="btn btn-sm" /></td>
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

