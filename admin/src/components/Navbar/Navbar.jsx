import './Navbar.css'
import nav_logo from '../../assets/Admin_Assets-20250118T130928Z-001/Admin_Assets/nav-logo.svg'
import navProfile from '../../assets/Admin_Assets-20250118T130928Z-001/Admin_Assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className="Navbar">
<img src={nav_logo} className='navlogo' alt="" />
<img src={navProfile} className='navprofile' alt="" />
    </div>
  )
}

export default Navbar