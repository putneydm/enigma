import React, {Component} from "react"
import ReactDOM from "react-dom"


import { RotorRingDrop } from "./rotorringdrop"
import { RingDrop } from "./RingDrop"
import { Header } from "./label"
import { ButtonSmall } from "./button"

const Rotor = ({rotorCount, rotorNumber, i, fSetRotorNumber, rotors, ringVal, numbersArr, lettersArr, fsetRingPosition, active, rotorVal, fSetRotorPos, animate, resetRotor }) => {
    const activeButton = rotorNumber>=0 || ringVal || rotorVal ? false:true
    return (
    <div
        className={ rotorNumber>=0 && ringVal && rotorVal ?"rotor-selectors-wrapper active" :"rotor-selectors-wrapper" }
        key={ i }
    >
        <Header>{`Slot ${i + 1}`}</Header>
        <RotorRingDrop
            r={ rotorCount }
            rotorNumber={ rotorNumber }
            val={ rotorNumber }
            f={ fSetRotorNumber }
            id={ i }
            active={ true }
            valSet={ rotorNumber>=0?true:false }
            rotors = { rotors }
            animate = { animate }
        />
        {/* set locking ring postion */}
        <RingDrop
            val={ ringVal }
            r={ numbersArr }
            id={ i }
            f={ fsetRingPosition }
            active={ active }
            valSet={ ringVal?true:false }
            animate = { animate }
            />
            {/* set rotor value */}
        <RingDrop
            val={ rotorVal }
            r={ lettersArr }
            id={ i }
            f={ fSetRotorPos }
            active={ active }
            valSet={ rotorVal?true:false }
            animate = { animate }
        />
        <ButtonSmall
          status = { activeButton }
          val = { i }
          f = { resetRotor }
        >
          Reset
      </ButtonSmall>
    </div>
)}

export { Rotor }
