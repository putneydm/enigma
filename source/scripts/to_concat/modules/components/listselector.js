import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const ListSelector=({ dispVal, val, disabledState }) => {
  return (
    <li
        value={val}
        className={ disabledState }
      >
        {`${dispVal}`}
    </li>
  )
}

export { ListSelector }
