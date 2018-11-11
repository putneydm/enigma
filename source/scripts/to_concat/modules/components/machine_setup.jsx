import React, {Component} from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'

import {Plugboard} from "./plugboard"
import { Label, Header } from "./Label"
import { Rotor } from "./rotor"

const MachineSetup=({ rotors, rotorsArr, lettersArr, numbersArr, plugs, setRotorNumber, setRingPosition, setRotorPos, handleLetterboardArray, selected, animate, resetRotor }) => {
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
              animate = { animate }
              resetRotor = { resetRotor }
            />
        )
      }) }
    </div>
      <Plugboard
        count = { lettersArr }
        plugs = { plugs }
        f = { handleLetterboardArray }
        selected = { selected }
        animate = { animate }
      />
    </div>
  )}

export { MachineSetup }
