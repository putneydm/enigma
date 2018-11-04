
import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { Label } from "./label"

const Output = ({ children, labelVal }) => {
    return (
        <div>
            <Label>
                {labelVal}
            </Label>
            <p
                className={children.length>0? "output-content active": "output-content"}
            >
                    { children } 
            </p>
        </div>
    )
}

export { Output }