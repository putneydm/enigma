import {lettersData, shuffle, getLettersArr, newNumberArray, crosswires} from "./helper_functions"

const initial = [{hello:"hello world"}]
const numbersArr = newNumberArray(0, 26)
const lettersArr = getLettersArr(numbersArr)
const rotorsArr = newNumberArray(1, 6)
const seedVal = [20, 6, 17, 5, 15, 9]
const plugs = newNumberArray(1, 6).map((el, i) => {
  return {ccOne:undefined, ccTwo:undefined}
})
const reflector =  [4,9,12,25,0,11,24,23,21,1,22,5,2,17,16,20,14,13,19,18,15,8,10,7,6,3]

const plugboardArr = lettersData(lettersArr)

// val is the rotor postion
// r is the locking ring position
// id is which slot the rotor is in
// p is the pivot point and the basis of the crosswiring setup
// cc is the crosswires array
// sel is which rotor the user has selected eg 1-6
// active is whether the user has selected an array
const rotors = newNumberArray(1, 3).map((el, i) => {
  const [seed] = seedVal.filter((el, ix) => ix === i)
  return { val: undefined, id:i, p:seed, sel:undefined, r:undefined, cc:crosswires(seed), active:false }
})
const status = {keypress: undefined, result: undefined}
const buttonStatus = {save:false, get:false, clear:false, dialog:false}

export {initial, numbersArr, lettersArr, seedVal, plugs, plugboardArr, rotors, status, buttonStatus, rotorsArr, reflector} 
