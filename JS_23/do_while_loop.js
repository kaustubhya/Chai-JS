// Do While Loop Syntax:

/*

initialization

do {
  // Loop Code


  // Updation
} while (condition)
*/


// eg.

let i = 0;

do {
  console.log(`Value of i => ${i}`)

  i = i + 1;
}while (i < 10)



console.log(``)
console.log(`*******************************`)



// 🛑 Do while loop runs at least once even if the condition is false. 

// eg.

let j = 12; // Here see j is more than 10, which should be false in the condition.

do {
  console.log(`Value of j => ${j}`)

  j = j + 1;
}while (j < 10);

// Even if the condition is false, the loop runs at least once. See the code output here!!