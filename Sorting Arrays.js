console.log('Sorting Arrays')

// Movements arrays
movements = [164, 156, -123, 2000, -189, -130, 70, 1300]

// Sorting Arrays

// Strings
const owners = ['Deepanshu','Deepanshi', 'Himanshu','Himanshi','Nitin', 'Abhinav', 'Bhuvnesh'] 
console.log('Before mutation of arrays:',owners) 
console.log('Owners sorting done:',owners.sort()) 
console.log('After mutation of arrays:',owners)

// Numbers
console.log('Movements:',movements) 

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1 
  if (a < b) return -1 
}) 
movements.sort((a, b) => a - b) 
console.log('Ascending order:',movements) 

// Descending
movements.sort((a, b) => {
  if (a > b) return -1 
  if (a < b) return 1 
}) 
movements.sort((a, b) => b - a) 
console.log('Descending order:',movements) 
