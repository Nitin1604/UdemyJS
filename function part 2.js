console.log('Welcome to second part of functions')

// Function Declaration
function calculateAge(birthYear) {
    return 2023 - birthYear
}
const ageObtained = calculateAge(25)
console.log('Function Declaration the obtained age is:',ageObtained)

// Function Expressions
const ageCalculation =  function (birthYear){
    return 2024 - birthYear
}
const obtainedAge = ageCalculation(1991)
console.log('Function Expressions the obtained age is:', obtainedAge)