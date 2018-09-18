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
const LetterBoard = ({r, active}) => {
  return (
    <div
      className="letter-board"
    >
       { r.map((el, i) =>
         <LetterBoardItem
           active = {i === active}
           item={el}
           key={i}
         />)
       }
    </div>
    )
  }

LetterBoardItem.propTypes = {
  item: PropTypes.string,
  active: PropTypes.bool
}
LetterBoard.propTypes = {
  r: PropTypes.array,
  active: PropTypes.number
}

export {LetterBoard}
