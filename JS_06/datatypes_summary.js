// There are 2 types of datatypes classification in JS
// • Primitiva and  • Non Primitive

// These are based on how you store your data in your memory and how you access your data from the memory

/*
// 1. Primitive Data Types

a. String
b. Number (int, long, float, double. Stuff like this)
c. Boolean
d. Undefined (variable declared, memory space declared but value not initialized)
e. Null (empty, totally empty)
f. Symbol
g. BigInt

All of these are call by value

// 2. Non Primitive (Reference)

All of these are call by reference i.e. we can allocate its reference in our memory

a. Arrays
b. Objects
c. Functions
d. Date
e. RegEx
*/


/* 

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean


On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String

JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

*/

// Declaring Symbols

const id = Symbol("123")
const myId = Symbol("123")


// Big Int Example
console.log(id === myId)

const bigNumber = 1234679112345678912346579n;
// Putting 'n' to make this number a big int

// Arrays
const heroes = ["krish", "bheem", "pikachu"];

// Objects
// Written in {} as-
// key : value

// eg. 

const myObj = {
  name: "Sashank",
  age: 19
}

// Function 
// There are many ways to declare functions in JS, let us see how to do so while treating it as a variable.

// Format: function() {}

const basicFunction = function() {
  console.log("Hello Ji")
}

// Calling the function
basicFunction()

// 🛑🛑🛑🛑 Return type of different datatypes:
// use 'typeof' command before the variable in console.log

// eg.

let symbol = Symbol("123")
console.log(typeof symbol)

/*
Return type of datatypes in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// Return type of all Non Primitive Datatypes is "Function"
// For function, it is called: "Object Function"