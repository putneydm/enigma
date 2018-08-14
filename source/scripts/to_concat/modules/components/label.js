import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Label=({ children }) => {
  return (
    <label
      className="label"
    >
    {children}
  </label>
  )
}

export { Label }
