
import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const Output = ({ children }) => {
    return (
        <p
            className={children.length>0? "output-content active": "output-content"}
        >
                { children } 
        </p>
    )
}

export { Output }