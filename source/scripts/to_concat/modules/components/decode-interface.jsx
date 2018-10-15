import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { LetterBoard } from "./letterboard"
import { OutputModule } from "./output_module"

const DecodeInterface = ({ lettersArr, activeLetter, keypressesArr, decodedArr }) => {

  return (
    <div>
    <div
      className="decode-interface-wrapper"
    >
      <LetterBoard
        r = {lettersArr}
        active = {activeLetter}
      />
    </div>
    <div>
      <OutputModule
        r = { keypressesArr }
      />
      <OutputModule
        r = { decodedArr }
      />
   </div>
 </div>
    )
}

export { DecodeInterface }
