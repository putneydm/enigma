import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { ListSelector } from "./listselector"

// array that counts number of items to appear
// rotorVal -- is default value of the dropdown
// f is the function
// id is the id of the ul item
// rotorsarr is the values for each dropdown
const RotorRingDrop=({ r, val, f, id, active=false, valSet=false, rotors}) => {
  const clicky=(e) => {
    e.preventDefault()
    const test=e.target.classList.contains("disabled")
    !test?f(id, e.target.value):f(id, val)
 }
  return (
    <div
      className={ !active?"notes-picker-icn inactive": !valSet?"notes-picker-icn no-val": "notes-picker-icn" }
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
const PlugBoardDrop=({ r, rotorVal, f, id, rotorsArr, selected, index, active=true, valueSet=false }) => {
  const clicky=(e) => {
    e.preventDefault()
    const test=e.target.classList.contains("disabled")
    !test?f(id, index, e.target.value):f(id, rotorVal)
  }
  return (
  <div
    className={ !active?"notes-picker-icn inactive": !valueSet?"notes-picker-icn no-val": "notes-picker-icn" }
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

export { RotorRingDrop, PlugBoardDrop }
