import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"

const SaveTools = ({ f1, f2, f3, status = false }) => {
  return (
    <div
      className = "rotor-container"
    >
      <Button
        val = { "Save" }
        f = { f1 }
        status = { status.save }
      />
      <Button
        val = { "Get" }
        f = { f2 }
       status = { status.get }
      />
      <Button
        val = { "Clear" }
        f = { f3 }
        status = { status.clear }
      />
  </div>
  )
}

export { SaveTools }
