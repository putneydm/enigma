// import colors from "./modules/colors"

import React, { Component } from "../../../node_modules/react"
import ReactDOM from "../../../node_modules/react-dom"
import Chance from "../../../node_modules/chance"
import { Children, PropTypes } from 'react'
import {structuredData, lettersData, constantRandom, shuffle} from "./modules/helper_functions"

const app = document.querySelector("#app")

const initial = [{hello:"hello world"}]
// creates an array of numbers, gets starting number and length
const newNumberArray = (s=0, l=26) => Array((s + (l - 1)) - s + 1).fill().map((_, idx) => parseInt(s + idx))
// converts number to character
const getCharacter = (val) => String.fromCharCode(val + 65)
// converts array of numbers to numbersArr
const getLettersArr = (r) => r.map((el, i) => getCharacter(el))

const numbersArr = newNumberArray(0, 26)
const lettersArr = getLettersArr(numbersArr)

// const rotors = newNumberArray(1, 3)
const plugs = newNumberArray(1, 13)
const plugboardArr = lettersData(lettersArr)

const rotors = newNumberArray(1, 3).map((el, i) => {
  return { val: 0, id:`rtr${i}`, p:12 }
})
console.log("rotorArr", rotors);

const status = {keypress: undefined, result: undefined, rotors: {}}

// const privateMethod = new Symbol('privateMethod');

// console.log("p", plugboardArr);


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
const Dropdown = ({r}) => {
  return (
    <select>
      {r.map((el, i) => {
        console.log("rotors");
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
const PlugboardDropdown = ({r, f, id}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(e.target.id, e.target.value)
  }
  // console.log(Array.isArray(r));
  return (
    <select
      onChange={clicky}
      id = {id}
      defaultValue="def"
    >
      <option
        disabled = "true"
        hidden = "true"
        value = "def"
      >
        Choose letter
      </option>
      {r.map((el, i) => {
        return (
          <option
            key = {i}
            value={i}
            disabled={!el.cc?false:true}
          >
            {`${el.val}`}
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
            id = {`rtr${i}`}
          />
        )
      })}
    </div>
  )
}
const Plugboard = ({ count, r, f }) => {
  return (
    <div
      className = "plugboard-container"
    >
      {count.map((el, i) => {
        return (
          <div
            key = {i + 100 + r.length}
            className = "plugboard-pair"
          >
            <PlugboardDropdown
              r = {r}
              key = {i}
              f = {f}
              id = {`l${i}`}
            />
            <PlugboardDropdown
              r = {r}
              key = {i + r.length}
              f = {f}
              id = {`r${i}`}
            />
          </div>
        )
      })}
    </div>
  )
}

const LetterBoardItem = ({item, active}) => {
  console.log(active);
  return (
    <p
      className= {active ? "letter active": "letter"}
    >
    {`${item}`}
    </p>
  )
}
const LetterBoard = ({r, active}) => {
  console.log("active", active);
  return (
    <div
      className="letter-board"
    >
       { r.map((el, i) =>
         <LetterBoardItem
           active = {el === active}
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
    this.state = { initial, numbersArr, rotors, plugs, plugboardArr, status}
    this.clicker = this.clicker.bind(this)
    this.handleLetterboardArray = this.handleLetterboardArray.bind(this)
  }
  componentWillMount() {
      // console.log("pl", this.state);

  }
  componentDidMount() {
    this.handleKeyPress()
    // this.handleConvert()
  }
  clicker(val) {
    console.log("click", val);
  }

  }
  handleConvert() {
    const keypress = {...this.state.status, result: this.state.status.keypress }
    this.setState({status: keypress})
    console.log("status", this.state.status.result);
  }
  handleKeyPress() {
    document.addEventListener('keydown', (event) => {
      console.log("key");
      this.handleKeyPressValue(event)
      this.handleConvert()
    })
    // document.addEventListener('keyup', (event) => {
    //   this.handleKeyPressValue(undefined)
    // })
  }
  handleLetterboardArray(id, val) {
    const pbr= [... this.state.plugboardArr].map((el, i) => {
      return {...el, cc: el.cc === id ? undefined : i === parseInt(val) ? id : el.cc}
    })
    this.setState({ plugboardArr: pbr })
  }
  render() {
    return (
      // <Head
      //   val = {this.state.initial[0].hello}
      //   action = {this.clicker}
      // />

      <div>
        <Rotors
          count = {this.state.rotors}
          r = {this.state.numbersArr}
        />
        <LetterBoard
          r = {this.state.numbersArr}
          active = {this.state.status.result}
        />
        <Plugboard
          count = {this.state.plugs}
          r = {this.state.plugboardArr}
          f = {this.handleLetterboardArray}
        />
    </div>
    )
  }
}
ReactDOM.render(
  <App />, app
)
