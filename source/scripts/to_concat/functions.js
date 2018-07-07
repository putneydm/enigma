import React, { Component } from "../../../node_modules/react"
import ReactDOM from "../../../node_modules/react-dom"
import { Children, PropTypes } from 'react'

// lettersData
import {initial, numbersArr, lettersArr, seedVal, plugboardArr, rotors, status, buttonStatus, plugs, rotorsArr} from "./modules/variables"

import {flatten, crosswires} from "./modules/helper_functions"

// components
import {Head} from "./modules/components/head"
import {Rotors} from "./modules/components/rotors"
import {LetterBoard} from "./modules/components/letterboard"
import {RotorSelector} from "./modules/components/rotorselector"
import {RingSelector} from "./modules/components/ringSelector"
import {SaveButton} from "./modules/components/save-buttons"
import {Dialog} from "./modules/components/dialog"
import {Plugboard} from "./modules/components/plugboard"

const app = document.querySelector("#app")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { initial, numbersArr, lettersArr, rotors, plugboardArr, status, rotorsArr, seedVal, buttonStatus, plugs}
    this.clicker = this.clicker.bind(this)
    this.handleLetterboardArray = this.handleLetterboardArray.bind(this)
    this.setRotorNumber = this.setRotorNumber.bind(this)
    this.setRotorPos = this.setRotorPos.bind(this)
    this.setRingPosition = this.setRingPosition.bind(this)
    this.handleSettingsSave = this.handleSettingsSave.bind(this)
    this.handleSettingsRetrieve = this.handleSettingsRetrieve.bind(this)
    this.handleSettingsClear = this.handleSettingsClear.bind(this)
    this.handleClearDialog = this.handleClearDialog.bind(this)
  }
  componentWillMount() {
      this.handleButtonStates("Save")
  }
  componentDidMount() {
    this.handleKeyPress()
  }
  clicker(val) {
    console.log("click", val);
  }
  advanceRotors() {
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
    this.handleButtonStates("Update")
    this.setState({ rotors: rotorPos })
  }
  setRingPosition(id, val) {
    const foo = [...this.state.rotors].map((el, i) => {
      return {...el, r:id === i?parseInt(val):el.r}
    })
    this.handleButtonStates("Update")
    this.setState( {rotors: foo})
  }
  setRotorNumber(id, val) {
    const [pivot] = this.state.seedVal.filter((el, i) => i === val)
    const rotors = this.state.rotors.map((el, i) => {
      return i === id? {...el, sel:val, p:pivot, cc:crosswires(pivot)}: el
    })
    this.handleButtonStates("Update")
    this.setState({...this.state, rotors: rotors})
  }
  handleConvert() {
    const keypress = {...this.state.status, result: this.state.status.keypress }
    const  [plugboard, rotors] = [{...this.state.plugboardArr}, {...this.state.rotors}]
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
    // console.log(e.target.value);
    const machineSetup = {plugboardArr: {...this.state.plugs},rotors: {...this.state.rotors}}
    localStorage.setItem('machineSettings', JSON.stringify(machineSetup))
    this.handleButtonStates(e.target.value)
  }
  handleSettingsRetrieve (e)  {
    const machineSetup = JSON.parse(localStorage.getItem('machineSettings')) || false
    this.setState({rotors:machineSetup?Object.values(machineSetup.rotors): this.state.rotors, plugs:machineSetup?Object.values(machineSetup.plugboardArr):this.state.plugs})
    this.handleButtonStates(e.target.value)
  }
  handleSettingsClear(e) {
    localStorage.clear()
    this.handleClearDialog()
    this.handleButtonStates(e.target.value)
  }
  localStorageStatus() {
    return localStorage.getItem('machineSettings')?true:false
  }
  handleButtonStates(val) {
    const saveStatus = !this.localStorageStatus()
    const save = val === "Save" || val === "Get" || val === "Yes"?true: val === "Update"? false: this.state.buttonStatus.save
    const dialog = val === "Clear"? true:false
    this.setState({buttonStatus:{save:save, get:saveStatus, clear:saveStatus, dialog:dialog}})
  }
  handleClearDialog() {
    const dialog = {...this.state.buttonStatus, dialog: !this.state.buttonStatus.dialog, save: this.state.buttonStatus.save, get:this.state.buttonStatus.dialog.get, clear:this.state.buttonStatus.clear }
    this.setState({buttonStatus: dialog})
  }
  handleLetterboardArray(item, index, val) {
    val = parseInt(val)
    const pbr =[...this.state.plugs].map((el, i) =>{
      return index === i ? {...el, ccOne: item === "ccOne"? val:el.ccOne, ccTwo: item === "ccTwo"? val:el.ccTwo}: el
    })
    this.handleButtonStates("Update")
    this.setState({ plugs: pbr })
  }
  render() {
    return (
      <div>
        <Head
          val = {"hallo welt"}
          f = {this.setRotorNumber}
        />
        <RotorSelector
          rotors = {this.state.rotors}
          r = {this.state.rotorsArr}
          f = {this.setRotorNumber}
        />
        <Rotors
          count = {this.state.rotors}
          r = {this.state.lettersArr}
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
          f3 = {this.handleClearDialog}
          status = {this.state.buttonStatus}
        />
        <LetterBoard
          r = {this.state.lettersArr}
          active = {this.state.status.result}
        />
        <Plugboard
          count = {this.state.lettersArr}
          plugs = {this.state.plugs}
          f = {this.handleLetterboardArray}
          selected = {flatten(this.state.plugs)}
        />
        <Dialog
          text = "Are you sure you want to delete this?"
          vis = {this.state.buttonStatus}
          f = {this.handleClearDialog}
          f2 = {this.handleSettingsClear}
        />
    </div>
    )
  }
}
ReactDOM.render(
  <App />, app
)
