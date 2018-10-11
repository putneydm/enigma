import React, {Component} from "react"
import ReactDOM from "react-dom"
import { ListSelector } from "./listselector"
import PropTypes from 'prop-types'

// array that counts number of items to appear
// rotorVal -- is default value of the dropdown
// f is the function
// id is the id of the ul item
// rotorsarr is the values for each dropdown
const RotorRingDrop=({ r, val, f, id, active=false, valSet=false, rotors, animate=false }) => {
  const clicky=(e) => {
    e.preventDefault()
    const test=e.target.classList.contains("disabled")
    !test?f(id, e.target.value):f(id, val)
 }
  return (
    <div
      className={ !active?"notes-picker-icn inactive": !valSet?"notes-picker-icn no-val": valSet && animate? "animate notes-picker-icn": "notes-picker-icn" }
    >
    <ul
      id={id}
      onClick={ clicky }
      className="notes-colors"
      className={ active?"notes-colors": "notes-colors inactive" }
    >
      <ListSelector
        key={ 101 }
        dispVal={"—"}
        val={ undefined }
        disabledState={ !valSet?"active placeholder": "hidden" }
      />
      {r.map((el, i) => {
        return (
          <ListSelector
            key={i}
            dispVal={el}
            val={i}
            disabledState={ val===i && valSet?"active":rotors.some(ele => ele.sel===i) && val!==i? "disabled": "inactive"}
          />
        )
     })}
    </ul>
  </div>
  )
}
const PlugBoardDrop=({ r, rotorVal, f, id, rotorsArr, selected, index, active=true, valueSet=false, animate=false }) => {
  const clicky=(e) => {
    e.preventDefault()
    const test=e.target.classList.contains("disabled")
    !test?f(id, index, e.target.value):f(id, rotorVal)
  }
  return (
  <div
    className={ !active?"notes-picker-icn inactive": !valueSet?"notes-picker-icn no-val": valueSet && animate? "notes-picker-icn animate": "notes-picker-icn" }
  >
    <ul
      className="notes-colors"
      id={id}
      onClick={ clicky }
    >
    <ListSelector
      key={ 101 }
      dispVal={"—"}
      val={ undefined }
      disabledState={ !valueSet?"active": "hidden" }
    />
      {rotorsArr.map((el, i) => {
        return (
          <ListSelector
            key={i}
            dispVal={el}
            val={i}
            disabledState={ rotorVal===i && valueSet ?"active":selected.some(ele => ele===i) && rotorVal !== i? "disabled": "inactive"}
          />
        )
     })}
    </ul>
  </div>
  )
}
RotorRingDrop.proptypes = {
  r: PropTypes.array,
  val:PropTypes.num,
  f: PropTypes.func,
  id: PropTypes.num,
  active: PropTypes.bool,
  valSet: PropTypes.bool,
  rotors: PropTypes.array,
  animate: PropTypes.bool
}
PlugBoardDrop.proptypes = {
  r: PropTypes.array,
  rotorVal:PropTypes.num,
  f: PropTypes.func,
  id: PropTypes.num,
  rotorsArr: PropTypes.arr,
  selected: PropTypes.arr,
  index: PropTypes,
  valSet: PropTypes.bool,
  rotors: PropTypes.array,
  animate: PropTypes.bool
}

export { RotorRingDrop, PlugBoardDrop }
