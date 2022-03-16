import React from 'react'
import '../styles/dist/section4.css'
import '../styles/dist/global.css'
import sqimg1 from '../images/1.jpg'
import sqimg2 from '../images/2.jpg'
import sqimg3 from '../images/3.jpg'
import sqimg4 from '../images/4.jpg'
import Button from './Button'

const Section4 = () => {
  return (
    <div className="section4">
        <br />
        <h1 className="h1 section4__element">
            Track your mood
        </h1>

        <p className="p section4__element">
            All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 
        </p>

        <Button text="Track your mood on the app" background="linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)" />

        <br />

        <div className="section4__images">
            <img className="section4__images__img" alt="Image" src={sqimg1}  />
            <img className="section4__images__img" alt="Image" src={sqimg2}  />
            <img className="section4__images__img" alt="Image" src={sqimg3}  />
            <img className="section4__images__img" alt="Image" src={sqimg4}  />
        </div>


    </div>
  )
}

export default Section4