console.log('Some and every in js')

// Some method
const someMethod = [11, 22, 33, 44, 55, -11, -22, -33, -44, -55]
console.log(someMethod)
// Equality
console.log('Element -11 present:',someMethod.includes(-11))  // Element -11 present in array
console.log('Element 3 absent:',someMethod.includes(3)) // Element 3 is not present in array

// Condition
const some_methodChecking = someMethod.some( someMethod => someMethod > 22)
console.log('Condition checking for some:',some_methodChecking)

// Every method
const everyMethod = [28,29,32,33,34,35,36]
console.log(everyMethod)
const every_methodChecking = everyMethod.some( someMethod => someMethod > 29)
console.log('Condition checking for every:',every_methodChecking)

// Separate Callback
const sepaCallback = sepaCallback => sepaCallback > 32
console.log('Some Method:',everyMethod.some(sepaCallback))
console.log('Every Method:',everyMethod.every(sepaCallback))
console.log('Filter Method:',everyMethod.filter(sepaCallback))

console.log('')
const sepCallback = sepCallback => sepCallback < 32
console.log('Some Method:',someMethod.some(sepCallback))
console.log('Every Method:',someMethod.every(sepCallback))
console.log('Filter Method:',someMethod.filter(sepCallback))