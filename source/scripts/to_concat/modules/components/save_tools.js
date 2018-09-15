import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"
import { Label } from "./label"

const SaveTools = ({ f1, f2, f3, status = false }) => {
  return (
    <div
      className="save-tools-container"
    >
      <Label>
        Save your machine settings
      </Label>

      <Button
        val = { "save" } 
        text= { "Save" }
        f = { f1 }
        status = { status.save }
        primary = { !status.save?true:false }
      />
      <Button
        val = { "get" }
        text= { "Get" }
        f = { f2 }
       status = { status.get }
       primary = { status.save && !status.get?true:false }
      />
      <Button
        val = { "clear" }
        text = { "Clear" }
        f = { f3 }
        status = { status.clear }
      />
  </div>
  )
}

export { SaveTools }
