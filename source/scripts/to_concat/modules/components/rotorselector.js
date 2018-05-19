import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const RotorSelectorDropdown = ({r, f, id, sel}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(parseInt(e.target.id), parseInt(e.target.value))
  }
  return (
    <select
      onChange={clicky}
      id = {id}
      value={sel}
    >
      <option
        disabled = "true"
        hidden = "true"
        value = "def"
      >
        Choose Rotor
      </option>
      {r.map((el, i, r) => {
        return (
          <option
            key = {i}
            value={i}
            disabled={el.sel}
          >
            {el.val+1}
          </option>
        )
      })}
    </select>
  )
}
const RotorSelector = ({ count, r, f }) => {
  return (
    <div
      className = "rotor-selector"
    >
      {count.map((el, i) => {
        return (
          <RotorSelectorDropdown
            r = {r}
            key = {i}
            f = {f}
            id = {i}
            sel = {el.sel}
          />
        )
      })}
    </div>
  )
}

export {RotorSelector}
