// JavaScript Execution Context

const { run } = require("node:test");

// This means that whenever we've made a file in JS, how will JS run it and execute it.

// This happens in 2 steps which we will see later.

// Whenever we make a code file. JS makes a Global Execution Context of that code file which is stored in "this" variable.

// 🛑🛑 Execution Context of different environments like Browser, Node.js, Bun, Dino are different.

// 🛑 For Browser, the value of this is "Window Object"

// All of this is executed inside a thread.

// 🛑 Keep in mind that JS is single threaded. Everything inside it is a process.

// Types of Execution Contexts:

// a. Global Execution Context

// b. Function / Functional Execution Context

// c. Eval Execution Context (This is usually a property of the Global Object)

// Execution of a JS code in 2 phases:

// 1. Memory Creation Phase or Creation Phase

// 2. Execution Phase

// Memory Creation Phase: This here declares and creates spaces for the variable memory blocks and does not execute it.

// eg.

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Steps of this code execution:

// 1. Creation of Global Execution or Global Environment

// Every code that is run, is done so via the global execution and it is allocated inside "this" keyword.

// 2. Memory Phase

// All variables are collected and stored inside the memory creation phase.

// say val1 goes inside the memory phase,

// the value stored inside val1 here in memory phase will be: "undefined".

/*
Similarly: val2 => undefined 

addNum => definiton of the function is stored (i.e. all the code bit inside the function scope).


result1 => undefined

result2 => undefined
*/

/*
3. Execution Phase

val1 = 10

val2 = 5

addNum => nothing will happen here as there is nothing to execute
All happened in the memory phase when we defined the function.


result1 => Now since we are calling the addNum function, a new execution context is created and the code inside the function is executed there as follows:

Inside this execution context, a new variable environment + a new execution thread is made.

This is done everytime the function is called.

Also here in this new execution context, steps 2 and 3 (creation of memory and execution phase) will also happen everytime when a new context is created.


// Memory

val1 = undefined
val2 = undefined
total = undefined


// Execution
val1 = 10
val2 = 5
total = 10 + 5 = 15

// This total is now used with "return" keyword, hence we will return it to its parent execution context i.e. the global execution context.

When this temporary execution context is over i.e. it has done its job, it is destroyed.

now after all this,
result1 => 15

result2 => Same process is repeated for result2 as it was done for result1 ditto!!.

now after all this,
result2 => 12 (Values are changed here now)

*/
