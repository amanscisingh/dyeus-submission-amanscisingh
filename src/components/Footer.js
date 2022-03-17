import React from 'react'

import '../styles/dist/footer.css'
import '../styles/dist/global.css'

import facebookIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'
import rightArrow from '../images/right.svg'
import mailIcon from '../images/mail.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__element footer__social">
            <img className="footer__element__img" src={facebookIcon} alt="Facebook Page"  />
            <img className="footer__element__img" src={twitterIcon} alt="Twitter Page" />
        </div>

        <div className="footer__element footer__routes">
            <div className="footer__routes__element">
                <p className="p footer__element medium">Products <img src={rightArrow} /> </p> 
            </div>
            <div className="footer__routes__element">
                <p className="p footer__element medium">Our Science <img src={rightArrow} /> </p> 
            </div>
            <div className="footer__routes__element">
                <p className="p footer__element medium">Vision & Mission <img src={rightArrow} /> </p> 
            </div>
            <div className="footer__routes__element">
                <p className="p footer__element medium">About Us <img src={rightArrow} /> </p> 
            </div>
        </div>

        <hr className="footer__element"/>

        <p className="footer__element p small">Subscribe to our Newsletter</p>

        <div className="footer__element footer__subscribe">
            <input className="footer__subscribe__input" placeholder="Enter your email..." type="text" name="email" id="email" />
            <button className="footer__subscribe__submitBtn" type="submit"> <img src={mailIcon} /> Activate</button>
        </div>
    </div>
  )
}

export default Footer