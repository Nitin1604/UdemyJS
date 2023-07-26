console.log("Type conversion and coercion")

// Type conversion:
// Adding a string to a integer value.
const inputYear = '1998'
console.log('String get converted to number :',Number(inputYear)) // Output : 1998 
// 1998 will be in the integer value.
console.log('Addition of string to number is :',inputYear + 18) // Output: 199818

console.log('String converted to number and then add to a number:', Number(inputYear)+18) // Output : 16

console.log('Trying to convert the string into a number:',Number('JavaScript')) // Output : NaN

// Type coercion:
console.log('converting 25 into string and ouput like this:')
console.log('I am ' + 25 + ' years old') // Output : I am 25 years old. [25 as a number]
console.log('')
console.log('As 25 is already in string it will add to string and output is:')
console.log('I am ' + '25' + ' years old') // Output : I am 25 years old. [25 as a string]

// Example of type coercion
let variable = '1' + 1  // Output : 11
variable = variable - 1 // 11 which is string get subtracted from 1 and gives output as 10
console.log('The final ouptut is:', variable) // Output : 10

