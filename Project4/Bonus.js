/**
 Bonus Challenge:
Create a simple program that:

Takes an array of random numbers. DONE
Filters out the numbers greater than 50. DONE
Sorts the remaining numbers in ascending order. DONE
Joins them into a string separated by commas. DONE
Displays the resulting string DONE
 */

const numbers = [1, 4, 6, 2, 10, -3, -1, 5, 90, 56]
const filtered = numbers.filter(function(num) {
    return num < 50
})
const sorted = filtered.sort(function(a, b) {
    return a - b
})
const joined = sorted.join(", ")
console.log(joined)