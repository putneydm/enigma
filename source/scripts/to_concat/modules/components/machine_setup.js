import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

import { BrowserRouter as Router, Route, Link }  from '../../../../../node_modules/react-router-dom'

import {Plugboard} from "./plugboard"
import { Label, Header } from "./Label"
import { Rotor } from "./rotor"

const MachineSetup=({ rotors, rotorsArr, lettersArr, numbersArr, plugs, setRotorNumber, setRingPosition, setRotorPos, handleLetterboardArray, selected }) => {
  return (
    <div
      className="machine-wrapper"
    >
    <div 
      className="rotors-wrapper"
    >
      <div
        className="rotor-labels-wrapper"
      >
        <Label>Pick a rotor </Label>
        <Label>Set locking ring</Label>  
        <Label>Set rotor position</Label>  
      </div> 
    { rotors.map((el, i) => {
        return (
            <Rotor 
              rotorCount = { rotorsArr }
              rotorNumber = { el.sel }
              numbersArr = { numbersArr }
              lettersArr = { lettersArr }
              i = { i }
              fSetRotorNumber = { setRotorNumber }
              key = { i }
              rotors = { rotors }
              ringVal ={ el.r?el.r:0 }
              fsetRingPosition = { setRingPosition }
              active = {el.active}
              ringVal = { el.r?el.r:0 }
              fSetRotorPos = { setRotorPos }
              rotorVal = { el.val?el.val:0 }
            /> 
        )
      }) }
    </div>
      {/* <div 
        className="b-loose"
      > */}
        {/* <RotorSelector
          rotors={ rotors }
          r={ rotorsArr }
          f={ setRotorNumber }
        />
        <RingPositionSelector
          count={ rotors }
          r={ numbersArr }
          f={ setRingPosition }
        />
        <RotorPositionSelector
          count={ rotors }
          r={ lettersArr }
          f={ setRotorPos }
        /> */}
      {/* </div> */}
      <Plugboard
        count = { lettersArr }
        plugs = { plugs }
        f = { handleLetterboardArray }
        selected = { selected }
      />
    </div>
  )}

export { MachineSetup }
