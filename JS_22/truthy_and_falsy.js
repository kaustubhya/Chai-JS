// In JS there are true and false values and then there are truthy and falsy values.

// 🛑🛑 When we are certain that values are true or false, we use true or false. We can get this when we use relational operators to check the values, compare them and then get the result from it.

// /* eg. 

let age = 12;

if(age > 18) {
console.log("You are an adult")
}

else {
console.log("You are not an adult")
}


// Here age > 18 will definitely give us either true or false since we are using relational operators to compare the values (age here).

// 🛑🛑 When we assume that values are true or false, we use truthy and falsy.

// eg

let name = "KSD"

if(name) {
  console.log("I have a name");
}

else {
  console.log("I have no name");
}

// Now here we did not compare name with anything here, we just assumed that if the name string has a value inside it, then name is true.

// Else if name were to be an empty string, then name would be false.

// See:

let name2 = ""

if(name2) {
  console.log("I have a name");
}

else {
  console.log("I have no name");
}

// Let us see for arrays:


let arr = []

if(arr) {
  console.log("I am truthy");
}

else {
  console.log("I am falsy");
}



let arr2 = [4,5,6,7]

if(arr2) {
  console.log("I am truthy");
}

else {
  console.log("I am falsy");
}

// 🛑🛑 Now I am giving you the values that are considered as falsy in JavaScript

// Falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// All other values are considered as truthy by JS

// Some tricky truthy values:

// "0", 'false', " ", [], {}, function(){}

// "0", 'false', " " are all strings with some values. Hence they are truthy. 

// function(){} means empty function


// Now before we used to check if array is empty or not by just doing or relying on truthy or falsy. Well leaving it to assumption is not the right approach, we can check if the array is empty or not by using the length property of the array.

/*
let arr2 = [4,5,6,7]

if(arr2) {
  console.log("I am truthy");
}

else {
  console.log("I am falsy");
}


WRONG WAY!!!

*/


/*
RIGHT WAY!!!
*/

let array = []
// let array = [2] => Try this too


if(array.length === 0) {
  console.log("Array is Empty");
}
else {
  console.log("Array is Not Empty")
}


// Similarly for objects, do the following RIGHT method to check if object is empty or not

/*
let obj = {}

if(obj) {
  console.log("I am truthy");
}

else {
  console.log("I am falsy");
}


WRONG WAY!!!

*/


/* RIGHT WAY  */

let obj = {}
// let obj = {2 : "55"} => Try this too


if(Object.keys(obj).length === 0) {
  console.log("Object is Empty");
}

else {
  console.log("Object is Not Empty")
}


// Object.keys(obj) => This gives us an array of keys of the object.

// (Object.keys(obj).length === 0) => We compare this array's length (array of keys of object) to 0. 
// If it is equal to 0, then the object is empty. Otherwise it is not empty.


// 🛑🛑 The reason we are doing this is because we get truthy everytime for [] and {} and there we can not know if the array / object is empty or not. Hence we used this method. 


// Some Important Results

/*

0 == 0  is true

false == 0  is true

false == ""  is true

0 == ""  is true

*/