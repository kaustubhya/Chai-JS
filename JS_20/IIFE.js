// 🛑🛑 IIFE => Immediately Invoked Function Expressions


// 🛑🛑🛑🛑🛑🛑🛑 Why use IIFE?

// 1. To avoid the code from getting polluted by the global scope.

// Say we wrote a code inside a function, now since parent values can be taken in by a child, we have to use IIFE to avoid our code from getting polluted by the global scope. We create a separate scope inside the function.

// 2. When we want our code to get executed immediately.

// eg. We write a code which helps us to get connected to the database.

// eg

// Normal Way

// function chai() {
//   console.log(`DB Connected`);
// }

// chai()


// IIFE Way 

(function chai2() {
  console.log(`DB Connected`);
})();

// Syntax => ()()

// Here first () => Function Definition Call

// Second () => Function Execution Call

// IIFE with Arrow Functions

( () => {
  console.log(`my Arrow Function`);
})();

// 🛑🛑 In IIFE we need to specify when to end the context of the function, for this, we use ";" to end context of IIFEs. Put a ; (semicolon) at the end of the IIFE.

//  Now we know how to write 2 IIFEs together.

// Normal IIFE having a name is called "Named IIFE"
/* eg. (function chai2() {
  console.log(`DB Connected`);
})(); */

// IIFEs having no name are called unnamed IIFEs.

/* eg. ( () => {
  console.log(`my Arrow Function`);
})() */

// Passing variables in IIFEs.

// eg.

((username) => {
  console.log(`Hello My Lovely, ${username}`);
})("Raju");
// Please take care of spaces in IIFEs too i.e. spaces between two ((
