import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New collections Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="hand"/>
                </div>
                <p>Handpicked</p>
                <p>collections</p> 

            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="arrow"/>
            </div>
        </div>
        
        <div className="hero-right"></div>
            <img src={hero_image} alt="hero"/>
    </div>
  )
}
