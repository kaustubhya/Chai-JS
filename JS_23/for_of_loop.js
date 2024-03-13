// This is an Array Specific loop

// Sometimes we have an array of objects, in that scenario, we use this loop to loop through the objects and then using the (.) notation, extract values from within the object.

// Syntax

/*

for (const variable_name(say i) of datatype(say object)) {
// code

}

*/

// eg

let arr = [1,2,3,4,5,6,7,8,9]

for(const index of arr) {
  console.log(index);
}

// This loop can also be used for arrays, strings, objects etc.

// Printing the output in one single line

let arr2 = [1,2,3,4,5,6,7,8,9]

let output = ""

for(const i of arr2) {
  output = output + i + " "
}
console.log(output)



let greeting = "Hello Erling"

for(const greet of greeting) {
  console.log(`Each Char: ${greet}`);
}





// Maps in JavaScript



// Map object is a collection of key-value pairs. It also remembers the original insertion order of the keys.
// Any value can be used as a key or a value.
// Maps are iterable, i.e. we can loop through a map.

// They are just like arrays but they have unique values.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Syntax
const map = new Map();

// Map has many attributes, use it as follows:

map.set("IN", "India")
map.set("US", "United States of America")
map.set("UK", "United Kingdom")
map.set("DE", "Germany")
console.log(map)


// Now see this scenario

const map2 = new Map();

// (key, value)
map2.set("IN", "India")
map2.set("US", "United States of America")
map2.set("UK", "United Kingdom")
map2.set("DE", "Germany")
map2.set("DE", "Germany")

// Here you see we added Germany and DE deliberately twice. But when we output it, the map only considered it once.

console.log(map2)

// Also the order of entering the key and value and they getiing outputted is in the same order.


// For of loop with Map

// 🛑 See special Syntax


// 3 ways
for(const [key,value] of map) {
  
  // key
  console.log(key)

 
}



for(const [key,value] of map) {

  // value
  console.log(value)

}



for(const [key,value] of map) {

  // key and value
  console.log(` ${key} =>  ${value}`)

}



// For of loop + Objects

// Now we can not use the same technique to loop through objects as we did in maps.


// The following example will give us an error:

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }

// To resolve this issue, we will use a for in loop. (Go to that file)



