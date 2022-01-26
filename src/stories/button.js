import React from 'react'
import './button.css'

function Button (props) {
  const { color = 'pomodoro', children, ...rest } = props
  return (
    <button className={`button ${color}`} {...rest}>
      {children}
    </button>
  )
}

export default Button