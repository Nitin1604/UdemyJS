console.log('Flat and Flat Map in js')

const flatArr = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log('flatArr:',flatArr.flat())

const flatInnerArr = [[[1, 2],3], [4, [5, 6]], 7, 8]
console.log(flatInnerArr.flat())