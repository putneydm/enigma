import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Label=({ content }) => {
  return (
    <label
      className="label"
    >
    {`${content}`}
  </label>
  )
}

export { Label }
