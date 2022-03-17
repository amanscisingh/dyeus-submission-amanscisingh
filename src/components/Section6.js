import React from 'react'
import '../styles/dist/section6.css'
import '../styles/dist/global.css'
import Button from './Button'

import doctorImg from '../images/doctor.jpg'

const Section6 = () => {
  return (
    <div className="section6">
        <h1 className="h1 section6__element">
            Consult with wellness experts
        </h1>

        <p className="p section6__element">
        Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. 
        </p>

        <Button text="Get a consultation" background="linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)" filter="drop-shadow(0px 2px 16px rgba(71, 222, 255, 0.33))" />
        <img className="section6__image" src={doctorImg} alt="Image of doctor" />
    </div>
  )
}

export default Section6