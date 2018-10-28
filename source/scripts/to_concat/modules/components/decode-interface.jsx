import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { LetterBoard } from "./letterboard"
import { OutputModule } from "./output_module"
import { ButtonClose } from "./button"
import { Icon } from "./icon"  

const DecodeInterface = ({ active, lettersArr, activeLetter, keypressesArr, decodedArr, f, f2 }) => {

  return (
    <div 
      className={ active? "decode-interface-wrapper active": "decode-interface-wrapper" }
    >
      <ButtonClose 
        f = { f2 }
      >
        Close
      </ButtonClose>
      <Icon
        type="close"
      >
        close_icon
      </Icon>
      <LetterBoard
        r = {lettersArr}
        active = {activeLetter}
      />
        <div
          className="output-module-wrapper"
        >
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
