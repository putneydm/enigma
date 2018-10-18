import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { LetterBoard } from "./letterboard"
import { OutputModule } from "./output_module"

const DecodeInterface = ({ lettersArr, activeLetter, keypressesArr, decodedArr, f }) => {

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
        f = { f }
      />
      <OutputModule
        r = { decodedArr }
        f = { f }
      />
   </div>
 </div>
    )
}

export { DecodeInterface }
