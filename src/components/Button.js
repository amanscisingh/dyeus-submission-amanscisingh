import React from 'react'
import '../styles/dist/button.css'
import '../styles/dist/global.css'

const Button = ({text, background}) => {

  return (
    <div className="button p" style={{ background: background }}>
        {text}
    </div>
  )
}

export default Button