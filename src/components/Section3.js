import React from 'react'

import '../styles/dist/section3.css'
import '../styles/dist/global.css'
import Button from './Button'

const Section3 = () => {
  return (
    <> 
        <div className="section3a">
            <br />
            <h2 className="h2 section3__element bold">
                Liberate Your Everyday wellness
            </h2>

            <h1 className="h1 section3__element">
                Shop our self-care products
            </h1>

            
            <p className="p section3__element" style={{color:"#000"}}>
            Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   
            </p>
        </div>

        <div className="section3b">
            <Button text="Upgrade your self-care" background="linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)" filter="drop-shadow(0px 2px 6px rgba(255,22,64,0.33))" />
            <p className="p section3__element large" style={ { textAlign:"center", color:"#000" } }>
                #NoNasties, we promise!
            </p>
        
        </div>
    </>
  )
}

export default Section3