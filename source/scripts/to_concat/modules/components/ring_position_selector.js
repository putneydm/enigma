import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { RingDrop } from "./RingDrop"
import { Label } from "./label"

const RingPositionSelector=({count, r, f}) => {
  return (
    <div
      className="rotor-selector"
    >
      <Label>
        Set locking ring position
      </Label>
      {count.map((el, i) => {
        return (
          <RingDrop
            val={ el.r?el.r:0 }
            r={r}
            key={i}
            id={i}
            f={ f }
            active={ el.active }
            valSet={ el.r?true:false } 
          />
        )
     })}
    </div>
  )
}
export {RingPositionSelector}
