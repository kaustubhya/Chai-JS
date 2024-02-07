// Math library comes in JS by default

console.log(Math);
// this is an object having many properties (see in browser)

// Let us see some properties
console.log(Math.abs(-98));
console.log(Math.abs(98));

// - to + and + to + in absolute (abs)

console.log(Math.round(4.956))

// Ceiling and floor
console.log(Math.ceil(4.956))

console.log(Math.floor(4.956))

console.log(Math.min(5,7,2,-4))
console.log(Math.max(5,7,2,-4))


// 🛑 IMP Math.random
// gives random values between 0 and 1 in decimal
console.log(Math.random());

// getting values between 0 and 10 in decimal
console.log(Math.random() * 10);


// getting values between 1 and 10 in decimal
console.log((Math.random() * 10) + 1); 
// doing +1 to avoid getting zero values 

// 🛑🛑 getting values between 1 and 10 in integer
console.log(Math.floor(Math.random() * 10) + 1);

// 🛑🛑 getting values between a given specified range of numbers (max and min) in integer

const max = 30;
const min = 20;

console.log(Math.floor(Math.random() * (max - min + 1)))
// 🛑🛑 Special formula 
// (max - min + 1) -> This gives us values between 0 and 10



// To get values between min and max, do + min
// 🛑🛑🛑 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


