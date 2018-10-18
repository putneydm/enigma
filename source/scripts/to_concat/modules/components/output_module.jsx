import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { Button } from "./button"

const OutputModule = ({ r, f }) => {
  return (
  <div>
    <p
      className="output">
      {[...r].map(el => el)}
    </p>
    <Button
      val = { "copy" }
      text= { "Copy" }
      f = { f }
      status = { false }
      primary = { true }
    />
  </div>

  )
}
export { OutputModule }
