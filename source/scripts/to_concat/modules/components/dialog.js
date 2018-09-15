import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"

const Dialog=({ text, vis, f, f2 }) => {
  return (
    <div
      className={ vis.dialog?"dialog active":"dialog" }
      >
      <p>{`${text}`}</p>
      <Button
        val={ "Cancel" }
        text={ "cancel"}
        f={ f }
        primary={ true }
      />
      <Button
        val={ "delete" }
        f={ f2 }
        text={ "Yes, delete"}
      />
    </div>
  )
}

export { Dialog }
