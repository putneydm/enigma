import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

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
    >
      {r.map((el, i) => {
        return (
          <li
              key={i}
              value={i}
              onClick={ clicky }
              className={ rotorVal===i?"active":rotorsArr.some(ele => ele.sel===i) && rotorVal !== i? "disabled": "inactive"}
            >
              {`${el}`}
          </li>
        )
     })}
    </ul>
  </div>
  )
}

const PlugboardDropdown=({ r, id, f, item, index, selected, def }) => {
    const clicky=(e) => {
      e.preventDefault()
      f(item, index, e.target.value)
    }
    return (
      <select
        onChange={ clicky }
        id={ id }
        value= { def !== null?def:"def" }
      >
        <option
          disabled="true"
          hidden="true"
          value="def"
        >
          Choose letter
        </option>
        {r.map((el, i) => {
          return (
            <option
              key={ i }
              value={ i }
              disabled={ selected.some((le) => i === le && i !== def) }
            >
              {`${el}`}
            </option>
          )
        })}
      </select>
    )
  }


const Plugboard=({ plugs, count, f, selected }) => {
  console.log("selected", selected);
  console.log("plugs", plugs);
  return (
    <div
      className="plugboard-container"
    >
      {plugs.map((el, i) => {
        return (
          <div
            key={ i + 100 + plugs.length }
            className="plugboard-pair"
          >
            {/* <RotorRingDrop
              r={ count }
              key={ i }
              rotorVal={}
              f={ f }
              id={ el.ccOne }
            > */}

            <PlugboardDropdown
              r={ count }
              key={ i }
              f={ f }
              selected={ selected }
              def={ el.ccOne }
              index={ i }
              item={ "ccOne" }
            />
            <PlugboardDropdown
              r={ count }
              key={ i + plugs.length }
              f={ f }
              selected={ selected }
              def={ el.ccTwo }
              index={ i }
              item={ "ccTwo" }
            />
          </div>
        )
      })}
    </div>
  )
}

export { Plugboard }
