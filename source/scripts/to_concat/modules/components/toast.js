import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"

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

export { Toast }
