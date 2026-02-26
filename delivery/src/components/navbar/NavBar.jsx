import './navbar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import { StoreContext } from '../../context/StoreContext'

function NavBar({setshowLogin}) {
    const [menu, setMenu] = useState("home")
    const { getTotalcarAmount, token, setToken} = useContext(StoreContext)
    const navigate = useNavigate()

    const logout = () =>{
     localStorage.removeItem("token")
     setToken("")
     navigate("/")
    }

  return (
    <div className='navbar'>
       <Link to={'/'}> 
         <img src={assets.logo} alt="" className="logo" />
       </Link>

    <ul className="navbar-Menu">
        <Link to='/' onClick={()=> setMenu("home")} className={menu === 'home'? "active": ""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")}  className={menu === 'menu'? "active": ""} >menu</a>
        <a href='#app-download' onClick={()=> setMenu("mopile-App")} className={menu === 'mopile-App'? "active": ""}>mopile-App</a>
        <a href='#footer'  onClick={()=> setMenu("Contact Us")} className={menu === 'Contact Us'? "active": ""}>Contact Us</a> 
    </ul>

    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-saerch-icon">
            <Link to='/cart'>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalcarAmount()===0?"":"dot"} ></div>
        </div>

        {!token ?
          <button onClick={()=> setshowLogin(true)}>Sign In</button>
        :
         <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
                
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" />
                  <p>orders</p>
                </li> 

                <hr />

                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>logOut</p>
                </li> 
        
            </ul>
         </div>
        }
    </div>
    </div>
  )
}

export default NavBar