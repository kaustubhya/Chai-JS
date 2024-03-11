// while loop syntax:

/*
initialization

while(condition) {
// code

updation
}
*/


// eg.

let index = 0;
while(index <= 20) {
  console.log(`Value of index => ${index}`)

  index = index + 2;
}

// While Loop + Arrays

let myArr = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"]

let i = 0;

while(i < myArr.length) {
  console.log(myArr[i])

  i = i + 2;
}