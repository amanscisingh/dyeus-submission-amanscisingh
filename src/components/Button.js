import React from 'react'
import '../styles/dist/button.css'
import '../styles/dist/global.css'

const Button = ({text, background, filter}) => {

  return (
    <div className="button p" style={{ background: background, filter:filter}}>
        {text}
    </div>
  )
}

export default Button