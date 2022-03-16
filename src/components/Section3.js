import React from 'react'

import '../styles/dist/section3.css'
import '../styles/dist/global.css'
import Button from './Button'

const Section3 = () => {
  return (
    <> 
        <div className="section3a">
            <br />
            <h2 className="h2 section3__element">
                Liberate Your Everyday wellness
            </h2>

            <h1 className="h1 section3__element">
                Shop our self-care products
            </h1>

            
            <p className="p section3__element">
            Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   
            </p>
        </div>

        <div className="section3b">
            <Button text="Upgrade your self-care" />
            <p className="p section3__element large" style={ { textAlign:"center" } }>
                #NoNasties, we promise!
            </p>
        
        </div>
    </>
  )
}

export default Section3