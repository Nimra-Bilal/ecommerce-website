// import React, { useContext, useRef, useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png'
// import cart_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_icon.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'
// import nav_dropdown from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/nav_dropdown.png'
// export const Navbar = () => {

// const [menu,setMenu]=useState("shop");
// const {getTotalCartItems}=useContext(ShopContext);
// const menuRef= useRef();
// const dropdown_toggle = (e) => {
//   menuRef.current.classList.toggle('Nav-menu-visible');
//   e.target.classList.toggle('open');
// }
//   return (
//     <div className='Navbar'>
//         <div className="Nav-logo">
//        <img id='l' src={logo} alt="" />
//        <p>BAROQUE</p>
//         </div>
//         <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
//         <ul ref={menuRef} className="Nav-menu">
//             <li onClick={()=>(setMenu("shop"))}> <Link style={{textDecoration:'none'}} to = '/'>shop</Link> {menu==="shop"?<hr/>:<></>}</li>
//             <li onClick={()=>(setMenu("mens"))}><Link style={{textDecoration:'none'}}  to = '/mens'>mens</Link>  {menu==="mens"?<hr/>:<></>}</li>
//             <li onClick={()=>(setMenu("womens"))}><Link style={{textDecoration:'none'}}  to = '/womens'>womens</Link>{menu==="womens"?<hr/>:<></>}</li>
//             <li onClick={()=>(setMenu("kids"))}><Link style={{textDecoration:'none'}}  to = '/kids'>kids</Link>  {menu==="kids"?<hr/>:<></>}</li>
//         </ul>
//         <div className="nav-login-cart">
          
//         {localStorage.getItem('auth-token')?
//         <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
//         <Link to = '/login'><button>Login</button></Link> } 

//             <Link to = '/cart'><img  src={cart_icon} alt="cart_icon" /></Link>
//             <div className="nav-cart-count">{ getTotalCartItems()}</div>

//         </div>
//     </div>
//   )
// }


import React, { useContext, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/nav_dropdown.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  //useState – To track the active menu.
//useRef – For toggling the dropdown menu

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('show');
    e.target.classList.toggle('open');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm p-3">
      <div className="container-fluid">
        {/* Left Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="50" className="me-2" />
          <span className="fs-4 fw-bold">BAROQUE</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" onClick={dropdown_toggle}>
          <img src={nav_dropdown} alt="menu" width="30" />
        </button>

        {/* Centered Navigation Menu */}
        <div ref={menuRef} className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav text-center">
            <li className="nav-item px-3" onClick={() => setMenu("shop")}>
              <Link className="nav-link" to="/">Shop</Link>
              {menu === "shop" && <hr className="border-danger w-50 mx-auto" />}
            </li>
            <li className="nav-item px-3" onClick={() => setMenu("mens")}>
              <Link className="nav-link" to="/mens">Mens</Link>
              {menu === "mens" && <hr className="border-danger w-50 mx-auto" />}
            </li>
            <li className="nav-item px-3" onClick={() => setMenu("womens")}>
              <Link className="nav-link" to="/womens">Womens</Link>
              {menu === "womens" && <hr className="border-danger w-50 mx-auto" />}
            </li>
            <li className="nav-item px-3" onClick={() => setMenu("kids")}>
              <Link className="nav-link" to="/kids">Kids</Link>
              {menu === "kids" && <hr className="border-danger w-50 mx-auto" />}
            </li>
          </ul>
        </div>

        {/* Right Side (Login & Cart) */}
        <div className="d-flex align-items-center">
          {localStorage.getItem('auth-token') ? (
            <button className="btn btn-dark me-3" onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-dark me-3">Login</button>
            </Link>
          )}

          <Link to="/cart" className="position-relative">
            <img src={cart_icon} alt="Cart" width="40" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {getTotalCartItems()}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
