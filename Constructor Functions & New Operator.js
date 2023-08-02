console.log('Constructor Functions & New Operator')
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName 
    this.birthYear = birthYear 
  
  } 
  
  const nitin = new Person('Nitin', 1998) 
  console.log(nitin) 
  
  const matilda = new Person('Matilda', 2017) 
  const jack = new Person('Jack', 1975) 
  
  console.log(nitin instanceof Person) 
  
  Person.hey = function () {
    console.log('Hey there!') 
    console.log(this) 
  } 
  Person.hey()  