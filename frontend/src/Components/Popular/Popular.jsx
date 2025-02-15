// import React, { useEffect, useState } from 'react'
// import './Popular.css'
// import Item from '../Item/Item'
// const Popular = () => {

//   const [popularProducts,setPopularProducts]=useState([]);
// useEffect(()=>{
//   fetch('http://localhost:5000/popularinwoman')
//   .then(response => response.json())
//   .then(data => setPopularProducts(data));
// },[])

//   return (
//     <div className='Popular'>
//         <h1>POPULAR IN WOMEN</h1>
//         <hr/>
// <div className="popular-item">
//     {popularProducts.map((item,i)=>{
//         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//     })}
// </div>
//     </div>
//   )
// }

// export default Popular

import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popularinwoman')
      .then(response => response.json())
      .then(data => setPopularProducts(data));
  }, []);

  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold">POPULAR IN WOMEN</h1>
      <hr className="mx-auto bg-dark" style={{ width: '200px', height: '6px', borderRadius: '10px' }} />

      <div className="row g-4 mt-4">
        {popularProducts.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
