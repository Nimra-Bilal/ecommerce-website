// import React, { useEffect, useState } from 'react'
// import './NewCollections.css'
// import Item from '../Item/Item'
// const NewCollections = () => {
//     const [new_collection,setNew_collection]=useState([]);
//     useEffect(()=>{
//       fetch('http://localhost:5000/newcollections')
//       .then((response)=>response.json())
//       .then((data)=>setNew_collection(data));
//     },[])
//   return (
//     <div className='new-collection'  >
//        <h1>New Collections</h1>
//        <hr />
//        <div className="collections">
//         {new_collection.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//         })}
//        </div>
//        </div>
//   )
// }

// export default NewCollections


// import React, { useEffect, useState } from 'react';
// import Item from '../Item/Item';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import

// const NewCollections = () => {
//     const [new_collection, setNew_collection] = useState([]);
//     //useState → Stores the collection data.
// //useEffect → Fetches data on component mount.

//     useEffect(() => {
//         fetch('http://localhost:5000/newcollections')
//             .then((response) => response.json())
//             .then((data) => setNew_collection(data));
//     }, []);

//     return (
//         <div className="container my-5 text-center"> 
//             <h1 className="fw-bold">New Collections</h1>
//             <hr className="w-25 mx-auto border-dark" />

//             <div className="row g-4 mt-4"> 
//                 {new_collection.map((item, i) => (
//                     <div key={i} className="col-lg-4 col-md-6 col-sm-12"> 
//                         <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// // key i will make each div unique for fast rendering , map is running a loop , will go through each item in the array and return a new item
// export default NewCollections;


import React from 'react';
import Item from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import
import all_product from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/all_product';

const NewCollections = () => {
    // Get the first 8 products from all_product
    const new_collection = all_product.slice(8, 20);

    return (
        <div className="container my-5 text-center"> 
            <h1 className="fw-bold">New Collections</h1>
            <hr className="w-25 mx-auto border-dark" />

            <div className="row g-4 mt-4"> 
                {new_collection.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-12"> 
                        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;

