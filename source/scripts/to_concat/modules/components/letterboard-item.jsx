import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

const LetterBoardItem = ({item, active}) => {
  return (
    <p
      className= {active ? "letter active": "letter"}
    >
    {`${item}`}
    </p>
  )
}

LetterBoardItem.propTypes = {
  item: PropTypes.string,
  active: PropTypes.bool
}

export {LetterBoardItem}
