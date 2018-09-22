import React, {Component} from "react"
import ReactDOM from "react-dom"
import { Button } from "./button"
import PropTypes from 'prop-types'

const Toast = ({ f, toast, val }) => {
    return (
        <p
            className={ toast?'toast active':"toast" }
        >
            {val=="save"?"Your machine settings have been saved.":val==="delete"?"Your machine settings have been deleted.":"Saved machine settings loaded"}
        </p>
    )
}
Toast.proptypes = {
  f: PropTypes.func,
  toast: PropTypes.bool,
  val: PropTypes.string
}

export { Toast }
