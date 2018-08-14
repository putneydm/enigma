import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { RingDrop } from "./RingDrop"
import { Label } from "./label"

const RotorPositionSelector=({ count, r, f }) => {
  return (
    <div
      className="rotor-selector"
    >
      <Label>
        Set initial rotor position
      </Label>
      {count.map((el, i) => {
        return (
          <RingDrop
            val={ el.val?el.val:0 }
            r={ r }
            key= {i }
            id={ i }
            f={ f }
            active={ el.active }
            valSet={ el.val>=0?true:false }
          />
        )
     })}
    </div>
  )
}
export { RotorPositionSelector }
