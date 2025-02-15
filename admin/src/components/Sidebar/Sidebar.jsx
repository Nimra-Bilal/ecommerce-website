// import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom';
import addproducticon from '../../assets/Admin_Assets-20250118T130928Z-001/Admin_Assets/Product_Cart.svg'
import listproducticon from '../../assets/Admin_Assets-20250118T130928Z-001/Admin_Assets/Product_list_icon.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
<Link to ={'/addproduct'} style={{textDecoration:"none"}}>
<div className='sidebar-item'>
  <img src={addproducticon} alt="" />
  <p>add product </p>
</div>
</Link>
<Link to ={'/listproduct'} style={{textDecoration:"none"}}>
<div className='sidebar-item'>
  <img src={listproducticon} alt="" />
  <p>list of products </p>
</div>
</Link>
    </div>
  )
}

export default Sidebar