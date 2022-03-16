import React from 'react'

import rightImg from '../images/right.svg'
import '../styles/dist/button.css'
import '../styles/dist/global.css'

const ButtonSmall = ({text, background}) => {
  return (
    <div className="buttonsmall p" style={{ background: background}}>
        {text} 
        <img src={rightImg} />
    </div>
  )
}

export default ButtonSmall