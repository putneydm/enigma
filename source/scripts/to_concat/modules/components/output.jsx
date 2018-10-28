
import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const Output = ({ children }) => {
    return (
        <p
            className="output-content"
        >
                { children }
        </p>
    )
}

export { Output }