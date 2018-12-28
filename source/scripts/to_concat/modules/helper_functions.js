import Chance from "../../../../node_modules/chance"
import { log } from "util";

const structuredData = (val1, val2) => {
    const d = {val: val1, cc: val2}
    return d
}
const lettersData = (r) => r.map((el) => structuredData(el, undefined))

const constantRandom = (seed) => new Chance(seed)

const shuffle = (a, chance) =>  {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(chance.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// creates an array of numbers, gets starting number and length
const newNumberArray = (s=0, l=26) => Array((s + (l - 1)) - s + 1).fill().map((_, idx) => parseInt(s + idx))
// converts number to character
const getCharacter = (val) => String.fromCharCode(val + 65)
// converts array of numbers to numbersArr
const getLettersArr = (r) => r.map((el, i) => getCharacter(el))
//flattens array of objects into an array
const flatten = (r=[]) => r.reduce((array, elem) => ([...array, ...Object.values(elem)]), [])
// takes an seed value and returns a 26 value array shuffled the same way every time.
const crosswires = seed => shuffle(newNumberArray(), constantRandom(seed))

const rounder = (sought, offset, length) => sought < offset? (length - offset) + sought: sought - offset
const rounderBack = (sought, offset, length) => sought >= (length - offset)? sought - (length - offset): sought + offset

//true = forward, false = backward
const rotorPass = (el, step, bool = true) => {
    const {cc, val, r} = {...el}
    const offset = (val + r) % cc.length
    const adjustedVal = rounder(step, offset, cc.length)
    const crossWire = bool?cc[adjustedVal]: cc.indexOf(adjustedVal)
    return rounderBack(crossWire, offset, cc.length)
}
const findPLugboardVal = (val, r) => {
  const {ccOne, ccTwo} = r.find((el, i) => val === el.ccOne || val === el.ccTwo) || false
  return ccOne && ccOne === val?ccTwo:ccTwo && ccTwo === val?ccOne:val
}

const handlePlugsReady = (r) => {       
        const plugsReady = r.some(el => {
            const {ccOne, ccTwo} = el 
            return ccOne !== undefined && ccTwo === undefined    
        }) 
        return plugsReady
}

const handleNoScroll = (val) => {
    console.log("handle no scroll helper")
    const body = document.querySelector("body")
    const html = document.querySelector("html")
    if (val) {
        body.classList.add("no-scroll") 
        html.classList.add("no-scroll")
    } else {
        body.classList.remove("no-scroll") 
        html.classList.remove("no-scroll") 
    }
}

const handleRotorsReady = (r) => {
    const rotorsReady = r.some(el => Object.values(el).some(val => val===undefined ))
    return rotorsReady
}

export { lettersData, shuffle, newNumberArray, getLettersArr, flatten, crosswires, rounder, rounderBack, rotorPass, findPLugboardVal, getCharacter, handlePlugsReady, handleRotorsReady, handleNoScroll }
