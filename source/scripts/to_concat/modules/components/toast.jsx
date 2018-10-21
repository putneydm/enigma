import React, {Component} from "react"
import ReactDOM from "react-dom"
import { Button } from "./button"
import PropTypes from 'prop-types'

const Toast = ({ toast, val }) => {
    return (
        <p
          className={ toast?'toast active':"toast" }
        >
            {val}
        </p>
    )
}
Toast.proptypes = {
  toast: PropTypes.bool,
  val: PropTypes.string
}

export { Toast }
