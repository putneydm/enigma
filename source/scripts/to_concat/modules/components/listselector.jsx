import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'

const ListSelector=({ val, disabledState, children }) => {
  return (
    <li
        value={val}
        className={ disabledState }
      >
        {children}
    </li>
  )
}

ListSelector.propTypes = {
  val: PropTypes.number,
  disabledState: PropTypes.string
}

export { ListSelector }   
