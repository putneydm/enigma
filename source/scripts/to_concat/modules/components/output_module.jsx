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
      val = { r.join("") }
      text= { "Copy" }
      f = { f }
      status = { r.length>0?false:true }
      primary = { true }
    />
  </div>

  )
}
export { OutputModule }
