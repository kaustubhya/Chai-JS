const arr = [0,1,2,3,4, true, "hitesh"]

// Arrays can have different types of elements inside it, as shown above. All of this is stored under a single variable.

// In JS, arrays are re-sizable.

// Indexing in arrays starts from 0.

// When doing copy operations, in JS, arrays do shallow copy.

// Shallow Copy - While doing shallow copy of an object, its properties share the same reference point.

// Deep Copy - While doing deep copy of an object, its properties donot share the same reference point.

// Accessing array elements

console.log(arr[6])

// 6 is the index number of the element we want to access.

// Another way of Declaring and Initializing Arrays and Accessing Array Elements

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);


//  Some array methods

// 1. push() - Adds an element at the end of the array

myArr2.push(6)
// 6 is is the element value

myArr2.push(44)

console.log(myArr2)

// 2. pop() - Removes the last element of the array

myArr2.pop()
myArr2.pop()

console.log(myArr2)

// 3. unshift() - Adds an element at the beginning of the array

myArr2.unshift(10)
console.log(myArr2)

// This is useful while making todos and other stuff where we add elements in the first index of the array and shift all the other elements.

// 4. shift() - Removes the first element of the array

myArr2.shift()
myArr2.shift()

console.log(myArr2)

// Let's see some questionaire methods in JavaScript now (these answer us in true or false)

// 1.inclues() - Checks if the array includes the element or not

console.log(myArr2.includes(6))

console.log(myArr2.includes(4))

// 2.indexOf() - Returns the index of the element

// If the element is not present in the array, it returns -1

console.log(myArr2.indexOf(4))

console.log(myArr2.indexOf(54))

// 3. join() - Joins all the elements of the array with a separator

const newArr = myArr2.join()

console.log(myArr2)
console.log(newArr)
console.log(typeof newArr)


// 🛑🛑 slice and splice 

// Slice - Slices out a piece of an array. It creates a new array.

const myArr3 = new Array(0,1,2,3,4,5,6,7,8,9)

console.log("A", myArr3)

const myNewArr = myArr3.slice(1,3)

console.log(myNewArr)

console.log("B", myArr3)


const myNewArr2 = myArr3.splice(1,3)
console.log("C", myArr3)


console.log(myNewArr2)


// 🛑🛑 In slice, we donot include the last index. Also the original array remains the same.

// In splice, we include the last index. Also the original array is modified. I.E. the elements spliced from the original array gets deleted or removed permanently from the original array.

// In slice, this does not happen. Even though we slice out elements from the original array, the original array remains the same.


