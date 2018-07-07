import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const RingDropdown = ({val, r, id, f}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(id, e.target.value)
  }
  return (
    <select
      onChange={clicky}
      id = {id}
      value = {val}
    >
      <option
        disabled = "true"
        hidden = "true"
        value = "def"
      >
        Rotor pos
      </option>
      {r.map((el, i) => {
        return (
          <option
              key = {i}
              value={i}
            >
              {`${el}`}
          </option>
        )
      })}
    </select>
  )
}

const RingSelector = ({ count, r, f }) => {
  return (
    <div
      className = "rotor-selector"
    >
      {count.map((el, i) => {
        return (
          <RingDropdown
            val = {el.r}
            r = {r}
            key = {i}
            id = {i}
            f = {f}
          />
        )
      })}
    </div>
  )
}

export {RingSelector}
