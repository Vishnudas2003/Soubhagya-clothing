import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
const [menu, setMenu] = React.useState("shop")

  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} alt='logo' />
            <p>Shop</p>
        </div>
            <ul className='navbar__menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>                
            </ul>
        <div className='navbar_login_cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart' ><img src={cart_icon} alt='cart'/></Link>
        <div className='navbar_cart_count'>0</div>
        </div>
        </div>
    )
}
