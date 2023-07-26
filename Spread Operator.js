console.log('Spread Operator in JS')

const array = [7, 5 , 4]
console.log('Array is:', array)
const arrayObtained = [1, 2, array[0], array[1], array[2]]
console.log('Array obtained is:', arrayObtained)

// Spread Operator
const spreadOperator =  [1, 2, ...array]
console.log('Spread Operator:', spreadOperator)

// Iterables : arrays , strings, maps, sets but NOT an objects
const mumbai = 'Nitin'
const delhi = "Sokhal"
const letters = [...mumbai, mumbai, '', 'Programmer', ...delhi, delhi]
console.log('The output of letter are:',letters)
