// Exercise: Create an array of mixed numbers (positive and negative). Use .filter() to get only the positive numbers.
const mixed = [1 , -1 , -4, 5 , 7 , 8]
const positive = mixed.filter(function(num) {
    return num > 0
})
console.log(positive)

// Exercise: Create an array of numbers and use .reduce() to calculate the product of all the numbers in the array.
const sum = mixed.reduce(function(total, num) {
    return total + num
})
console.log(sum)

// Exercise: Create an array of names and use .forEach() to print out "Hello, [name]!" for each name
const names = ["Michael", "Adam", "Youssef"]
const greeting = names.forEach(function(greets) {
    console.log(`Hello ${greets}`)
})
// Exercise: Create an array of students with their names and ages. Use .find() to get the first student who is 18 years old
const students = [['Adam', 12], ['Ali', 10], ['Mustafa', 18], ['Youssef', 15], ['Ahmad', 20]]
const yearOld = students.find(function(element, index){
    return element[1] > 18 
})
console.log(yearOld)

// Exercise: Create an array of words and use .join() to create a sentence, separating the words with spaces.

const parts = ["Hello", "Youssef"]
const sentence = parts.join(" ")
console.log(sentence)

// Exercise Create an array of letters and use .slice() to extract a portion of the array from index 2 to 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, -3, 10]
const subArray = numbers.slice(2, 5)
console.log(subArray)

// Create an array of names and use .sort() to arrange them in alphabetical order.
const unSorted = ["Michael", "Adam", "Youssef"]
const sorted = unSorted.sort(function(a, b) {
    return b.localeCompare(a)
})
console.log(sorted)

// Exercise: Create an array of fruits and use .at() to get the first and last fruit in the array.
const fruits = ["Strawberry", "Banana", "Orange", "Dragonfruit"]
console.log(fruits.at(0))
console.log(fruits.at(-1))

// Exercise : Create an array of numbers, use .pop() to remove the last number, and display the updated array.
const lastNum = numbers.pop()
console.log(lastNum)
console.log(numbers)

// Exercise: Create an array of numbers, use .shift() to remove the first number, and display the updated array.
const firstNum = numbers.shift()
console.log(firstNum)
console.log(numbers)