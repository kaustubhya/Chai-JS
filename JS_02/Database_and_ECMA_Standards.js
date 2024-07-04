// In JavaScript all the newer version JS Codes are written in the form of "use strict;"
// This is a directive to the JavaScript engine to use the "strict mode"

// There is nothing such as "use no strict" in JavaScript

// alert( "Hello World!" );

// This code runs fine in browser but is not fine while running in node.js

// JS ignores spaces but please do make the code readible

// use mdn web docs for reference

/*
Official JS Documentation: 
https://tc39.es/ecma262/ 
*/

/*
datatypes:
- primitive
- non-primitive

- primitive datatypes
1. String 
let name = "Monu"

2. boolean
let isLoggedIn = false

3. Number
eg. 2 to power 53, 2.569, -58, -12.215235 etc.

4. BigInt

5. null (this is a standalone value)
(empty value basically) *******************************

6. undefined (when we donot give / assign a value) *****************************

7. Symbol -> Unique (used in React, for symbols, components etc.)

Primitive Datatypes over
*/

let age = 41;
console.log(typeof age);

// "typeof" is basically used to give us back the type of datatype

console.log(typeof "Nunneo");

console.log(typeof undefined);

console.log(typeof null);

/* ##################################################3
Notice here for null, we get returned back an object, when we use typeof, for undefined, we get back undefined only


This tells us undefined is a type in itself whereas null is an object
############      INTERVIEW QUESTION        ###############

This was initially a bug and most websites got made using this bug. So if they changed it then, then most websites would have been crashed, so they kept it as it is!!
*/
