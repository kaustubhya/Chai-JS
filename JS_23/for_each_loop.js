const langs = ["js", "py", "cpp", "java", "c", "ruby"]

// We use for Each for arrays in most of the cases.

// forEach is a method/function of array, which is used to loop through the array.

// Hence it is also called as a "Higher Order Function"

// Syntax + Example:

const arr_Name = ["a", "b", "🕉️", "devilliers"]

arr_Name.forEach( function(item)  {
  // 🛑🛑 This here is a callback function
  // item will loop through each element of the array
  console.log(item)
})

// Doing the same in the arrow function syntax

arr_Name.forEach( (item) => {
  console.log(item)
})

// Using for Each loop + using it with functions (& arrays)

const fruits = ["apple", "mango", "banana", "orange"]

function printME(item) {
  console.log(item)
}

fruits.forEach(printME)

// Here we just gave the reference of the function in the loop. We made the function outside here.
// here 
// printMe ✅ 
// printME() ❌ 

// Normally we make functions inside the forEach loop.


// Passing more things in the callback function in the forEach loop

// Passing item/value, index, array as arguments

// 🛑🛑🛑 Eg:
const food = ["apple", "mango", "banana", "orange", "maggie", "dal"]

food.forEach( (item, index, arr) => {
  console.log(`Item: ${item}, Index: ${index}, array: ${arr}`)
  
}) 


// Now we will use forEach loop in an array of objects to extract the values from the objects.

const code = [
  {
    lang: "c plus plus",
    extension: ".cpp"
  },

  {
    lang: "java",
    extension: ".java"
  },
  
  {
    lang: "python",
    extension: ".py"
  },
  
  {
    lang: "JavaScript",
    extension: ".js"
  },

  
]

code.forEach ( (item) => {
  console.log(item.lang);
  // 🛑 item is each individual object in the array
})

code.forEach ( (item) => {
  console.log(item.extension);
})

// 🛑 This is very imp and useful as it is used to extract values from the database or api objects.