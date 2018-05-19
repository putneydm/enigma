import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const PlugboardDropdown = ({r, f, id}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(e.target.id, e.target.value)
  }
  return (
    <select
      onChange={clicky}
      id = {id}
      defaultValue="def"
    >
      <option
        disabled = "true"
        hidden = "true"
        value = "def"
      >
        Choose letter
      </option>
      {r.map((el, i) => {
        return (
          <option
            key = {i}
            value={i}
            disabled={!el.cc?false:true}
          >
            {`${el.val}`}
          </option>
        )
      })}
    </select>
  )
}
const Plugboard = ({ count, r, f }) => {
  return (
    <div
      className = "plugboard-container"
    >
      {count.map((el, i) => {
        return (
          <div
            key = {i + 100 + r.length}
            className = "plugboard-pair"
          >
            <PlugboardDropdown
              r = {r}
              key = {i}
              f = {f}
              id = {`l${i}`}
            />
            <PlugboardDropdown
              r = {r}
              key = {i + r.length}
              f = {f}
              id = {`r${i}`}
            />
          </div>
        )
      })}
    </div>
  )
}
export {Plugboard}
