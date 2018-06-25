import Chance from "../../../../node_modules/chance"

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
const flatten = (r) => r.reduce((array, elem) => ([...array, ...Object.values(elem)]), [])

export {lettersData, shuffle, newNumberArray, getLettersArr, flatten}
