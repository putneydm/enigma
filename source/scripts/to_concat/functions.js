import React, { Component } from "../../../node_modules/react"
import ReactDOM from "../../../node_modules/react-dom"
import { Children, PropTypes } from 'react'

// lettersData
import {initial, numbersArr, lettersArr, pivots, plugs, plugboardArr, rotors, rotorCount, status} from "./modules/variables"

// components
import {Head} from "./modules/components/head"
import {Plugboard} from "./modules/components/plugboard"
import {Rotors} from "./modules/components/rotors"
import {LetterBoard} from "./modules/components/letterboard"
import {RotorSelector} from "./modules/components/rotorselector"
import {RingSelector} from "./modules/components/ringSelector"
import {SaveButton} from "./modules/components/save-buttons"

const app = document.querySelector("#app")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { initial, numbersArr, rotors, plugs, plugboardArr, status, rotorCount, pivots}
    this.clicker = this.clicker.bind(this)
    this.handleLetterboardArray = this.handleLetterboardArray.bind(this)
    this.setRotorNumber = this.setRotorNumber.bind(this)
    this.setRotorPos = this.setRotorPos.bind(this)
    this.setRingPosition = this.setRingPosition.bind(this)
    this.handleSettingsSave = this.handleSettingsSave.bind(this)
    this.handleSettingsRetrieve = this.handleSettingsRetrieve.bind(this)
    this.handleSettingsClear = this.handleSettingsClear.bind(this)
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
    // let a, b, c
    let [a, b, c] = [...this.state.rotors]
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
  setRingPosition(id, val) {
    const foo = [...this.state.rotors].map((el, i) => {
      return {...el, r:id === i?parseInt(val):el.r}
    })
    console.log(foo)
    this.setState( {rotors: foo})
  }
  setRotorNumber(id, val) {
    let fooBar = [...this.state.rotorCount]
    let barBar = [...this.state.rotors][id].sel
    let pivot = [...this.state.pivots][val]
    fooBar[barBar].sel = !fooBar[barBar].sel
    fooBar[val].sel = !fooBar[val].sel
    const foo = [...this.state.rotors].map((el, i) => {
      return {...el, sel:el.id===id? val: el.sel, p:el.id===id? pivot: el.p,  val: el.id===id? 0: el.val}
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
    document.addEventListener('keydown', (e) => {
      e.keyCode >=65 && e.keyCode <=90? (
        this.handleKeyPressValue(e),
        this.advanceRotors(),
        this.handleConvert()
      ) : (
        console.log("Fail")
      )
    })
  }
  handleSettingsSave(e) {
    const machineSetup = {plugboardArr: {...this.state.plugboardArr},rotors: {...this.state.rotors}}
    localStorage.setItem('machineSettings', JSON.stringify(machineSetup))
  }
  handleSettingsRetrieve (e)  {
    const machineSetup = JSON.parse(localStorage.getItem('machineSettings')) || false
    this.setState({rotors:machineSetup?Object.values(machineSetup.rotors): this.state.rotors, plugboardArr:machineSetup?Object.values(machineSetup.plugboardArr):this.state.plugboardArr})
  }
  handleSettingsClear(e) {
    console.log("clear");
    localStorage.clear()
  }
  handleLetterboardArray(id, val) {
    const pbr= [...this.state.plugboardArr].map((el, i) => {
      return {...el, cc: el.cc === id ? undefined : i === parseInt(val) ? id : el.cc}
    })
    this.setState({ plugboardArr: pbr })
  }
  render() {
    return (
      <div>
        <Head
          val = {"hallo welt"}
          f = {this.setRotorNumber}
        />
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
        <RingSelector
          count = {this.state.rotors}
          r = {this.state.numbersArr}
          f = {this.setRingPosition}
        />
        <SaveButton
          f1 = {this.handleSettingsSave}
          f2 = {this.handleSettingsRetrieve}
          f3 = {this.handleSettingsClear}
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
