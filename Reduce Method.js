console.log('Reduce Method in JavaScript')

countArr = [100, 234, -32, 789, 900, 897]

const balanceLeft = countArr.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`)
    return acc + cur
},100)
console.log('The total is:', balanceLeft)
