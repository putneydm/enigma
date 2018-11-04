import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { Button } from "./button"
import { Output } from "./output"
import { Label } from "./label"

const OutputModule = ({ r, f , labelVal}) => {
  return (
  <div 
    className="output-module"
  >
    <Label>
      {labelVal}
    </Label>
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
