import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import {LetterBoardItem} from './letterboard-item'

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

LetterBoard.propTypes = {
  r: PropTypes.array,
  active: PropTypes.number
}

export {LetterBoard}
