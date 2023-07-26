console.log('This is coding challenge 1 of section 3')

const calcAverage = (a, b, c) =>(a + b + c) / 3
console.log('The average of three numbers are:',calcAverage(2,3,4)) 

// ------------------ Test 1 ------------------
let scoreDolphins = calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)
console.log('The score of Dolphins is:', scoreDolphins)
console.log('The score of Koalas is:', scoreKoalas)

// Checking the winner among Dolphins and Koalas
const checkWinner = function (avgDolphins , avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs (${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgKoalas) {
        console.log(`Koalas win (${avgKoalas}) vs ${avgDolphins})`)
    } else {
        console.log('No teams wins..')
    }
}
checkWinner(scoreDolphins, scoreKoalas)
// ------------------ Test 1 ------------------

// ----------------------- Test 2 -----------------------
// calcAverage function is calculated above for average score of Dolphins and Koalas.
scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
// Score of Dolphins 
console.log('The score of Dolphins is:', scoreDolphins)

// Score of Koalas 
console.log('The score of Koalas is:', scoreKoalas)

// Now checking the winner among Dolphins and Koalas with given value in question.
checkWinner(scoreDolphins, scoreKoalas)
// ----------------------- Test 2 -----------------------
