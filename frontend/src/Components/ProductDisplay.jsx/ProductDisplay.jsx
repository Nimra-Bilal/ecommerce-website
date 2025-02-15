// import React, { useContext } from 'react'
// import './ProductDisplay.css'
// import star_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_icon.png'
// import stardull_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_dull_icon.png'
// import { ShopContext } from '../../Context/ShopContext'
// const ProductDisplay = (props) => {
//     const {product}=props;
//     const {addToCart} = useContext(ShopContext);
//   return (
//     <div className='productdisplay'>
//         <div className="productdisplay-left">
// <div className="productdisplay-imglist">
//     <img src={product.image} alt="" />
//     <img src={product.image} alt="" />
//     <img src={product.image} alt="" />
//     <img src={product.image} alt="" />
// </div>
// <div className="productdisplay-image">
//     <img className="productdisplay-main-image" src={product.image} alt="" />
// </div>
//         </div>
//         <div className="productdisplay-right">
// <h1>{product.name}</h1>
// <div className="productdisplay-right-star">
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={stardull_icon} alt="" />
//     <p>(122)</p>
// </div>
// <div className="productdisplay-right-prices">
//     <div className="productdisplay-right-price-old">
// ${product.old_price}
//     </div>
//     <div className="productdisplay-right-price-new">
//     ${product.new_price}
//         </div></div>
//         <div className="productdisplay-right-description">
//         hoodie is a comfortable, casual sweatshirt with a hood attached at the neckline. It usually features long sleeves and is made from soft materials like cotton, fleece, or polyester blends, making it warm and cozy. 
      
//         <div className="productdisplay-right-size">
//             <h1>SELECT SIZE</h1>
//             <div className="productdisplay-right-sizes">
//                 <div>S</div>
//                 <div>M</div>
//                 <div>L</div>
//                 <div>XL</div>
//                 <div>XXL</div>
//             </div>
       
//         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
//         <p className="productdisplay-right-category">
//             <span>Category: </span><span> Women , T-Shirt , Crop-Top</span>
//             <span> Tags:</span><span> Modern , Latest </span>
//         </p></div>  </div>

//         </div>
//     </div>
//   )
// }

// export default ProductDisplay


import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_icon.png';
import stardull_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  //Product detail's from props

  return (
    <div className="container py-5">
      <div className="row g-1 align-items-center">
        {/* Left Section */}
        <div className="col-md-5 d-flex flex-column align-items-center">
          <div className="d-flex flex-md-row flex-column align-items-center gap-2">
            <div className="d-flex flex-md-column gap-2">
              <img src={product.image} alt="" className="img-thumbnail" style={{ width: '100px', height: '120px', cursor: 'pointer' }} />
              <img src={product.image} alt="" className="img-thumbnail" style={{ width: '100px', height: '120px', cursor: 'pointer' }} />
              <img src={product.image} alt="" className="img-thumbnail" style={{ width: '100px', height: '120px', cursor: 'pointer' }} />
              <img src={product.image} alt="" className="img-thumbnail" style={{ width: '100px', height: '120px', cursor: 'pointer' }} />
            </div>
            <div>
              <img src={product.image} alt="" className="img-fluid border rounded" style={{ maxWidth: '1000px' }} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <h1 className="fw-bold">{product.name}</h1>
          <div className="d-flex align-items-center gap-2">
            <img src={star_icon} alt="" width="20" />
            <img src={star_icon} alt="" width="20" />
            <img src={star_icon} alt="" width="20" />
            <img src={star_icon} alt="" width="20" />
            <img src={stardull_icon} alt="" width="20" />
            <p className="mb-0">(122)</p>
          </div>

          <div className="d-flex gap-3 align-items-center mt-3">
            <div className="text-decoration-line-through text-muted fs-5">${product.old_price}</div>
            <div className="fs-4 text-danger fw-bold">${product.new_price}</div>
          </div>

          <p className="mt-3 text-secondary">
            Hoodie is a comfortable, casual sweatshirt with a hood attached at the neckline. It usually features long sleeves and is made from soft materials like cotton, fleece, or polyester blends, making it warm and cozy.
          </p>

          <h5 className="mt-4">SELECT SIZE</h5>
          <div className="d-flex gap-2">
            <button className="btn btn-light border">S</button>
            <button className="btn btn-light border">M</button>
            <button className="btn btn-light border">L</button>
            <button className="btn btn-light border">XL</button>
            <button className="btn btn-light border">XXL</button>
          </div>

          <button className="btn btn-danger mt-4 px-4 py-2" onClick={() => addToCart(product.id)}>
            ADD TO CART
          </button>

          <p className="mt-3 text-muted">
            <strong>Category:</strong> {product.category} clothing <br />
            <strong>Tags:</strong> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
