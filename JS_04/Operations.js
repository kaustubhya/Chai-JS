let value = 33
let negativeValue = -value
console.log(negativeValue)


// Let us look at some operators 

console.log(4 + 3)
console.log(4 - 3)
console.log(4 * 3)
console.log(4 ** 3) // 4 power 3 = 64 
console.log(4 / 3)
console.log(4 % 3)


let str1 = "Hello"
let str2 = "World"

let str3 = str1 + " " + str2
console.log(str3)

// Now let us see some operations where we include different datatypes 

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")
console.log(1 + "2" + 3)
console.log(1 + 4 * 5 % 3) // order * > % > + (not recommended, use ())

console.log(+true)
console.log(true)
// console.log(true+) // gives error

// Some bad practices
console.log(+"")
let num1, num2, num3

num1 = num2 = num3 = 2+2
console.log(num1)


// Prefix and Postfix operators

// ++num and num++ 

/*
++num first does +1 and then prints num value 
num++ first prints num value and then does +1 
*/

/*
eg2

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

*/


