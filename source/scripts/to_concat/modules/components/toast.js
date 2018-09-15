import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { Button } from "./button"

const Toast = ({ f, toast, val }) => {
    console.log("val", val) 
    return (
        <p 
            className={ toast?'toast active':"toast" } 
        >
            {val=="save"?"Your machine settings have been saved.":val==="delete"?"Your machine settings have been deleted.":"Saved machine settings loaded"}
        </p>
    )
}

export { Toast }