// {} => This is scope.

// {} When used with loops, functions and if-else statements give us the scope of that program.

// But {} when used with objects tells us about the object declaration.

// 🛑🛑 Code inside {} => Block Scope 

// 🛑🛑 Code outside of  {} => Global Scope



// Problems of using var

if(true) {
  let a = 10;
  const b = 20; 
  var c = 30;
  d = 40;
}

// console.log(a); // We get error as this statement is trying to access a variable here which is declared and initialized outside of its scope.

// console.log(b); // We get error as this statement is trying to access a variable here which is declared and initialized outside of its scope.

console.log(c); // We get no error here, in an ideal world we should but we donot. Hence using var is not a good practice as it violates the scoping rules. See another example below.

console.log(d); // Same result as we got with var, hence donot use this practice too.

var d = 500;
e = 77;

if(true) {
  let a = 10;
  const b = 20; 
  var d = 30;
  e = 40;
}

console.log(d);
console.log(e);


// Here we see that we declared d = 500 in global Scoping but when we tried to access it, it gave us the result as 40. Because the d in the block scope took preceedence over the d in the global scope. Hence using var here and everywhere in JS is not a good practice.

// Same with using a variable with no keyword, as seen in 'e' case where it behaves and gives the output just like var.

// 🛑 Global Scope values are available inside the block scope but vice versa is not true.


// let us apply the same case for let and const

const one = 80;

if(true) {
  const one = 50;
  console.log("I am the inner const of value " , one);
}

console.log("Const Value " , one);


let two = 820;

if(true) {
  let two = 50;
  console.log("I am the inner let of value " , two);
}

console.log("Let Value " , two);


// 🛑 INTERVIEW!! => Global Scopes inside the node environment and the browser console when we use inspect in browser are different.
