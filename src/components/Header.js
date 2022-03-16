import '../styles/dist/header.css'
import cartIcon from '../images/shopping-cart.svg'
import notificationIcon from '../images/bell.svg'
import navbarIcon from '../images/menu.svg'

import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="header__navbarbtn">
            <img className="header__icon" src={navbarIcon} />
        </div>

        <div className="header__notificationbtn">
            <img className="header__icon" src={notificationIcon} />
            <img className="header__icon" src={cartIcon} />
        </div>
    </div>
  )
}

export default Header