console.log('Primitive and Object in Practice')

// Primitive types
let lastName = 'Singh'
let oldLastName = lastName
lastName = 'Kumar'
console.log('The last name is :', lastName)
console.log('The old last name is:', oldLastName)

// Reference types
const sonalika = {
    firstName: 'Sonalika',
    lastName: 'Sharma',
    age: 27
}

const marriedSonalika = sonalika
marriedSonalika.lastName = 'Joshi'
console.log('Sonalika last name before marriage:', sonalika)
console.log('Sonalika last name after marriage:', marriedSonalika)
console.log('***************************************')

// Copying objects
const SONALIKA = {
    firstName: 'Sonalika',
    lastName: 'Sharma',
    age: 27,
    familyMember: ['Himanshu', 'Himanshi'],
}

const SONALIKAcopy = Object.assign({}, SONALIKA)
SONALIKAcopy.lastName = 'Joshi'
SONALIKAcopy.familyMember.push('Deepanshu')
SONALIKAcopy.familyMember.push('Deepanshi')
console.log('Before marriage sonalika last name was:', SONALIKA)
console.log('After marriage sonalika last name is:',SONALIKAcopy)
