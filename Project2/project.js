/**
 Make a function that:

takes parameters: name, yearOfBirth, currentYear, oldAge, youngAge
name is a string of the persons name 
yearOfBirth is the year the person was born in
currentYear is the current year we are
oldAge is the age someone is considered old 
youngAge is the age someone is considered young

this function must return: [name] is [age] and was born on [yearOfBirth], currently we are in [currentYear], and the person is considered [old or young]

Then invoke that function with arguments "Youssef", 2009, 2025, 60, 20 respectively, in a variable result and log result
 */

function project(name , yearOfBirth, currentYear, oldAge, youngAge){
    const age = currentYear - yearOfBirth
    const isOld = oldAge < age
    const isYoung = youngAge > age
    const consideredAge = isOld ? "old" : "young"
    return `${name} is ${age} and was born on ${yearOfBirth}, currently we are in ${currentYear}, and the person is considered ${consideredAge}`   
}

const results = project("youssef", 2009, 2025, 60, 20)
console.log(results)

/**
const results = add(2 , 3)
console.log(results)
 */

// if the persons age was more than 60 he'd be old
// if the persons age was less than 20 he'd be young