import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'

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

ListSelector.propTypes = {
  dispVal: PropTypes.string,
  val: PropTypes.number,
  disabledState: PropTypes.string
}

export { ListSelector }
