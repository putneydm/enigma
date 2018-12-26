import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import Icon from "./icon";

const Button=({ val=undefined, f, status=true, primary=false, children="Button" }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ !status }
      className={ primary?"btn primary":"btn"}
      onClick={ clicky }
      value={ val }
    >
    {children}
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

const ButtonSmall=({ children, val=undefined, f, status=true }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ !status }
      className={ "btn-small"}
      onClick={ clicky }
      value={ val }
    >
    {`${children}`}   
  </button>
  )
}

const ButtonYuge=({ children, val=undefined, f, status=true }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ !status }
      className={ "btn primary btn-yuge"}
      onClick={ clicky }
      value={ val }
    >
    {`${children}`}   
  </button>
  )
}

const ButtonClose=({ children, val=undefined, f, status=false }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(e)
  }
  return (
    <button
      disabled={ status }
      className={ "btn-close"}
      onClick={ clicky }
      value={ val }
    >
      <span 
        className={"hidden"}
      >
        {`${children}`}
      </span>
    </button>
  )
}


export { Button, ButtonSmall, ButtonClose, ButtonYuge }
