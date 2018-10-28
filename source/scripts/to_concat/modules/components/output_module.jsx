import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { Button } from "./button"
import { Output } from "./output"

const OutputModule = ({ r, f }) => {
  return (
  <div 
    className="output-module"
  >
    <Output
    >
      {[...r].map(el => el)}
    </Output>
  
    <Button
      val = { r.join("") }
      f = { f }
      status = { r.length>0?false:true }
      primary = { true }
    >
      Copy
    </Button>  
  </div>

  )
}
export { OutputModule }
