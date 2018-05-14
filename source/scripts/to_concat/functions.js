// import colors from "./modules/colors"

import React, { Component } from "../../../node_modules/react"
import ReactDOM from "../../../node_modules/react-dom"
import Chance from "../../../node_modules/chance"
import { Children, PropTypes } from 'react'
import {structuredData, lettersData, constantRandom, shuffle, newNumberArray, getCharacter, getLettersArr} from "./modules/helper_functions"

const app = document.querySelector("#app")

const initial = [{hello:"hello world"}]

const numbersArr = newNumberArray(0, 26)
const lettersArr = getLettersArr(numbersArr)
const pivots = [20, 6, 17, 5, 15, 9]
const plugs = newNumberArray(1, 13)
const plugboardArr = lettersData(lettersArr)
const rotors = newNumberArray(1, 3).map((el, i) => {
  return { val: 0, id:i, p:pivots[i], sel:i<3?i:undefined }
})
const rotorCount = newNumberArray(1, 6).map((el, i) => {
  return { val: i, sel:i<3?true:false }
})
const status = {keypress: undefined, result: undefined, rotors: {}}



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
const Dropdown = ({val, r, id, f}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(id, e.target.value)
  }
  return (
    <select
      onChange={clicky}
      id = {id}
      value = {val}
    >
      <option
        disabled = "true"
        hidden = "true"
        value = "def"
      >
        Rotor pos
      </option>
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
const Rotors = ({ count, r, f }) => {
  return (
    <div
      className = "rotor-container"
    >
      {count.map((el, i) => {
        return (
          <Dropdown
            val = {el.val}
            r = {r}
            key = {i}
            id = {i}
            f = {f}
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
const RotorSelectorDropdown = ({r, f, id, sel}) => {
  const clicky = (e) => {
    e.preventDefault()
    f(parseInt(e.target.id), parseInt(e.target.value))
  }
  return (
    <select
      onChange={clicky}
      id = {id}
      value={sel}
    >
      <option
        disabled = "true"
        hidden = "true"
        value = "def"
      >
        Choose Rotor
      </option>
      {r.map((el, i, r) => {
        return (
          <option
            key = {i}
            value={i}
            disabled={el.sel}
          >
            {el.val+1}
          </option>
        )
      })}
    </select>
  )
}
const RotorSelector = ({ count, r, f }) => {
  return (
    <div
      className = "rotor-selector"
    >
      {count.map((el, i) => {
        return (
          <RotorSelectorDropdown
            r = {r}
            key = {i}
            f = {f}
            id = {i}
            sel = {el.sel}
          />
        )
      })}
    </div>
  )
}

const LetterBoardItem = ({item, active}) => {
  return (
    <p
      className= {active ? "letter active": "letter"}
    >
    {`${item}`}
    </p>
  )
}
const LetterBoard = ({r, active}) => {
  // console.log("active", active);
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
    this.state = { initial, numbersArr, rotors, plugs, plugboardArr, status, rotorCount}
    this.clicker = this.clicker.bind(this)
    this.handleLetterboardArray = this.handleLetterboardArray.bind(this)
    this.setRotorNumber = this.setRotorNumber.bind(this)
    this.setRotorPos = this.setRotorPos.bind(this)
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
  advanceRotors() {
    let a, b, c
    [a, b, c] = [...this.state.rotors]
    a = {...a, val:a.val < 25 ? a.val + 1: 0}
    b = a.val === a.p ? {...b, val:b.val < 25 ? b.val + 1: 0}: b
    c = a.val === a.p && b.val === b.p ? {...c, val:c.val < 25 ? c.val + 1: 0}: c
    this.setState({ rotors: [a, b, c] })
  }
  setRotorPos(id, val) {
    const rotorPos = [... this.state.rotors].map((el, i) => {
      return {...el, val: el.id === id? parseInt(val): el.val}
    })
    this.setState({ rotors: rotorPos })
  }
  setRotorNumber(id, val) {
    let fooBar = [...this.state.rotorCount]
    let barBar = [...this.state.rotors][id].sel
    fooBar[barBar].sel = !fooBar[barBar].sel
    fooBar[val].sel = !fooBar[val].sel
    const foo = [...this.state.rotors].map((el, i) => {
      return {...el, sel:el.id===id? val: el.sel}
    })
    this.setState({ rotors:foo, rotorCount:fooBar })
  }
  handleConvert() {
    const keypress = {...this.state.status, result: this.state.status.keypress }
    this.setState({status: keypress})
  }
  handleKeyPressValue(e) {
    const keypress = {...this.state.status, keypress: e.keyCode - 65 }
    this.setState({status: keypress})
  }
  handleKeyPress() {
    document.addEventListener('keydown', (event) => {
      // console.log("key");
      this.handleKeyPressValue(event)
      this.advanceRotors()
      this.handleConvert()
    })
    // document.addEventListener('keyup', (event) => {
    //   this.handleKeyPressValue(undefined)
    // })
  }
  handleLetterboardArray(id, val) {
    const pbr= [...this.state.plugboardArr].map((el, i) => {
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
        <RotorSelector
          count = {this.state.rotors}
          r = {this.state.rotorCount}
          f = {this.setRotorNumber}
        />
        <Rotors
          count = {this.state.rotors}
          r = {this.state.numbersArr}
          f = {this.setRotorPos}
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
