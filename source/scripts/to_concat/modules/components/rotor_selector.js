import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { RotorRingDrop } from "./rotorringdrop"
import { Label } from "./label"
// componet for selecting which rotor -- 1 through six -- to use
const RotorSelector=({ el, i, rotors, r, f }) => {
  console.log(el)
  return (
    <div
      className="rotor-selector b-loose"
    >

    <RotorRingDrop
        r={ r }
        rotorVal={ el.sel }
        rotorsArr={ rotors }
        key={ i }
        f={ f }
        id={ i }
        active={ true }
        valSet={ el.sel>=0?true:false }
      />



      {/* <Label>
        Pick a rotor
      </Label> */}
      {/* {rotors.map((el, i) => {
        return (
          <RotorRingDrop
            r={ r }
            rotorVal={ el.sel }
            rotorsArr={ rotors }
            key={ i }
            f={ f }
            id={ i }
            active={ true }
            valSet={ el.sel>=0?true:false }
          />
        )
      })} */}
    </div>
  )
}
export { RotorSelector }
