import React from 'react'
import '../styles/dist/button.css'
import '../styles/dist/global.css'

const Button = ({text}) => {

  return (
    <div className="button p">
        {text}
    </div>
  )
}

export default Button