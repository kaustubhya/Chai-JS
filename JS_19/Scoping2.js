// Nested Scoping

// Now the basic rule of nested scoping is that the parent values can be taken in by childern but child values can not be taken in by the parent.

// Let us see nested scoping in functions:

function one() {
  // one is the parent here

  const username = "KSD";

  function two() {
    const website = "KSD.com";
    console.log(username);
    // child is taking in parent value, hence allowed ✅ 
    
  }

  // console.log(website);
  // Parent is taking in child values, hence not allowed ❌ 

  two()
}

one()


// Now let us see the nested scoping in case of if - else

if(true) {
  const user = "Maahi";

  if(user === "Maahi") {
    const website = "XYZ.com";
    console.log(user , website);
  }

  // console.log(website);
  // This will give error as website is not defined in the parent scope.
}

// console.log(user);

// This will also give error as user is not defined in the parent scope.



// ******************************************

// Now there are 2 ways of writing functions


// 1. Normal Way

function addOne(num){
  console.log(num + 1);
}

addOne(10);


// 2. Making it as "EXPRESSIONS". This is like a variable

const addTwo = function(num){
  return num + 2;
}

const ans = addTwo(10);
console.log(ans);

// OR

console.log(addTwo(10));

// Here we used return, And we did not print it, so we will print it here now


// 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 IMP
// In 1, we can call the function before declaring it.

// In 2, we cannot call the function before declaring it as we are using it as an expression and storing it in a variable.

// THIS IS CALLED HOISTING


/* console.log(addTwo(10));
const addTwo = function(num){
  return num + 2;
}

NOT ALLOWED ❌❌❌ */

/*
addOne(10);
function addOne(num){
  console.log(num + 1);
}

ALLOWED ✅✅✅
*/


