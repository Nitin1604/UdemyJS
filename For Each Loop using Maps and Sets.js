console.log('Maps and Sets using For each loop')

// Maps
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP','Pound sterling'],
])

currencies.forEach(function(value, key , map){
    console.log(`${key}: ${value}`)
})

// Set 
const uniqueCurrencies = new Set(['USD','GBP','USD','EUR','EUR'])
console.log(uniqueCurrencies)
uniqueCurrencies.forEach(function(value, _ , map){
    console.log(`${value}: ${value}`)
})