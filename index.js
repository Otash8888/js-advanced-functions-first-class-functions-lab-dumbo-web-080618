// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  const newArr = [...array]
  return newArr.splice(0,2)
}
const returnLastTwoDrivers = function (array){
  const newArr = [...array]
  return newArr.splice(-2)
}
let selectingDrivers = []
 selectingDrivers[0] = returnFirstTwoDrivers
 selectingDrivers[1] = returnLastTwoDrivers
const createFareMultiplier = function (n){return function (fare){return fare*n}}
const fareDoubler = function (fare){return createFareMultiplier(2)(fare)}
const fareTripler = function (fare){return createFareMultiplier(3)(fare)}
const fetchSpecifiedDrivers=function(arrayOfDrivers, fn){return fn(arrayOfDrivers)}
