import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { RotorRingDrop } from "./rotorringdrop"
import { Label } from "./label"
// componet for selecting which rotor -- 1 through six -- to use
const RotorSelectorDropdown=({ r, rotor, f, id, rotorsArr }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(parseInt(e.target.id), parseInt(e.target.value))
  }
  return (
    <select
      onChange={ clicky }
      id={ id }
      value={ rotor }
      className="hidden"
    >
      <option
        disabled="true"
        hidden="true"
        value="def"
      >
        Choose Rotor
      </option>
      {r.map((el, i) => {
        return (
          <option
            key={ i }
            value={ i }
            disabled={ rotorsArr.some(ele => ele.sel === i) }
          >
            {i+1}
          </option>
        )
      })}
    </select>
  )
}
const RotorSelector=({ rotors, r, f }) => {
  return (
    <div
      className="rotor-selector"
    >
      <Label
        content="Pick a rotor ..."
      />
      {rotors.map((el, i) => {
        return (
          <RotorRingDrop
            r= { r }
            rotorVal={ el.sel }
            rotorsArr={ rotors }
            key={ i }
            f={ f }
            id={ i }
          />
        )
      })}
      {rotors.map((el, i) => {
        return (
          <RotorSelectorDropdown
            r={ r }
            rotor={ el.sel }
            rotorsArr={ rotors }
            key={ i }
            f={ f }
            id={ i }
          />
        )
      })}
    </div>
  )
}
export { RotorSelector }
