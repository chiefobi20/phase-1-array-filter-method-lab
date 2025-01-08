// Code your solution here
function findMatching(array, driverName){
    return array.filter((driver) => {
        return driver.toLowerCase() === driverName.toLowerCase()
    })
}

function fuzzyMatch(array, string){
    return array.filter((car) => {
        return car[0] === string[0]
    })
}

function matchName(array, string){
    return array.filter(object => {
        for(const key in object){
            return object[key] === string
        }
    })
}