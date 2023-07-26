console.log('Find method in js')

// Accounts
const account1 = {
    owner: 'Himanshi',
    movements: [164, 156, -123, 2000, -189, -130, 70, 1300],
    interestRate: 1.2, 
    pin: 111,
  };
  
  const account2 = {
    owner: 'Himanshu',
    movements: [5000, 3123, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 222,
  };
  
  const account3 = {
    owner: 'Deepanshu',
    movements: [164, -164, 340, -300, -20, 50, 123, -460],
    interestRate: 0.7,
    pin: 333,
  };
  
  const account4 = {
    owner: 'Deepanshi',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 444,
  };

  const accounts = [account1, account2, account3, account4];
// Movements array:
movements = [100, -34, -32, 789, 900, 897]

// Less then zero i.e mov < 0
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log('Find method for firstWithdrawal:',firstWithdrawal)

// More then zero i.e mov > 0
const secondWithdrawal = movements.find(mov => mov > 0 )
// Find method will filter out first element only from the given array.
console.log('Find method for secondWithdrawal:',secondWithdrawal)
console.log(accounts)

// Account for Himanshu
const accountHimanshu = accounts.find(acc => acc.owner === 'Himanshu')
console.log('The account for Himanshu is:',accountHimanshu)

// Account for Himanshi
const accountHimanshi = accounts.find(acc => acc.owner === 'Himanshi')
console.log('The account for Himanshi is:',accountHimanshi)

// Account for Deepanshu
const accountDeepanshu = accounts.find(acc => acc.owner === 'Deepanshu')
console.log('The account for Deepanshu is:',accountDeepanshu)

// Account for Deepanshi
const accountDeepanshi = accounts.find(acc => acc.owner === 'Deepanshi')
console.log('The account for Deepanshi is:',accountDeepanshi)