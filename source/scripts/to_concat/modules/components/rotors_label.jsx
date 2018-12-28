import React, {Component} from "react"
import ReactDOM from "react-dom"

import { Label } from "./Label"

const RotorsLabel = () =>{
   return (
        <div
        className="rotor-labels-wrapper"
        >
            <Label>Pick a rotor number</Label>
            <Label>Set locking ring</Label>
            <Label>Set rotor position</Label>
        </div>
    )
}

export { RotorsLabel }