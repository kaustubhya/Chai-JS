// This functionality is more often used in the real world like in Shopping Carts, where we calculate the price of all cart items.

// Let us understand its working with an example.

const myNums = [1,2,3]

let initialValue = 0;

const myTotal = myNums.reduce(function (accumulator, currentValue) {
  console.log(`Accumulator value is: ${accumulator} and current value is ${currentValue} and the total is ${accumulator + currentValue}`)
  return accumulator + currentValue
}, initialValue)

console.log(myTotal)

// Now here we have 3 variables, accumulator, initialValue and the currentValue

// currentValue is the each individual value of the array

// accumulator is the accumulated value of the array

// Initial Value is the inital value of the accumulator

// Working:
// Initially, accumulator = 0 (initial value)
// then we use reduce where we made sure that after each iteration, accumulator value = accumulator + currentValue

/* i.e.

Iteration 1: 
accumulator = 0, currentValue = 1, accumulator + currentValue = 1

Iteration 2:
accumulator = 1, currentValue = 2, accumulator + currentValue = 3

Iteration 3:
accumulator = 3, currentValue = 3, accumulator + currentValue = 6

// Hence we get 6 as output when we do console.log(myTotal)

*/


// Using forEach method for the same reduce functionality

const myNums2 = [1,2,3]

let forEachTotal = 0;

myNums2.forEach(function (value) {
  console.log(`Value is: ${value}`);
  forEachTotal += value;
});
console.log(forEachTotal);

// Now let us use reduce for an array of objects

const courses = [
  {
    name: "js course",
    price: 1200
  },
  {
    name: "java course",
    price: 999
  },
  {
    name: "web dev course",
    price: 2500
  },
  {
    name: "docker course",
    price: 499
  },
]

// This situation can be similar to the one where we have some courses in our cart and we have to calculate the cart total price.

// Now we will use an arrow function while using reduce and do the same as we did before i.e. calculating the total price of the courses.

// Also no need to separately initialize an initialValue variable here.

const price = courses.reduce( (acc, item) => 
  (
    item.price + acc
  ), 0)

console.log(price)

// here acc = accumulator
// item = current item
// 0 = initial value of accumulator

// Since we used implicit return, we used () and it returned the value directly.

// In advanced cases, we would be checking if the price item in object is a Number or not before adding it to the accumulator.

// But the basic working is same, as we did here.