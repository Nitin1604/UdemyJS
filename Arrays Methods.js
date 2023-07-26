console.log('Arrays Methods')

// Slice method
let alphabet = ['n', 'i', 't', 'i', 'n']

console.log(alphabet.slice(1))
console.log(alphabet.slice(1,4))
console.log(alphabet.slice(-2))
console.log(alphabet.slice(-1))
console.log(alphabet.slice(1, -1))

// Splice method
let lastName = ['S','o','k','h','a','l']
console.log('Splice method starting from index 2:',lastName.splice(2))
console.log('The Extracted part is:',lastName)

// Reversing of an array
let reverseArr = ['R','e','v','e','r','s','e']
console.log('Before performing reverse operation:',reverseArr)
console.log('Reverse operation successfully done:',reverseArr.reverse())
console.log('After performing reverse operation:',reverseArr)

// Concatenation of array
let array1 = ['a','r', 'r', 'a', 'y']
let concat = ['c', 'o', 'n', 'c', 'a', 't']
const combination = array1.concat(concat)
console.log(combination)