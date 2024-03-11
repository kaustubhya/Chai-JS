// For loop Syntax

/*
for(initialization; condition; increment/decrement) {
// loop code
}
*/

// {} => Loop Scope

// eg

for (let index = 0; index < 10; index++) {
  console.log(index);
}

// The loop runs till the loop condition is true.

// When the loop condition becomes false, we come out of the loop.

// The loop variable is incremented or decremented in every iteration.

// The variable index is inside the scope of the loop. We cannot hence use it outside the loop.


// Nested For Loops

// eg

for(let i = 0; i < 5; i++) {
  console.log(`Outer Loop Value ${i}`)
  for(let j = 0; j < 3; j++) {
    console.log(`Inner Loop Value ${j}`)
  }
  console.log(``)

}

// In the inner loop, we can use the variable i for naming since it is inside the scope of the outer loop. But doing so is not recommended as we do not want to confuse the variable naming.


// Printing Tables

for(let i = 0; i <= 10; i++) {
  console.log(`Table of ${i}:`)
  for(let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
  console.log(``)
}


// For loops with Arrays

let myArr = ["Perman", "Pako", "Payaan", "Booby"]

console.log(myArr.length)

for(let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// Array size = 4

// First Index = 0
// Last Index = 4 - 1 = 3

// Loop starts from index 0 and go till index 3

// 🛑🛑 If we donot increment the loop variable (i.e. if we donot do i++), we will get an infinite loop.


// 🛑 Some Keywords with Loops

// 1. break (exit out of the loop)

// 2. continue (skip a particular loop iteration) 

// break eg

for(let i = 0; i <= 10; i++) {
  if(i == 7) {
    console.log(`Detected ${i}`)
    break;
  }
  console.log(`Value of i => ${i}`)
}



// continue eg

for(let i = 0; i <= 10; i++) {
  if(i == 7) {
    console.log(`Detected ${i}`)
    continue;
  }
  console.log(`Value of i => ${i}`)
}