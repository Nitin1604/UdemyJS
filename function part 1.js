console.log('Welcome to first part of functions')

function loggingFeature() {
    console.log('Function in JavaScript')
}
// calling / running / invoking the function
loggingFeature();
loggingFeature();  // Calling the function as many times as you want..!!

// Another example of function
function Fast_Food_Processor (frooti , cold_coffee) {   // Frooti : 60 and cold_coffee : 50
    console.log('Frooti Price:',frooti, 'and' ,'Cold_Coffee Price:',cold_coffee) // Output => Frooti Price: 60 and Cold_Coffee Price: 50
    const foodAvailable = `The price of frooti is ₹${frooti} and price of cold_coffee is ₹${cold_coffee}` 
    // Output : The price of frooti is ₹60 and price of cold_coffee is ₹50
    return foodAvailable;
}
// Storing the value of function which is called in a variable
const juice_and_Food = Fast_Food_Processor(60 , 50)  // 60 and 50 value passed to the function parameter.
console.log(juice_and_Food)
    
const num = Number('16')
console.log('String get converted to number:',num)