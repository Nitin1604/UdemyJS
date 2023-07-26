console.log('Rest Pattern and Parameters')

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };
// ******************** Destructuring ******************** 
// Spread operator because on right side of assignment opertor '='
const arr = [1, 2, ...[3, 4]]

// Rest operator because on the left side of assignment operator '='
const [a, b, ...others] = [1,2,3,4,5]
console.log('The value of a is:',a)
console.log('The value of b is:',b)
console.log('Array other is:',others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log('mainMenu index 0 element is:',pizza)
console.log('mainMenu index 2 element is:',risotto)
console.log(otherFood)
// ******************** Destructuring ******************** 

// ******************** Objects ******************** 
const {sat, ...weekdays} = restaurant.openingHours
console.log('Days are opening on these days:',weekdays)
// ******************** Objects ******************** 