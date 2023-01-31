// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    let newArray=[]
    return newArray=[array[0],array[1]]
}

const returnLastTwoDrivers = function(array) {
    let newArray=[];
    return newArray=[array[array.length-2],array[array.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function(mult) {
        let num = 5
        return num*mult
    }
}

const fareDoubler = function createFareMultiplier(num) {
    return num*2
}

const fareTripler = function createFareMultiplier(num) {
    return num*3
}

function selectDifferentDrivers(drivers,func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}

