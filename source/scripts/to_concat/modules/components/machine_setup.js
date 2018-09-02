import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

import { BrowserRouter as Router, Route, Link }  from '../../../../../node_modules/react-router-dom'

import {RotorSelector} from "./rotor_selector"
import {RingPositionSelector} from "./ring_position_selector"
import {RotorPositionSelector} from "./rotor_position_selector"
import {Plugboard} from "./plugboard"

const MachineSetup=({ rotors, rotorsArr, lettersArr, numbersArr, plugs, setRotorNumber, setRingPosition, setRotorPos, handleLetterboardArray, selected }) => {
  return (
    <div
      className="rotors-wrapper"
    >
      <div 
        className="b-loose"
      >

      {[1, 2, 3].map((el, i) => {
        console.log(i)
      })}
        <RotorSelector
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
        />
      </div>
      <Plugboard
        count = { lettersArr }
        plugs = { plugs }
        f = { handleLetterboardArray }
        selected = { selected }
      />
    </div>
  )}

export { MachineSetup }
