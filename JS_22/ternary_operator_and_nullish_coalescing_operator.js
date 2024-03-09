// Let us First look at Nullish Coalescing Operator (??)

// This is used majorly with null and undefined values.

// Sometimes when we are getting values from the Database, we might get values like null and undefined. These are the values that we donot want in our code.

// So we can use this operator (??) to avoid getting these values in our code.


// Let us look at the following examples:


let val;

// 1. 
val = 5 ?? 10;
console.log(val);
// Simple say is, both are values that are neither null nor undefined. So whichever value is first, print it

// 2.
val = null ?? 10;
// Here we get null and a value 10, so if we get null, instead of printing null, print the flag value 10
console.log(val);

// 3.
val = undefined ?? 14;
// Here we get undefined and a value 14, so if we get undefined, instead of printing undefined, print the flag value 14
console.log(val);

// 4. 
val = null ?? undefined ?? 14 ?? 17;
console.log(val);
// Here we get null, undefined, and values 14 and 17, so if we get null, undefined, and some flag values, whichever flag value comes first, print it.


// Now in big projects, instead of flag values, there we use some complex functions to connect to the DB and extract values from the DB if we ever get null or undefined values from the DB.

// So we can use this operator (??) to avoid getting these values in our code.




// Ternary Operator (?)

/* 

Syntax =>

condition ? statement 1 : statement 2;

if the condition is true, then (?)
Execute statement 1, 


else (:)
Execute statement 2

*/

// eg

let age = 15
// let age = 1 => Try this too


age >= 10 ? console.log("You are older than me") : console.log("You are younger than me")

// 🛑🛑 Donot write like this when using conditions in ternary operator: (age >= 10)

// 🛑🛑 Donot use parenthesis () to enclose conditions or else you'll get an error.

// age >= 10 ✅ 

// (age >= 10) ❌ 