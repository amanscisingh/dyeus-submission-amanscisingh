import React from 'react'
import '../styles/dist/section1.css'
import '../styles/dist/global.css'
import testtube from '../images/testtube.svg'
import phonecall from '../images/phone-call.svg'
import stars from '../images/stars.svg'

const Section1 = () => {
  return (
    <div className="section1">
        <h1 className="h1 section1__element">About Diana</h1>
        <br />
        <h2 className="h2 section1__element">A platform that looks out for you</h2>
        <br />
        <p className="p section1__element black">
        Diana empowers you to understand how your body works so you can look and feel your best. 
        </p>
        <hr className="section1__element section1__line" />
        <br />

        <h2 className="section1__element h2 bold"> Our Philosophy </h2>
        <br />
        <h1 className="h1 section1__element"> Sustainable wellness is a big-picture, inside out approach </h1>
        <br />
        <p className="p section1__element bold">
        Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
        </p>
        <p className="p section1__element bold">
        That’s why we’ve created an integrated ecosystem of: 
        </p>

        <br />
        <img src={testtube} />
        <br />
        <p className="p section1__element">
        Consciously formulated products that deliver feel-good results fast 
        </p>
        <br />
        <img src={stars} />
        <br />

        <p className="p section1__element">
        In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body 
        </p>

        <br />
        <img src={phonecall} />
        <br />

        <p className="p section1__element">
        In-app consultation portals that connect you with compassionate wellness experts 
        </p>

        <br />

        <p className="p section1__element">
        Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
  

        
    </div>
  )
}

export default Section1