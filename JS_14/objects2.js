// Declaring Objects via constructors

// 1. Using "new" keyword => Singleton Object
const myObj = new Object();
console.log(myObj);

// 2. Using Object Literal => The Literal method
const myObj2 = {};
myObj2.name = "Kishore"
myObj2.age = 77
myObj2.isLoggedIn = true


console.log(myObj2);


// Now let us declare Objects inside the objects 

const regularUser = {
  email: "abc@xyz.com",
  fullName: {
    firstName: {
      // We can keep on nesting objects inside of objects however long we want
      firstLetter: "K",
      fullFirstName: "Kishore"
    },
    lastName: "Kumar"
  },
  age: 111
  
}

console.log(regularUser.fullName.firstName.firstLetter)

// Merging and Combining different  objects
const objA = {key1: "A", key2: "B"}
const objB = {key3: "C", key4: "D"}
const objC = {key5: "E", key6: "F"}
const objD = {key7: "G", key8: "H"}

const ansObj = {objA, objB, objC, objD}
console.log(ansObj)
// Using this method will not give us the desired result

// to get all the keys and values in one single object, we use Object.assign() here

// Object.assign() - This method will merge all the objects into one object.

const ansObj2 = Object.assign({}, objA, objB, objC, objD);
console.log(ansObj2)

// Here {} is the target and objA, objB, objC, objD are all the sources. We are merging all the sources into the target i.e. {}.

// We can also use the spread operator to merge all the objects into one object.
const ansObj3 = {...objA, ...objB, ...objC, ...objD}
console.log(ansObj3)

// This is the most used method to merge objects.

// Now when we receive an object from database, it usually arrives in the form of Arrays of Objects.

const users = [
  {
    id: 1,
    name: "One"
  },

  {
    id: 2,
    name: "Two"
  },

  {
    id: 3,
    name: "Three"
  }
  
]

// We can use the forEach() / map method to loop through the array of objects. This way we can get all objects

console.log(users.forEach(user => console.log(user.name)))
// user is a single object

// We can also use the map() method to loop through the array of objects. This way we can get all values.

console.log(users.map(user => console.log(user.name)))

// Now to access a spcific item inside the object, we can do:

console.log(users[0].name)


// 🛑 Now we can get all keys from an object and store it in an array
console.log(Object.keys(myObj2))
// We see here all the keys are stored in an array form, we can access all these keys by looping through them.

// 🛑🛑 This is a very important functionality.

// Now to access all the values from an object and store it in an array
console.log(Object.values(myObj2))

// Similarly, we can use the entries() method to get all the keys and values in one single array. Each key and value will be an array inside the array.

console.log(Object.entries(myObj2))
// Syntax: [key, value] 

// Now there are some cases where we want to check if a property is present in an object or not, for this we can use hasOwnProperty() method.

console.log(myObj2.hasOwnProperty("isLoggedIn"))

// If the property that we entered here, exists in the object, we get true as the output.

// else we get false as the output.
console.log(myObj2.hasOwnProperty("isLog"))
// We get false here as isLog does not exist in the object.







