/**
create a variable personName a string
create a varialbe personBirthyear a number
create a variable year which is the current year number
create a function findAge, that takes in birthYear, currentYear, both params are numbers and tis function finds the age of a person from this year
create a function isAdultOrKid that takes in age param as a number, and inside this function return either 'kid' or 'adult' considering age of an adult is above 18 
then, create a variable result as a string that says [name] is [age] and was born in [birthYear], right now its [currentYear] and he is [adult or kid]
 */

const personName = "michz"
const personBirthyear = 2009
const year = 2025

function findAge(birthYear, currentYear){
    const age = currentYear - birthYear
    return age
}

function isAdultOrKid(age){
    const oldAge = 18
    const isOld = age < oldAge

    const adultOrKid = isOld ? "kid" : "adult"
    return adultOrKid
}

const age = findAge(2009, 2025)
const adultOrKid = isAdultOrKid(15)

const results = `${personName} is ${age} and was born in ${personBirthyear}, right now its ${year} and he is ${adultOrKid}`
console.log(results)
