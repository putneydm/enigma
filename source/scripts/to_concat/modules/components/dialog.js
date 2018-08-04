import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"

const Dialog=({ text, vis, f, f2 }) => {
  return (
    <dialog
      open={ vis.dialog }
      className="dialog"
      >
      <p>{`${text}`}</p>
      <Button
        val={ "Yes" }
        f={ f2 }
      />
      <Button
        val={ "Cancel" }
        f={ f }
      />
    </dialog>
  )
}

export { Dialog }
