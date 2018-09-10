import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Button=({ val, f, status, primary=false}) => {
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
    {`${val}`}
  </button>
  )
}

export { Button }
