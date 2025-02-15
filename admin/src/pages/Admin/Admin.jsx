
// // import React from "react"
// import { Routes , Route } from "react-router-dom";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import AddProduct from "../../components/AddProduct/AddProduct";
// import ListProduct from "../../components/ListProduct/ListProduct";
// const admin = () => {
//   return (
//     <div className="admin">
//       <Sidebar/>
//       <Routes>
//         <Route path='/addproduct' element={<AddProduct/>}/>
//         <Route path='/listproduct' element={<ListProduct/>}/>
        
//       </Routes>
//     </div>
//   )
// }

// export default admin

import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddProduct from "../../components/AddProduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";
import "./Admin.css";  // Import CSS

const Admin = () => {
  return (
    <div className="admin">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
