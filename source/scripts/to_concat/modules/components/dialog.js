import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"

const Dialog=({ text, vis, f, f2 }) => {
  return (
    <div
      className={ vis.dialog?"backdrop active":"backdrop"}
    >
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
        primary={ true }
      />
    </dialog>
  </div>
  )
}

export { Dialog }
