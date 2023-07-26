console.log('Arrow Function')

// Arrow Function
const calculateAge = birthYear => 2023 - birthYear
const ageObtained = calculateAge(1998)
console.log('The age obtained is:',ageObtained)

// Example of an Arrow Function

const retirementAge = (birthYear, firstName) => {
    const ageCalculation = 2023 - birthYear
    const retirement = 60 - ageCalculation
    return `${firstName} will retires in ${retirement} years`
}
console.log(retirementAge(1998 , 'Nitin'))