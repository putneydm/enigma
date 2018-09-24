import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Button=({ text="Button", val=undefined, f, status=false, primary=false}) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ status }
      className={ primary?"btn primary":"btn"}
      onClick={ clicky }
      value={ val }
    >
    {`${text}`}
  </button>
  )
}

const ButtonSmall=({ children, val=undefined, f, status=false }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ status }
      className={ "btn-small"}
      onClick={ clicky }
      value={ val }
    >
    {`${children}`}
  </button>
  )
}

export { Button, ButtonSmall }
