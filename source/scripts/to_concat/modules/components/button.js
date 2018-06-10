import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Button = ({val, f}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      className = "button"
      onClick = {clicky}
    >
    {`${val}`}
  </button>
  )
}

export {Button}
