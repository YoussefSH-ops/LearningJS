// if statement
// if (condition) {execution}
// if only excutes if the condition is true
const condition = true
if (condition) {
    console.log("hello im cool")
}

// else statement
// else attached to if statements if the if condition doesnt execute the else will
const firstCondition = false
const elseCondition = true
if (firstCondition) {
    console.log("if condition executed")
} else {
    console.log("else condition executed")
}

if (firstCondition) {
    console.log("if condition executed")

} else if (!elseCondition) {
    console.log("else 1 executed")
} else {
    console.log("else 2 executed")
}
