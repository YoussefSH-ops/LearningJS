// maths operators
const sum = 2 + 5
const difference = 5 - 3
const product = -5 * 3
const factor = 5 / -2

// comparison operators
const personAge = 15
const oldAge = 60
const youngAge = 20
const isYoung = personAge < youngAge // this returns true
const is20 = personAge == 20 // this returns false
/**
 a == b any data type of a is equal any data type of b
 "5" == 5 true

 a === b includes the datatypes
  "5" == 5 false
   5 == 5 true
 */


// condition operators
const isOld = true
const age = isOld ? oldAge : youngAge // boolean ? value if the boolean is true : value if the boolean is false

const isMale = true
const isFemale = false
const isMaleOrFemale = isMale || isFemale

const invertedBool = !true // false