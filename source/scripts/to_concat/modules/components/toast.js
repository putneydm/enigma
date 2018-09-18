import React, {Component} from "react"
import ReactDOM from "react-dom"
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