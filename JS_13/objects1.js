// Objects are declared in 2 ways:
/* 1. As a literal
2. As a constructor
*/

/*
Singleton => Objects when made by a constructor, are not shared by other objects. */

//  🛑🛑  When we declare objects as literals then they are not made into singleton.

// When we declare objects as constructors then they are made into singleton.
// eg. Object.create() => Making objects via the constructor method which are eventually made into singletons.

// Let us make some objects via the literal method

const Obj = {}
// {} => This is an empty object

const Obj2 = {
  name: "Jaun",
  age: 25,
  location: "Manipal",
  email: "kaustubhyaksd@gmail.com",
  isLoggedIn: false,
  loggedInDays: ["Monday", "Tuesday", "Wednesday", "Saturday"], 
  "full name": "Jaun Kaustubhya"


  // format => key : value
}

// In contrast, in arrays, we only have values which are accessible via the array indexes.

// But in objects, we have keys which are accessible via the keys.

// Now there are 2 ways to access object values

// 1. Basic but less efficient but widely used

console.log(Obj2.name)
console.log(Obj2.age)

// 2. More efficient and preferred way
console.log(Obj2["name"])
// We used " " as name is a string type key


// why is this method more preferred:

// If we see I've added a parameter in " " in Obj2 which is a string parameter "full name"

// Using the method 1, we cannot print this but with method 2, we can print this:

console.log(Obj2["full name"])
// console.log(Obj2."full name")
// 🛑🛑🛑 Above method gives error, hence we commented it.


// 🛑🛑 Interview Question
// Q. Declare a symbol, use it as a key in an object and print it out.


// Declaring a Symbol

const mySym = Symbol("key1");

const Obj3 = {
  // 🛑🛑 Use [] to use it as a symbol, else it will be treated as a String
  [mySym]: "This is a Symbol Value BOYYYY"
}

console.log(Obj3[mySym]);
console.log(typeof Obj3[mySym])
// This symbol is hence storing a string value inside in the object, hence though we get string as the output, it is actually a symbol.
// This was the correct Syntax ✅✅✅


// Changing Object Values (Overriding)
Obj2.email = "JagguBandar@ChhotaBheem.com"

console.log(Obj2["email"])

// To avoid changing / Overriding the values of the object, use the Object.freeze() method.

// eg. 
Object.freeze(Obj2);
// Now we cannot override the values of the object.

// Let's verify
Obj2.name = "BAAAAHU";
console.log(Obj2["name"]);
// Name here did not change from Jaun to BAAAAHU.
console.log(Obj2)

console.log(Obj3)
// Output this to see that the key1 is of type Symbol. if we did not use [] then the key1 would be a normal key of string type.



// Functions in Objects

const Obj4 = {
  name: "Edd",
  age: 5,
  location: "Patna",
  email: "billobaggebilleyaan@gmail.com",
  isLoggedIn: true,
  loggedInDays: ["Monday", "Saturday"], 
  "full name": "Billu Don"


}

Obj4.greeting = function () {
  console.log("Jai Shree Ram");
}

console.log(Obj4.greeting);

// This will print the function itself, not the output.

// We here get a function return back
// 🛑🛑🛑Function is not executed, we get back only the reference of the function.

console.log(Obj4.greeting());

// let us use some string interpolation now (``)
Obj4.greeting2 = function () {
  console.log(`Jai Shree Ram, ${this.name}`);

  // 🛑🛑 Whenever we need to reference the same object, we use "this" keyword.

  // this. => This gives us access to all the properties inside the object.
  // Here we took name property
}

console.log(Obj4.greeting2());


