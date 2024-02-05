// There are 2 types of memories, stack memory and heap memory

// Stack - Stores Primitive Datatypes
// We get a copy of the variable we are storing

// Heap - Stores Non-Primitive Datatypes
// We get an original reference of the memory we are storing.

// Let us see a stack example
let myYoutubeName = "KSD";
let anotherName = myYoutubeName;
// we donot get name here but a copy of name
anotherName = "Guddu";

console.log(anotherName);
// Initially in another name, we got copy of name i.e. ksd, which got stored in stack.
// Now we update that copy value in stack with "guddu" and print it

console.log(myYoutubeName);
// Here we print ksd, the original value of name in stack



// Let us see a heap example

let userOne = {
  email: "jai@gmail.com",
  upi: "jai@okaxis"
}

let userTwo = userOne;

// Use dot(.) operator to access values inside the memory
userTwo.email = "ksd@orkut.com";

console.log(userTwo.email)
console.log(userOne.email) // original value

// Now here value will change as we have changed the reference variable which changes the value in original variable
