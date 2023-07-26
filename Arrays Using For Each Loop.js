console.log('Arrays using for each loop')

console.log('<--- For of Loop --->')
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
    }
}

console.log('--- For Each Loop ---')
movements.forEach(function (mov) {
    if (mov > 0) {
        console.log(`You deposited: ${mov}`)
    } else {
        console.log(`You withdrew:  ${Math.abs(mov)}`)
    }
})