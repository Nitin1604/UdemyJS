console.log('Prototypes in JS')

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName 
    this.birthYear = birthYear 
 
  } 
  
  const Nitin = new Person('Nitin', 1998) 
  console.log(Nitin) 
  
  // 1. New {} is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return {}
  
  const Rohan = new Person('Rohan', 1999) 
  const Kunal = new Person('Kunal', 1975) 
  
  console.log(Nitin instanceof Person) 
  
  Person.hey = function () {
    console.log('Hey there 👋') 
    console.log(this) 
  } 
  Person.hey() 
  
  // Prototypes
  console.log(Person.prototype) 
  
  Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear) 
  } 
  
  Nitin.calcAge() 
  Rohan.calcAge() 
  
  console.log('__proto__ :',Nitin.__proto__) 
  console.log('__proto__ is equal to Person prototype or not:',Nitin.__proto__ === Person.prototype) 
  
  console.log('isPrototypeof Nitin:',Person.prototype.isPrototypeOf(Nitin)) 
  console.log('isPrototypeof Rohan:',Person.prototype.isPrototypeOf(Rohan)) 
  console.log('isPrototypeof Person:',Person.prototype.isPrototypeOf(Person)) 
  
  // .prototyeOfLinkedObjects
  
  Person.prototype.species = 'Homo Sapiens' 
  console.log('Nitin species =>',Nitin.species)
  console.log('Rohan species =>',Rohan.species) 
  
  console.log('Checking for the exisiting property firstName:',Nitin.hasOwnProperty('firstName')) 
  console.log('Checking for ownProperty species:',Nitin.hasOwnProperty('species')) 