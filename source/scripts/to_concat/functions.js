import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Children, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// lettersData
import { initial, numbersArr, lettersArr, seedVal, rotors, status, buttonStatus, plugs, rotorsArr, reflector, keypressesArr, decodedArr, alertMessages, decodeActive, machineStatus } from "./modules/variables"
import { flatten, crosswires, rotorPass, findPLugboardVal, getCharacter, handlePlugsReady, handleRotorsReady } from "./modules/helper_functions"

// components
import { Head } from "./modules/components/head"
import { MachineSetup } from "./modules/components/machine_setup"
import { SaveInterface } from "./modules/components/save_interface"
import { DecodeInterface } from "./modules/components/decode-interface"
import { Toast } from "./modules/components/toast"
import { Button } from "./modules/components/button"  
import { OpenDecoder } from "./modules/components/open_decoder";


const toast = { toastState: false, toastVal: undefined };
const getAnim = false;

const app = document.querySelector("#app")

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { initial, rotors, status, buttonStatus, plugs, toast, getAnim, keypressesArr, decodedArr, decodeActive, machineStatus }
        // this.clicker = this.clicker.bind(this)
        this.handleLetterboardArray = this.handleLetterboardArray.bind(this)
        this.setRotorNumber = this.setRotorNumber.bind(this)
        this.setRotorPos = this.setRotorPos.bind(this)
        this.setRingPosition = this.setRingPosition.bind(this)
        this.handleSettingsSave = this.handleSettingsSave.bind(this)
        this.handleSettingsRetrieve = this.handleSettingsRetrieve.bind(this)
        this.handleSettingsClear = this.handleSettingsClear.bind(this)
        this.handleClearDialog = this.handleClearDialog.bind(this)
        this.handleToast = this.handleToast.bind(this)
        this.resetRotor = this.resetRotor.bind(this)
        this.handleCopy = this.handleCopy.bind(this)
        this.handleDecodeMode = this.handleDecodeMode.bind(this)
    }
    componentWillMount() {
        this.handleButtonStates("save")
    }
    componentDidMount() {
        this.handleKeyPress()
        console.log("mount");
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.rotors !== this.state.rotors || prevState.plugs !== this.state.plugs) {           
            this.handleMachineReady()
        }
    }
    componentWillUpdate(nextProps, nextState) {        
    }
    advanceRotors() {
        let [a, b, c] = [...this.state.rotors]
        a = {...a, val: a.val < 25 ? a.val + 1 : 0 }
        b = a.val === a.r ? {...b, val: b.val < 25 ? b.val + 1 : 0 } : b
        c = a.val === a.r && b.val === b.r ? {...c, val: c.val < 25 ? c.val + 1 : 0 } : c
        this.setState({ rotors: [a, b, c] })
    }
    setRotorPos(id, val) {
        const rotorPos = [...this.state.rotors].map((el, i) => {
            return {...el, val: el.id === id ? parseInt(val) : el.val }
        })
        this.handleButtonStates("update")
        this.setState({ rotors: rotorPos })
    }
    setRingPosition(id, val) {  
        const ringPos = [...this.state.rotors].map((el, i) => {
            return {...el, r: id === i ? parseInt(val) : el.r }
        })
        this.handleButtonStates("update")
        this.setState({rotors: ringPos })
    }
    setRotorNumber(id, val) {
        const [pivot] = seedVal.filter((el, i) => i === val)
        const rotors = this.state.rotors.map((el, i) => {
            return i === id ? {...el, sel: val, val: undefined, r: undefined, p: pivot, cc: crosswires(pivot), active: true } : el
        })
        this.handleButtonStates("update")
        this.setState({...this.state.rotors, rotors })
    }
    resetRotor(e) {
        const val = parseInt(e.target.value)
        const rotors = this.state.rotors.map((el, i) => {
            return i === val ? {...el, sel: undefined, val: undefined, r: undefined, p: undefined, cc: undefined, active: false } : el
        })
        this.handleButtonStates("update")
        this.setState({...this.state.rotors, rotors })

    }
    handleConvert() {
        const startVal = this.state.status.keypress
        const [rotor1, rotor2, rotor3] = [...this.state.rotors]
        const plugs = [...this.state.plugs]

        //plugboard pass
        const plugBoardOne = findPLugboardVal(startVal, plugs)
            //pass through rotors forward
        const pass1 = rotorPass(rotor1, plugBoardOne)
        const pass2 = rotorPass(rotor2, pass1)
        const pass3 = rotorPass(rotor3, pass2)
            // pass through reflector
        const [rVal] = reflector.filter((el, i) => i === pass3)
            // pass back through rotors
        const back3 = rotorPass(rotor3, rVal, false)
        const back2 = rotorPass(rotor2, back3, false)
        const back1 = rotorPass(rotor1, back2, false)
            // second pass through plugboard
        const final = findPLugboardVal(back1, plugs)

        this.saveDecoded(final)

        this.setState({ status: {...this.state.status, result: final } })
    }
    handleKeyPressValue(e) {
        const keypress = {...this.state.status, keypress: e.keyCode - 65 }
        this.setState({ status: keypress })
    }
    checkRotorStatus() {
        const foo = [...this.state.rotors]
        const bar = foo.some(el => el.r !== undefined && el.sel !== undefined && el.val !== undefined)
        return bar;
    }
    handleKeyPress() {
        document.addEventListener('keydown', (e) => {
            const keyRange = e.keyCode >= 65 && e.keyCode <= 90
            const altKey = e.sfitKey || e.altKey || e.ctrlKey || e.metaKey // true === alt key pressed
            const rotorStatus = this.checkRotorStatus()
            rotorStatus && !altKey && keyRange ? (
                    this.handleKeyPressValue(e),
                    this.advanceRotors(),
                    this.handleConvert(),
                    this.saveKeyPress(e.key)
                ) : !rotorStatus && !altKey && keyRange ? (
                    this.handleToast(alertMessages.unset)
                ) : rotorStatus && !altKey && !keyRange ? (
                    this.handleToast(alertMessages.keyrange)
                ) :
                (
                    console.log("Fail")   
                )
        })
    }
    saveKeyPress(val) {
        const arr = [...this.state.keypressesArr, val]
        this.setState({...this.state, keypressesArr: arr })
    }
    saveDecoded(val) {
        const arr = [...this.state.decodedArr, getCharacter(val)]
        this.setState({...this.state, decodedArr: arr })
    }
    handleSettingsSave(e) {
        const machineSetup = { plugboardArr: {...this.state.plugs }, rotors: {...this.state.rotors } }
        localStorage.setItem('machineSettings', JSON.stringify(machineSetup))
        this.handleButtonStates(e.target.value)
        this.handleToast(alertMessages.save)
    }
    handleSettingsRetrieve(e) {
        
        const machineSetup = JSON.parse(localStorage.getItem('machineSettings')) || false

        console.log('machnesetup', machineSetup);
        
        this.handleButtonStates(e.target.value)
        this.handleToast(alertMessages.loaded)
        this.handleGetAnim(e.target.value)
        this.setState({ rotors: machineSetup ? Object.values(machineSetup.rotors) : this.state.rotors, plugs: machineSetup ? Object.values(machineSetup.plugboardArr) : this.state.plugs })
  
    }
    handleSettingsClear(e) {
        localStorage.clear()
        this.handleClearDialog()
        this.handleButtonStates(e.target.value)
        this.handleToast(alertMessages.delete)
    }
    localStorageStatus() {
        return localStorage.getItem('machineSettings') ? true : false
    }
    handleButtonStates(val) {
        const saveStatus = this.localStorageStatus()
        const save = val === "save" || val === "get" || val === "yes" ? false : val === "update" ? true : this.state.buttonStatus.save
        const dialog = val === "clear" ? true : false
        this.handleGetAnim(val)
        const foo = { save: save, get: saveStatus, clear: saveStatus, dialog: dialog }
        this.setState({ ...this.state, buttonStatus:foo }) 
    }
    handleClearDialog() {
        const { dialog } = this.state.buttonStatus;
        const buttonStatus = { ...this.state.buttonStatus, dialog: !dialog }
        this.setState({ ...this.state, buttonStatus:buttonStatus  })
    }
    handleLetterboardArray(item, index, val) {
        val = parseInt(val)
        const pbr = [...this.state.plugs].map((el, i) => {
            return index === i ? {...el, ccOne: item === "ccOne" ? val : el.ccOne, ccTwo: item === "ccTwo" ? val : el.ccTwo } : el  
        })
        this.handleButtonStates("update")  
        this.setState({ plugs: pbr })
    }
    handleGetAnim(val) {
        const getAnim = val === "get" ? true : false
        this.setState({ getAnim: getAnim }) 
    }
    handleToast(val) {
        console.log('toast');
        
        this.handleToastReset()
        this.setState({ toast: { toastState: true, toastVal: val } })
    }
    handleToastReset() {
        setTimeout(() => {
            this.setState({ toast: false })
        }, 2000);
    }
    handleCopy(e) {
        const el = document.createElement("input")
        el.type = "text"
        el.classList.add("hidden")
        el.value = e.target.value;
        document.querySelector('#app').appendChild(el)

        el.select()
        const copysuccess = document.execCommand("copy") || false   
        el.remove()  
        this.handleToast(alertMessages.copy)
    }
    handleDecodeMode(e) {
        const decodeActive = this.state.decodeActive
        this.setState({decodeActive: !decodeActive}) 
    }
    handleMachineReady() {
        const plugsReady = handlePlugsReady([...this.state.plugs])
        const rotorsReady = handleRotorsReady([...this.state.rotors])
        
        this.setState({ machineStatus: {...this.state.machineStatus, rotorsReady: !rotorsReady, plugsReady: !plugsReady} })   
    }
    render() {
        return ( 
            <div>
                <Head>
                    hallo, welt 
                </Head> 
                <Toast 
                    toast = { this.state.toast.toastState }
                    val = { this.state.toast.toastVal }
                    alerts = { alertMessages }
                /> 
                <MachineSetup 
                    setRotorNumber = { this.setRotorNumber }
                    setRingPosition = {  this.setRingPosition }
                    setRotorPos = { this.setRotorPos }
                    rotors = { this.state.rotors }
                    rotorsArr = { rotorsArr }
                    lettersArr = { lettersArr }
                    numbersArr = { numbersArr }
                    plugs = { this.state.plugs }
                    handleLetterboardArray = { this.handleLetterboardArray }
                    selected = { flatten(this.state.plugs) }
                    animate = { this.state.getAnim }
                    resetRotor = { this.resetRotor }
                /> 
                <SaveInterface    
                    handleSettingsSave = { this.handleSettingsSave }  
                    handleSettingsRetrieve = {    this.handleSettingsRetrieve }
                    handleClearDialog = { this.handleClearDialog }
                    status = { this.state.buttonStatus }
                    text = "Are you sure you want to delete this?"
                    handleSettingsClear = { this.handleSettingsClear }
                /> 
                {/* <ButtonYuge
                    f={ this.handleDecodeMode }
                    status={ this.state.machineStatus.rotorsReady && this.state.machineStatus.plugsReady }
                >
                    Ready! Let's code!
                </ButtonYuge> */}
                <OpenDecoder
                    f={ this.handleDecodeMode }
                    status={ this.state.machineStatus.rotorsReady && this.state.machineStatus.plugsReady }

                ></OpenDecoder>
                <DecodeInterface 
                    active = { this.state.decodeActive }
                    lettersArr = { lettersArr }
                    activeLetter = { this.state.status.result }
                    keypressesArr = { this.state.keypressesArr }
                    decodedArr = { this.state.decodedArr }
                    f = { this.handleCopy }
                    f2 = { this.handleDecodeMode }
                    rotors = { this.state.rotors }
                /> 
            </div>
        )
    }
}
ReactDOM.render( <
    App / > , app
)