const structuredData = (val1, val2) => {
    const d = {val: val1, bool: val2, cc: undefined}
    return d
}
const lettersData = (r) => r.map((el) => structuredData(el, false))

const constantRandom = (seed) => new Chance(seed)

const shuffle = (a, chance) =>  {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(chance.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export {structuredData, lettersData, constantRandom, shuffle}
