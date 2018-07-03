import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"


const PlugboardDropdown = ({ r, id, f, item, index, selected, def }) => {
    const clicky = (e) => {
      e.preventDefault()
      f(item, index, e.target.value)
    }
    return (
      <select
        onChange={clicky}
        id = {id}
        value= {def !== null?def:"def"}
        // value = {0}
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
              disabled={selected.some((le) => i === le && i !== def)}
            >
              {`${el}`}
            </option>
          )
        })}
      </select>
    )
  }


const Plugboard = ({ plugs, count, f, selected }) => {
  return (
    <div
      className = "plugboard-container"
    >
      {plugs.map((el, i) => {
        return (
          <div
            key = {i + 100 + plugs.length}
            className = "plugboard-pair"
          >
            <PlugboardDropdown
              r = {count}
              key = {i}
              f = {f}
              selected = {selected}
              def = {el.ccOne}
              index = {i}
              item = {"ccOne"}
            />
            <PlugboardDropdown
              r = {count}
              key = {i + plugs.length}
              f = {f}
              selected = {selected}
              def = {el.ccTwo}
              index = {i}
              item = {"ccTwo"}
            />
          </div>
        )
      })}
    </div>
  )
}

export {Plugboard}
