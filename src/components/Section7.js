import React from 'react'

import '../styles/dist/section7.css'
import '../styles/dist/global.css'

import boxImg from '../images/period boximg.png'
import ButtonSmall from './ButtonSmall'

const Section7 = () => {
  return (
    <div className="section7">
        <br />
        <h1 className="h1 section7__element" style={{color:"white"}}>
            Get your personalized period box
        </h1>

        <img className="section7__image" src={boxImg} alt="Image of personalized period then handled sharer." srcset="" />

        <p className="p section7__element" style={{color:"white"}}>
            Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. 
        </p>

        <ButtonSmall text="Create your box on the app" background="#000" height="25px" />
    </div>
  )
}

export default Section7