// Objects
/**
 an object is data
 it has keys and it has values
 key of object is value of key
 each value has a key
 value can be whatever datatype of datastructer
 each key and value is redifinable
 key is also refered as property
 
 */
const person = {
    name: "Youssef",
    familyName: "Shamass",
    age: 15,
}
console.log(person.name, person.familyName, person.age)
person.age = 16
console.log(person.name, person.familyName, person.age)


// Array
/**
 array is a list of elements
 array is of size n
 nth of array is the element located at nth position
 array is indexed at 0
 elements can be whatever datatype or datastructure
 */
const realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const listOfNames = ["Youssef", "Michael", "UndKaki", "Abbas"]
const randomElements = ["Black", true, "Hello", 1, false]
const countriesData = [
    { name: "lebanon", population: 6000000 },
    { name: "syria", population: 3200000 },
    { name: "netherlands", population: 29000000 },
    { name: "germany", population: 1700000 },
    { name: "usa", population: 19000000 }

]

// .forEach 
// .forEach loops over the numbers and executes a function on each element
listOfNames.forEach(function (element, index) {
    // console.log(element, index)
})

// .push
// push ads an element into the array
listOfNames.push("Mustafa", "Ali")
console.log(listOfNames)

// .reduce
// reduce allows you to merge the entire array

const sum = realNumbers.reduce(function (a, b) {
    return a + b
})
console.log(sum)

// .map
// map manipulates each element 
const multipliedNumbers = realNumbers.map(function (element, index) {
    return element * 5
})
console.log(multipliedNumbers)

// .length
// length is the size of the array which also refered to n 
console.log(multipliedNumbers.length)
// .find
// find takes in a function and is used to locate an element in the array by looping over them
const country = countriesData.find(function (country, index) {
    return country.name === "lebanon"
})
console.log(country)

// .includes
// includes takes in an element and returns in a boolean depending if the element is in the array
console.log(realNumbers.includes(50))

// .findIndex
// findIndex takes in a function and is used to locate an element index in the array by looping over them
const countryIndex = countriesData.findIndex(function (country, index) {
    return country.name === "syria"
})
console.log(countryIndex)

// .filter
// filter filters the elements by looping over them
const bigCountries = countriesData.filter(function (country, index) {
    return country.population > 20000000
})
console.log(bigCountries)

// .join
// join takes in a string and serperates each element by the string
console.log(realNumbers.join(" Michael "))

// .slice
// slice selects elements indexed between a & b
console.log(listOfNames.slice(1, 4))
// .sort
// sort arranges an array given a function
console.log(countriesData.sort(function (a, b) {
    return a.population - b.population
}))

// .at
// takes in a number an locates an element with the index
console.log(listOfNames.at(2))

// .pop
// removes removes the final element from an array
let myArr = [["Jay", 13], ["Ali", 17]]
var removeFromMyArr = myArr.pop()
console.log(removeFromMyArr)

// .shift
// removes removes the first element from an array
let ourArr = [["Jay", 13], ["Ali", 17]]
var removeFromOurArr= myArr.shift()
console.log(removeFromOurArr)

