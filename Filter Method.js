console.log('Filter Method in JavaScript')
const movements = [11,12 ,13 ,14 ,-15, 15 ,16 ,17 ,-18, 18]

const deposits = movements.filter(function(mov){
    return mov > 0
})
console.log('Including both +ve sign and -ve sign:')
console.log('Movements:',movements)
console.log('Excluding -ve sign and include +ve sign:')
console.log('Deposits:',deposits)

// Using for each loop
const depositsFor = []

// Including positive sign only.
for (const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor)

const sign = [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]

// Filtering the positive sign separate from negative sign
const filtering = sign.filter(function(signing){
    return signing > 0
})
console.log(filtering)
// Including negative sign and excluded positive sign
const withdrawals = sign.filter( mov => mov < 0)
console.log(withdrawals)