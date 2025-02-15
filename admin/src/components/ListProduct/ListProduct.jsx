// // import React from 'react'
// import { useEffect, useState } from 'react'
// import './ListProduct.css'
// import cross_icon from '../../assets/Admin_Assets-20250118T130928Z-001/Admin_Assets/cross_icon.png'
// const ListProduct = () => {

// const [allproducts,setAllProducts]=useState([]);

// // const fetchInfo=async ()=>{
// //   await fetch('http://localhost:5000/allproducts')
// //   .then((res)=>res.json())
// //   .then(data => console.log(data));
// //   .then((data)=>{setAllProducts(data)});
// // }


// const fetchInfo = async () => {
//   try {
//     const res = await fetch('http://localhost:5000/allproducts');
//     const data = await res.json();
//     setAllProducts(data);
//     console.log("Fetched products:", data); // Debugging
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

// useEffect(()=>{
//   fetchInfo();
// },[])

//   return (
//     <div className="listproduct">
//       <h1>All Products List </h1>
//       <div className="listproduct-formatmain">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Remove</p> 

//         </div>

//         <div className="listproduct-allproducts">
//           <hr />
//           {allproducts.map((product,index)=>{
//             return <> <div key={index} className="listproduct-formatmain listproduct-format">
// <img src={product.image} alt="" className="listproduct-producticon" />
//             <p>{product.name}</p>
//             <p>{product.old_price} </p>
//             <p>{product.new_price}</p>
//             <p>{product.category}</p>
//             <img src={cross_icon} alt="" className="listproduct-removeicon" />
//             </div>
//             <hr /> </>
//           })}
//         </div>
//       </div>
     
//   )
// }

// export default ListProduct

import { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/Admin_Assets-20250118T130928Z-001/Admin_Assets/cross_icon.png'
import './ListProduct.css';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
//allproducts is an array that is initially empty


  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:5000/allproducts');
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  //data stored in allproducts

  useEffect(() => {
    fetchInfo();
  }, []);
  //calls fetchinfo and used only once when the component is mounted since dependencyarray is empty


  // Function to remove product
  const removeProduct = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/removeproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), 
        // Send product ID to remove
         credentials: "include" ,
         //necearry auth tokens are sent along with the request
      });

      const result = await response.json();
      if (result.success) {
        // Remove the product from the state
        setAllProducts(allproducts.filter((product) => product.id !== id));
        //allproducts is returned with new filtered array that dont contain the removed id 
      } else {
        console.error('Failed to remove product:', result.message);
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-formatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-formatmain listproduct-format">
            <img src={product.image} alt="" className="listproduct-producticon" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img
              src={cross_icon}
              alt="Remove"
              className="listproduct-removeicon"
              onClick={() => removeProduct(product.id)} // Call removeProduct on click
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
        <hr />
      </div> 
    </div>
  );
};

export default ListProduct;
