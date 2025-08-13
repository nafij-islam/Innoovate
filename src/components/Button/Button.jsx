import React from 'react'
import './button.css'
const Button = ({className,children}) => {
  return (
    <button className={`btn ${className}`}>{children}</button>
  )
}

export default Button