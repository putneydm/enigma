import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

const Head=({ val, action }) => {
  console.log(val)
  const clicky=() => {
    action(val)
  }
  return (
    <h1
      onClick={ clicky }
    >
      {`${val}`}
    </h1>
  )
}
export { Head }
