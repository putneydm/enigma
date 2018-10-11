import React, {Component} from "react"
import ReactDOM from "react-dom"
import { Button } from "./button"
import PropTypes from 'prop-types'

const Toast = ({ f, toast, val }) => {
    return (
        <p
            className={ toast?'toast active':"toast" }
        >
            {
              val=="save"?"Abgeschlossen! Machine settings have been saved":
              val==="delete"?"Fertig! Your machine settings have been deleted.":
              val==="unset"?"Aufmerksam! Set up rotors before typing message":
              val==="keyrange"?"Hoppla! Entered character must be a letter" :
              "Abgeschlossen! Saved machine settings loaded"}
        </p>
    )
}
Toast.proptypes = {
  f: PropTypes.func,
  toast: PropTypes.bool,
  val: PropTypes.string
}

export { Toast }
