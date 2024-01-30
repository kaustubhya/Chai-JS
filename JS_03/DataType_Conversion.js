let score = 33

// Let us first see the techniques where we accquire the datatype of a data

console.log(typeof score)
console.log(typeof {score})

// Notice the change in brackets
console.log(typeof (score))

// Now some type conversion techniques

let valueInNumber = Number(score)
// This "Number" makes sure we are converting the score data to Number datatype

console.log(score)

// Now let us introduce an error to see JS vulnerability

let score2 = "22mnto"
// This is a string

let valueInNumber2 = Number(score2)
console.log(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

// Here we get NaN => Not a Number
// So it is showing number output in typeof Number but when we did console.log to Value of Number, we got NaN

// This is a drawback of JS, i.e. drawback of Number

// JS does not have Strict Mode hence many people use TypeScript


// Conversion for various datatypes:

/*
33 => 33
"string" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

// let us see for Number => Boolean
let isLoggedIn = -10
// Number datatype


// Number DataType Converted to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(booleanIsLoggedIn)

// we saw in number we got 1 as output but for boolean , this 1 got converted to true

// For 0 it is false, for any other number, it is true


// let us see for String => Boolean
let string = ""
// string datatype
let string2 = "some string"


// Number DataType Converted to boolean
let boolFromString = Boolean(string)
let boolFromString2 = Boolean(string2)

console.log(boolFromString)
console.log(boolFromString2)

// Empty string gives false, others give true


// Number to String

let myNum = 33
let StringFromNum = String(myNum)
console.log(StringFromNum)
console.log(typeof StringFromNum)




