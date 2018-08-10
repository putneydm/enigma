import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { ListSelector } from "./listselector"

//this component sets the ring position
const RingDrop=({val, r, id, f, active=false}) => {
  const clicky=(e) => {
    console.log(e.target.value);
    e.preventDefault()
    f(id, e.target.value)
 }
  return (
  <div
    className={ active?"notes-picker-icn": "notes-picker-icn inactive" }
  >
    <ul
      className={"notes-colors"}
      id={id}
      onClick={ clicky }
    >
      {r.map((el, i) => {
        return (
          <ListSelector
            key={i}
            dispVal={el}
            val={i}
            disabledState={ val===i?"active":"inactive" }
          />
        )
     })}
    </ul>
  </div>
  )
}

export { RingDrop }
