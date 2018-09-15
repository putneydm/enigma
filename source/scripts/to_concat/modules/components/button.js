import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Button=({ text="Button", val, f, status=false, primary=false}) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ status }
      className={ primary?"primary":"button"}
      onClick={ clicky }
      value={ val }
    >
    {`${text}`}
  </button>
  )
}

export { Button }
