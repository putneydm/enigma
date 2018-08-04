import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { ListSelector } from "./listselector"

const RotorRingDrop=({ r, rotorVal, f, id, rotorsArr }) => {
  const clicky=(e) => {
    e.preventDefault()
    const test=e.target.classList.contains("disabled")
    !test?f(id, e.target.value):f(id, rotorVal)
 }
  return (
  <div
    className="notes-picker-icn"
  >
    <ul
      className="notes-colors"
      id={id}
      onClick={ clicky }
    >
      {r.map((el, i) => {
        return (
          <ListSelector
            key={i}
            dispVal={el}
            val={i}
            disabledState={ rotorVal===i?"active":rotorsArr.some(ele => ele.sel===i) && rotorVal !== i? "disabled": "inactive"}
          />
        )
     })}
    </ul>
  </div>
  )
}
export { RotorRingDrop }
