import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
const [menu, setMenu] = React.useState("shop")

  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} alt='logo' />
            <p>Shop</p>
        </div>
            <ul className='navbar__menu'>
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>                
            </ul>
        <div className='navbar_login_cart'>
        <button>Login</button>
        <img src={cart_icon} alt='cart' />
        <div className='navbar_cart_count'>0</div>
        </div>
        </div>
    )
}
