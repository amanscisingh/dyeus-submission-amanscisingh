import React from 'react'

import '../styles/dist/section5.css'
import '../styles/dist/global.css'
import Button from './Button'

import calender from '../images/calender.jpg'

const Section5 = () => {
  return (
    <div className="section5">  
        <div className="section5a">
          <h1 className="h1 section5__element">
                Track your period
            </h1>
            
            <p className="p section5__element">
            Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. 
            </p>
            <br />
            <Button text="Track Your Period on the app" background="linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)" filter="drop-shadow(0px 2px 6px rgba(255,22,64,0.33))"/>
            <br />
        </div>

        <div className="section5b">
          <img className="section5__image" src={calender} alt="Calender Image" />

        </div>


        
    </div>
  )
}

export default Section5