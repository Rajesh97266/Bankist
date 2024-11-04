'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);
// const userName = user
//   .toLocaleLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(userName);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log([...arr]);

// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'f', 'i', 'h', 'g'];
// console.log(arr2.reverse());

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);

// //join

// console.log(letters.join('-'));

// const arr3 = [23, 44, 88];
// console.log(arr3.at(1));

// console.log(arr3.at(-1));

// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----- For Each ------');
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement} in `);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //map

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// //set

// const currenciesUnique = new Set(['USD', 'GDS', 'USD', 'JSD', 'JSD']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value} : ${value}`);
// });

// const checkDogs = function (dogsJulia, dogskate) {
//   const dogJuliaCorrected = dogsJulia.slice();
//   dogJuliaCorrected.splice(0, 1);
//   dogJuliaCorrected.splice(-2);
//   const dogs = dogJuliaCorrected.concat(dogskate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     let age =
//       dog >= 3
//         ? `Dog Number ${i + 1} is adult and is ${dog} Years old `
//         : `Dog number ${i + 1} is still a puppy `;
//     console.log(age);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const euroToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movementsUSD);

// const movementsUSDFor = [];]
// for (const mov of movements) {
//   movementsUSDFor.push(mov * euroToUsd);
// }

// console.log(movementsUSDFor);

// const movementsDescription = movements.map((movement, i) => {
//   if (movement > 0) {
//     return `Movement ${i + 1}: You deposited ${movement}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
//   }
// });

// console.log(movementsDescription);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const withdrawls = movements.filter(mov => mov < 0);

// console.log(withdrawls);

// //accumulator is like a snow ball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// const checkDogs = function (dogsJulia, dogskate) {
//   const dogJuliaCorrected = dogsJulia.slice();
//   dogJuliaCorrected.splice(0, 1);
//   dogJuliaCorrected.splice(-2);
//   const dogs = dogJuliaCorrected.concat(dogskate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     let age =
//       dog >= 3
//         ? `Dog Number ${i + 1} is adult and is ${dog} Years old `
//         : `Dog number ${i + 1} is still a puppy `;
//     console.log(age);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// let calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   console.log(average);
//   return average;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
