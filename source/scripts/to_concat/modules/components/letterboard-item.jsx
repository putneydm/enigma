import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const LetterBoardItem = ({children, active=false}) => {
  return (
    <p
      className= {active ? "letter active": "letter"}
    >
    { children }
    </p>
  )
}

LetterBoardItem.propTypes = {
  active: PropTypes.bool
}

export {LetterBoardItem}
