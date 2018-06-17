import {lettersData, shuffle, getLettersArr, newNumberArray} from "./helper_functions"

const initial = [{hello:"hello world"}]
const numbersArr = newNumberArray(0, 26)
const lettersArr = getLettersArr(numbersArr)
const pivots = [20, 6, 17, 5, 15, 9]
const plugs = newNumberArray(1, 6)
const plugboardArr = lettersData(lettersArr)
const rotors = newNumberArray(1, 3).map((el, i) => {
  return { val: 0, id:i, p:pivots[i], sel:i<3?i:undefined, r:0 }
})
const rotorCount = newNumberArray(1, 6).map((el, i) => {
  return { val: i, sel:i<3?true:false }
})
const status = {keypress: undefined, result: undefined}
const buttonStatus = {save:false, get:false, clear:false, dialog:false}

export {initial, numbersArr, lettersArr, pivots, plugs, plugboardArr, rotors, rotorCount, status, buttonStatus}
