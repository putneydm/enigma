import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

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
Button.propTypes = {
  text: PropTypes.string,
  val: PropTypes.string,
  f: PropTypes.func,
  status: PropTypes.bool,
  primary: PropTypes.bool
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
