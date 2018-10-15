import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const OutputModule = ({ r }) => {
  return (
    <p
      className="output">
      {[...r].map(el => el)}
  </p>
  )
}
export { OutputModule }
