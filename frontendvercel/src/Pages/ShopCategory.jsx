// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'

// const ShopCategory = (props) => {

//   const { all_product } = useContext(ShopContext);

//   return (
//     <div className='shop-category'>
//       <img className='shopcategory-banner' src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
// <div className="shopcategory-sort">
// Sort by <img src={dropdown_icon} alt="" />
//       </div> 
// </div>
//       <div className="shopcategory-products">
//       {all_product && all_product.length > 0 ? (
//   all_product.map((item, i) => {
//     console.log("Processing item:", item); // Debug log
//     console.log("Checking item:", item, props.category === item.category);
//     console.log("Category prop:", props.category);
//     console.log("Item category:", item.category, "Match:", props.category === item.category);
    
//     if (props.category === item.category) {
//       return (
//         <Item
//           key={i}
//           id={item.id}
//           name={item.name}
//           image={item.image}
//           new_price={item.new_price}
//           old_price={item.old_price}
//         />
//       );
//     }
//     return null;
//   })
// ) : (
//   <p>No products found!</p>
// )}
//       </div>
//       <div className="shopcategory-loadmore">
//         EXPLORE MORE...
//       </div>
//     </div>
   
//   )
// }

// export default ShopCategory


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="container-fluid px-0">
      {/* Banner */}
      <div className="row mx-0">
        <div className="col-12 text-center">
          <img className="img-fluid my-3" src={props.banner} alt="" />
        </div>
      </div>

      {/* Sorting & Index */}
      <div className="row mx-0 justify-content-between align-items-center px-4">
        <div className="col-auto">
          <p className="fw-bold">
            <span>Showing 1-12</span> out of 36 products
          </p>
        </div>
        <div className="col-auto border rounded-pill px-3 py-2 d-flex align-items-center">
          Sort by <img src={dropdown_icon} alt="" className="ms-2" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="row mx-0 mt-4">
        {all_product && all_product.length > 0 ? (
          all_product.map((item, i) =>
            props.category === item.category ? (
              <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            ) : null
          )
        ) : (
          <p className="text-center">No products found!</p>
        )}
      </div>

      {/* Load More Button */}
      <div className="row mx-0 mt-5">
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-light rounded-pill px-4 py-3 fw-bold">
            EXPLORE MORE...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
