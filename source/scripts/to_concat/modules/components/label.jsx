import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const Label=({ children }) => {
  return (
    <label
      className="label"
    >
    {children}
  </label>
  )
}
Label.propTypes = {
  children: PropTypes.string
}

const Header=({ children }) => { 
  return (
    <h2
      className="header"
    >
    {children}
  </h2>
  )
}
Header.propTypes = {
  children: PropTypes.string
}

export { Label, Header }
