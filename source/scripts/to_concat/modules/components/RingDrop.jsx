import React, {Component} from "react"
import ReactDOM from "react-dom"
import { ListSelector } from "./listselector"
import PropTypes from 'prop-types'

//this component sets the ring position
const RingDrop=({val, r, id, f, active=false, valSet=false,  animate=false }) => {
  const clicky=(e) => {
    e.preventDefault()
    f(id, e.target.value)
 }
  return (
  <div
    className={ !active?"notes-picker-icn inactive": !valSet?"notes-picker-icn no-val": valSet && animate? "notes-picker-icn animate": "notes-picker-icn" }
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
            val={i}
            disabledState={ val===i?"active":"inactive" }
          >
            {el}
          </ListSelector>
        )
     })}
    </ul>
  </div>
  )
}
RingDrop.proptypes = {
  val: PropTypes.num,
  r: PropTypes.array,
  id: PropTypes.num,
  f: PropTypes.func,
  active: PropTypes.bool,
  valSet: PropTypes.bool,
  animate: PropTypes.bool
}

export { RingDrop }
