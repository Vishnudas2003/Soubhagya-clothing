import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>Footer
    <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="intagram_icons" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="intagram_icons" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
    </div>

    <div className="footer-copyright">
         <hr />
         <p>&copy; 2024 Soubhagya Clothing. All Rights Reserved</p>
    </div>
    </div>

  )
}