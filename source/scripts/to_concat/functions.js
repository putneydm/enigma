// import colors from "./modules/colors"

import React, { Component } from "../../../node_modules/react"
import ReactDOM from "../../../node_modules/react-dom"
import Chance from "../../../node_modules/chance"
import { Children, PropTypes } from 'react'
import {structuredData, lettersData, constantRandom, shuffle} from "./modules/helper_functions"


const app = document.querySelector("#app")

const initial = [{hello:"hello world"}]

// creates an array of numbers, gets starting number and length
const newNumberArray = (s=0, l=26) => Array((s + (l - 1)) - s + 1).fill().map((_, idx) => s + idx)

// converts number to character
const getCharacter = (val) => String.fromCharCode(val + 65)
// converts array of numbers to letters
const getLettersArr = (r) => r.map((el, i) => getCharacter(el))

const numbersArr = newNumberArray(0, 26)
const lettersArr = getLettersArr(numbersArr)

const rotors = newNumberArray(1, 3)
const plugs = newNumberArray(1, 13)
const plugboardArr = lettersData(lettersArr)

console.log("p", plugboardArr);

const Head = ({val, action}) => {
  console.log(val)
  const clicky = () => {
    action(val)
  }
  return (
    <h1
      onClick={clicky}
    >
      {`${val}`}
    </h1>
  )
}
const constantRandom = (seed) => new Chance(seed)

const shuffle = (a, chance) =>  {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(chance.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
const Dropdown = ({r}) => {
  return (
    <select>
      {r.map((el, i) => {
        return (
          <option
              key = {i}
              value={i}
            >
              {`${el}`}
          </option>
        )
      })}
    </select>
  )
}
const Rotors = ({ count, r }) => {
  return (
    <div
      className = "rotor-container"
    >
      {count.map((el, i) => {
        return (
          <Dropdown
            r = {r}
            key = {i}
          />
        )
      })}
    </div>

  )
}
}
//
const DatalistItem = ({val}) => {
const LetterBoardItem = ({item, key, active}) => {
  console.log(item, active);
  return (
    <p
      className= {active ? "letter active": "letter"}
    >
    {`${item}`}
    </p>
  )
}

const LetterBoard = ({r}) => {
  return (
    <div
      className="letter-board"
    >
       { r.map((el, i) =>
         <LetterBoardItem
           active = {true}
           item={el}
           key={i}
         />)
       }
    </div>
    )
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { initial, letters}
    this.clicker = this.clicker.bind(this)

  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  clicker(val) {
    console.log("click", val);
  }
  render() {
    return (
      <Head
        val = {this.state.initial[0].hello}
        action = {this.clicker}
      <LetterBoard
        r = {this.state.letters}
      />
    )
  }
}
ReactDOM.render(
  <App />, app
)
