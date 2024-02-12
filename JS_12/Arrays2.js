const marvel_heroes = ["hulk", "thor", "ironman", "captain america", "black widow"]

const dc_heroes = [ "batman", "superman", "flash", "green lantern", "wonder woman"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// // Here we got an array inside of an array when we did push it.

// // We did not want this, we wanted was that these 2 arrays will get merged

// // 🛑🛑 Reason -> JS takes anything as a data inside the arrays, be it numbers, strings, objects, or EVEN ARRAY itself.

// // So it pushed the whole dc heroes array as a single array datatype into marvel array, rather than pushing the individual elements of the array.

// // How to access elements in this case now

// // Accessing marvel array elements
// console.log(marvel_heroes[2])
// console.log(marvel_heroes[5])


// // Accessing elements of dc array inside the marvel array

// console.log(marvel_heroes[5][0])

// console.log(marvel_heroes[5][2])
// console.log(marvel_heroes[5][3])

// // To solve this issue, use concat() method

const allHeros = marvel_heroes.concat(dc_heroes)
console.log(allHeros)

// now we see that all elements inside both the arrays are merged into one array. And we stored all of this into a new array, to avoid the previous errors.

// 🛑🛑 An even better approach is to use "SPREAD OPERATOR" here

const spreadAllHeroes = [...marvel_heroes, ...dc_heroes]

// 🛑🛑🛑 By using ..., now we donot have it as an array but as individual elements.

// So we spreaded the whole array into individual elements.

console.log(spreadAllHeroes)

// Spread operator is much much better than concat() method.

// Let us look at another example now

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

// Here we have normal element, an array and an array inside an array

// So to print the elements in such a way that all elements are in one array, we use the flat() method.

// flat() - This method flattens the array. Inside the (). We can specify the depth of the array.

// Depth of the array means how many layers of the array we want to flatten.

// Here the depth is 2, so it will flatten the array inside the array.

// But a small hack is to use "Infinity" as the depth.

const flatArray = another_array.flat(1)

const flatArray2 = another_array.flat(2)


const flatArray3 = another_array.flat(Infinity)

console.log(flatArray)

console.log(flatArray2)

console.log(flatArray3)


// Let us see some more array methods

console.log(Array.isArray("Horimiya"))
// Array.isArray() - This method checks if the variable (here the string "Horimiya") is an array or not.

console.log(Array.from("Horimiya"))

// Array.from() - This method converts the string ("Horimiya") into an array.

// Interesting case (Object)

console.log(Array.from({name: "Horimiya"}))

// Here we get an empty array because we have not specified whether we want an array of keys or an array of values etc. So specification in the case of converting objects to arrays is very important.

// Last case

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Here we have multiple variables, to put the values of all these variables into a single array, we will use of() method of Array.

console.log(Array.of(score1, score2, score3))

// Array.of() - This method creates an array from the given arguments.

