import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import { Header } from "./label"
import { getCharacter } from "../helper_functions"

console.log("get char", getCharacter);


const RotorWindow = ({val, count}) => {
    return (
        <div 
            className="rotor-value"
        >
        <Header>
            {`Rotor ${count+1}`}
        </Header>
        <p
            className="rotor-window"
        >
           { getCharacter(val) }
        </p>
        </div>
    )
}

export { RotorWindow }