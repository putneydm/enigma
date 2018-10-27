import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const Icon = ({children, type}) => {
    return <svg className={`icon ${type}`}>
      <use xlinkHref={ `#${children}` }></use>
    </svg>;
}

export { Icon }