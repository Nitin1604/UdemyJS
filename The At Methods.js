console.log('Working of At method')

const numArr = [16, 8, 21, 20]
console.log('Without At method:',numArr[0])
console.log('With At method:',numArr.at(0))

console.log('************************')
console.log('getting last array element')
console.log('Last element is:',numArr[numArr.length - 1])
console.log('Slice method:',numArr.slice(-1))
console.log('Getting value from slice:',numArr.slice(-1)[0])
console.log('************************')

console.log('At method also work with string too.')
console.log('Visual Studio Code'.at(0))
console.log('Visual Studio Code'.at(-2))
console.log('************************')

console.log('Calculating length of the string')
console.log('Visual Studio Code'.length)
console.log('nitin'.length)
