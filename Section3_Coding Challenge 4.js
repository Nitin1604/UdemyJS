console.log('This is coding challenge 3 of section 3')

const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

// Question 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// Question 2
const tips = []
const totals = []

// Question 3
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)
    totals.push(tip + bills[i])
}
console.log('Bills array is:',bills)
console.log('Tips array is:',tips)
console.log('Totals array is:',totals)

// Question 4
const calcAverage =  function (arr) {  // [2, 3, 7] will called here

    // Question 4.1 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Question 4.2
    return sum / arr.length  // (12 / 3 = 4) | sum = 12 : arr.length = 3 |
}

// Question 4.3
console.log(calcAverage([2, 3, 7])) // THIS WILL CALLED TO FUNCTION PARAMETER i.e (arr)
console.log('The calculated average of totals is:',calcAverage(totals))
console.log('The calculated average of tips is:',calcAverage(tips))
