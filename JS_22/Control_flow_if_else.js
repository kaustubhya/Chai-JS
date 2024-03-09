// Let us begin this control flow section by starting with if-else statements

// Syntax:

/*
if(condition) {
  // code
}
*/

// Now when "if" condition is true then we enter the if block and the code inside the if block will be executed otherwise we do not enter the if block and the code will not be executed.

// eg.

if (true) {
  console.log("This is executed")
}
// Condition is true and we enter the if block and the code is executed

if(false) {
  console.log("This is executed")
}
// Condition is false, we do not enter the if block and the code is not executed.

// 🛑 Now instead of writing true or false in the conditional box, we can use a lot of operators to logically compare 2 quantities and help us give the conditional result to be true or false.

// Some of those are:

/* 
== Equal to
!= Not equal to
=== Strictly equal to
!== Strictly not equal to
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
*/

// === Compares both datatypes and values
// == Compares only values

/* eg. 

2 === "2" gives false

but 

2 == "2" gives true as JavaScript converts "2" to Number automatically when comparing the quantities as 2 is a Number

*/

// = is an assigment operator, it assigns the value on the right side to the variable on the left side.
// == is a relational operator, it compares the values and returns true or false.

// Let us see if else now

/*
if(condition) {
  
}
else {
  
}
*/

// Now here if the "if" statemnet is true then we enter the "if" block and the code inside the 'if' block will be executed otherwise we enter the "else" block and the 'else' statement is executed.

// eg.

let temperature = 50;

if(temperature > 50) {
  console.log(`Temp is more than: ${temperature}`)
}

else {
  console.log(`Temp is less than ${temperature}`)
}

console.log(`Very hot day of ${temperature} degrees`)
// This statement will execute compulsarily regardless of the if-else condition.


// Scoping with if else


const score = 100

if(score >= 100) {
let power = "Invisibility"
console.log(`My superpower is: ${power}`)
}

// console.log(power)
// Here we get an error as power is not defined outside the if block, i.e. power is not defined in the global scope, it is defined inside the scope of the if block, hence we can not use it.

// But if we use var instead of let / const then we can use power as it is defined in the global scope. But using var in JS is not a good practice as it can cause bugs in the code.

// 🛑 var's scope is completely global, i.e. it can be used anywhere in the code.


// Short hand notation for if else

// Using implicit scoping (not using {})

// if(condition) console.log(value)

// eg

let balance = 100

if(balance == 100) console.log("Ok")

// 🛑🛑 To execute multiple statements, however this is not a good practice as it is not a good practice to use multiple statements in a single line, do the following:

if(balance >= 100) console.log("Alright"), console.log("All Good")

// using if, else if, else

// These are used to perform multiple conditioning statements together when we have to use more than one if-else statements

let money = 1000

if(money < 100) {
  console.log("broke")
}

else if(money < 500) {
  console.log("poor")
}

else if(money < 1000) {
  console.log("middle class")
}

else if(money < 1200) {
  console.log("rich")
}

else {
  console.log("tycoon")
}


// Using multiple conditions in an if statement

// We can use && and || for this


// && - All conditions should be true here to enter the if block

// eg.

let userLoggedIn = true
let useDebitCard = true

if(userLoggedIn && useDebitCard && 2 == 2) {
  console.log(`And && all conditions are true`)
}

// || - Atleast one condition should be true here to enter the if block

// eg.

let googleAuth = false
let facebookAuth = true

if(googleAuth || facebookAuth || 1 > 7) {
  console.log(`Or || Atleast ONE condition is true`)

}