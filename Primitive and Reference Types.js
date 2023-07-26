console.log('Primitives vs. Objects (Primitive vs. Reference Types)')

let age = 25
let oldAge = age
age = 24
console.log('The age is:',age)
console.log('The old age is:',oldAge)

const aboutMe = {
    name: 'Nitin',
    age: 25,
};
const friend = aboutMe
friend.age = 28
console.log('Friend:', friend)
console.log('aboutMe:', aboutMe)