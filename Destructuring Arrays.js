console.log('Destructuring Arrays')

const Burger_King_restaurant = {
    name: 'Burger King',
    location: 'Noida Sector 16 near Ducat Institute A-43',
    categories: ['Burger', 'Coca Cola', 'French Fries', 'Sandwich'],
    starterMenu: ['Ice cream', 'Cold Coffee'],
    mainMenu: ['Double cheeze pizza', 'Garlic Sandwich', 'Hot coffee'],
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },
    
}

const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x , y, z] = arr
console.log('Array element 1 is:',a)
console.log('Array element 2 is:',b)
console.log('Array element 3 is:',c)
console.log(arr)

console.log('')
console.log('Value for first and second')
const [first , second] = Burger_King_restaurant.categories
console.log('The array element at index 0 is:',first)
console.log('The array element at index 1 is:',second)
console.log('')

console.log('Value for main and secondary')
let [main , secondary] = Burger_King_restaurant.categories
console.log('The array element at index 0 is:', main) 
console.log('The array element at index 1 is:', secondary)
console.log('')

changingVariables = main
main = secondary
secondary = changingVariables
console.log('The array element at index 0 is:', main)
console.log('The array element at index 1 is:', secondary)

console.log(Burger_King_restaurant.order(1, 0))

// Recieve 2 return values from a function
const [starter , mainRecipe] = Burger_King_restaurant.order(1,0)
console.log('The starter is:', starter)
console.log('The mainRecipe is:', mainRecipe)

// Skipping array element from the nested array
const nestedArray = [2, 4, [5, 6]]
const [i, , j] = nestedArray
console.log('Array element 1 is:',i)
console.log('Array element 2 is:',j)

// Setting default values 
const [arr1 = 1, arr2 = 1, arr3 = 1] = [7, 4]
console.log('The value for arr1 is:',arr1)
console.log('The value for arr2 is:',arr2)
console.log('The value for arr3 is:',arr3)