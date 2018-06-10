import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import {Button} from "./button"

const SaveButton = ({f1, f2, f3}) => {
  return (
    <div
      className = "rotor-container"
    >
      <Button
        val = {"Save"}
        f = {f1}
      />
      <Button
        val = {"Get"}
        f = {f2}
      />
      <Button
        val = {"Clear"}
        f = {f3}
      />
  </div>
  )
}

export {SaveButton}
