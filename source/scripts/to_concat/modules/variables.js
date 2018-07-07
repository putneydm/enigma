import {lettersData, shuffle, getLettersArr, newNumberArray} from "./helper_functions"

const initial = [{hello:"hello world"}]
const numbersArr = newNumberArray(0, 26)
const lettersArr = getLettersArr(numbersArr)
const rotorsArr = newNumberArray(1, 6)
const seedVal = [20, 6, 17, 5, 15, 9]
// const plugs = newNumberArray(1, 6)

const plugs = newNumberArray(1, 6).map((el, i) => {
  return {ccOne:null, ccTwo:null}
})

const plugboardArr = lettersData(lettersArr)
const rotors = newNumberArray(1, 3).map((el, i) => {
  const [seed] = seedVal.filter((el, ix) => ix === i)
  return { val: 0, id:i, p:seed, sel:i<3?i:undefined, r:0, cc:crosswires(seed) }
})
const status = {keypress: undefined, result: undefined}
const buttonStatus = {save:false, get:false, clear:false, dialog:false}

export {initial, numbersArr, lettersArr, seedVal, plugs, plugboardArr, rotors, status, buttonStatus, rotorsArr}
