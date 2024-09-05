import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
<div className="newsletter">
<h1>Get exclusive Offers on Your Email</h1>
<p>Subscribe to out newsletter and stay updated</p>
<div>
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
</div>
</div>  
)
}
