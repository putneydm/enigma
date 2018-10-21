import React, {Component} from "react"
import ReactDOM from "react-dom"
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
        f = { f1 }
        status = { status.save }
        primary = { !status.save?true:false }
      >
        Save
      </Button>
      <Button
        val = { "get" }
        f = { f2 }
       status = { status.get }
       primary = { status.save && !status.get?true:false }
      >
        Get
      </Button>
      <Button
        val = { "clear" }
        text = { "Clear" }
        f = { f3 }
        status = { status.clear }
      >
      Clear
    </Button>
  </div>
  )
}

export { SaveTools }
