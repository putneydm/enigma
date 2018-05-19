import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

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
           active = {el === active}
           item={el}
           key={i}
         />)
       }
    </div>
    )
  }
export {LetterBoard}
