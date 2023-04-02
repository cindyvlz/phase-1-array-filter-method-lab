// Code your solution here

const findMatching = (names, string) => {
    return names.filter(names => names.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(names, string) {
    return names.filter(names => names.toLowerCase().substring(0, string.length) === string.toLowerCase())
}

function matchName(drivers, argument){
    return drivers.filter(drivers => {return drivers.name === argument})
}