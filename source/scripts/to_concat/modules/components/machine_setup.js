import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

import { BrowserRouter as Router, Route, Link }  from '../../../../../node_modules/react-router-dom'

import {RotorSelector} from "./rotor_selector"
import {RingPositionSelector} from "./ring_position_selector"
import {RotorPositionSelector} from "./rotor_position_selector"
import {Plugboard} from "./plugboard"
import { RotorRingDrop } from "./rotorringdrop"
import { RingDrop } from "./RingDrop"
import { Label, Header } from "./Label"

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
            <div
              className={ el.sel>=0?"rotor-selectors-wrapper active" :"rotor-selectors-wrapper" }
            >
            <Header>
              {`Slot ${i + 1}`}
            </Header>
              {/* pick rotor */}
            <RotorRingDrop
              r={ rotorsArr }
              rotorVal={ el.sel }
              rotorsArr={ rotors } 
              key={ i }
              f={ setRotorNumber }
              id={ i }
              active={ true }
              valSet={ el.sel>=0?true:false }
            />
            {/* set locking ring postion */}
            <RingDrop
              val={ el.r?el.r:0 }
              r={ numbersArr }
              key={ i+100 }
              id={i}
              f={ setRingPosition }
              active={ el.active }
              valSet={ el.r?true:false } 
              />
              {/* set rotor value */}
            <RingDrop
              val={ el.val?el.val:0 }
              r={ lettersArr }
              key= {i + 200 }
              id={ i }
              f={ setRotorPos }
              active={ el.active }
              valSet={ el.val>=0?true:false }
            />
            </div>
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
