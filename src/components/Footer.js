import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
<section className='f-wrappper'>
    <div className=' padding flexcenter footer-container'>
        <div className='f-left'>
    <img src='./logo2.png' width={120}></img>
    <span className='secondaryText flexColstart'>Our vision is to make all people<br></br>
    the best place to live for them</span>


        </div>
        <div className=' flexColstart f-right'>
            <span className='PrimaryText'>Information</span>
            <span className='secondaryText'> Pune,Maharashtra</span>
            <div className='flexcenter f-menu'>
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About us</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer;