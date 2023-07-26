console.log('Map method')

const eurToUsd = 1.1
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const movementsUSD = movements.map(function (mov){
    return mov * eurToUsd
})
console.log(movements)
console.log(movementsUSD)

// Using for of loop
const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
    console.log(movementsUSDfor)    

  const movementsDescriptions = movements.map((mov , i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`
    } else {
        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`        
    }
  })  
  console.log(movementsDescriptions)