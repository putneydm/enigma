import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { RingDrop } from "./RingDrop"
import { Label } from "./label"

// component that allows user to set the rotor position
const Dropdown=({ val, r, id, f }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(id, e.target.value)
  }
  return (
    <div
      className={"hidden"}
    >
      <select
        onChange={ clicky }
        id={ id }
        value={ val }
      >
        <option
          disabled="true"
          hidden="true"
          value="def"
        >
          Rotor pos
        </option>
        {r.map((el, i) => {
          return (
            <option
                key={ i }
                value={ i }
              >
                {`${el}`}
            </option>
          )
        })}
      </select>
  </div>
  )
}
const Rotors=({ count, r, f }) => {
  return (
    <div
      className="rotor-selector"
    >
      <Label
        content="Set the initial positions of the rotors"
      />
      {count.map((el, i) => {
        return (
          <Dropdown
            val={ el.val }
            r={ r }
            key={ i }
            id={ i }
            f={ f }
          />
        )
      })}
      {count.map((el, i) => {
        return (
          <RingDrop
            val={ el.val }
            r={ r }
            key= {i }
            id={ i }
            f={ f }
          />
        )
     })}
    </div>
  )
}
export { Rotors }
