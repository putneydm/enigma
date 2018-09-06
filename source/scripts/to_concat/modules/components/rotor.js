import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"


import { RotorRingDrop } from "./rotorringdrop"
import { RingDrop } from "./RingDrop"

const Rotor = ({rotorCount, rotorNumber, i, f, rotors}) => {
    return (   
    <div
        className={ rotorNumber>=0?"rotor-selectors-wrapper active" :"rotor-selectors-wrapper" }
    >
        <RotorRingDrop
            r={ rotorCount }
            rotorNumber={ rotorNumber }
            val={ rotorNumber }
            key={ i }
            f={ f }
            id={ i }
            active={ true }
            valSet={ rotorNumber>=0?true:false }
            rotors = { rotors }
        />
        {/* set locking ring postion */}
        {/* <RingDrop
            val={ ringVal }
            r={ numbersArr }
            key={ index+100 }
            id={index}
            f={ fRing }
            active={ active }
            valSet={ rotorNumberSet } 
            /> */}
            {/* set rotor value */}
        {/* <RingDrop
            val={ rotorVal }
            r={ rLetters }
            key= {index + 200 }
            id={ index }
            f={ fRotor }
            active={ active }
            valSet={ rotorNumberSet }
        /> */}
    </div>
)}

export { Rotor }