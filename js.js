let tab = [['nme', 'nabil'], ['age', 12]];

let newTabb = tab.map(val => {
    const [key, value] = val
    return { [key]: value }
})

console.log(Object.fromEntries(tab))