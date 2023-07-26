console.log('Logical Operators in JS')

const hotel1 = {
    name: 'Hotel Holiday',
    numGuests: 100,
}

const hotel2 = {
    name: 'Niharika Complex',
    owner: 'Rakesh Rawat',
}

// OR assignment operator
hotel1.numGuests = hotel1.numGuests || 10;
hotel2.numGuests = hotel2.numGuests || 10;

console.log('OR opertor for hotel1 :',hotel1)
console.log('OR opertor for hotel2 :',hotel2)
console.log('')

// Nullish assignment operator (null or undefined)
hotel1.numGuests ??= 10
hotel2.numGuests ??= 10

console.log('Nullish operator for hotel1 :',hotel1)
console.log('Nullish operator for hotel2 :',hotel2)
