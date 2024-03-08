// This function call stack is like a stack i.e. it behaves on the principle of "Last In First Out" (LIFO).

// The first thing to enter and the last thing to exit the function call stack is the global environment or global execution context.

// Let us look at the following example:

function one() {
  console.log("One");
}

function two() {
  console.log("Two");
}

function three() {
  console.log("Three");
}

one()
two()
three()


// The call stack here is as follows:


// Stack: Order of entering and leaving the stack "Once and Only when a function is called!!"

// Enter 1. Global Environment In

// Enter 2. one() In
// Leave 2. one() out (since function is over)

// Enter 3. two() In
// Leave 3. two() out (since function is over)

// Enter 4. three() In
// Leave 4. three() out (since function is over)

// Leave 1. Global Environment Out (when code is over)


// Let us look at another example

function one() {
  console.log("One");
  two()
}

function two() {
  console.log("Two");
  three()
}

function three() {
  console.log("Three");
}

one()
two()
three()

// Stack:

// Enter 1. Global Environment In

// Enter 2. one() In
// Enter 3. two() In
// Enter 4. three() In
// Leave 4. three() out
// Leave 3. two() out
// Leave 2. one() out

// Enter 5. two() In
// Enter 6. three() In
// Leave 6. three() out
// Leave 5. two() out

// Enter 7. three() In
// Leave 7. three() out

// Leave 1. Global Environment Out (when code is over)

// 🛑 The spaces here represent the gaps between each main function call when elements enter and leave the stack and when one main function call is over. 

// main => one(), two(), and three() outside all the functions at the very end. 


// Debug this code to know more and get a more hands on approach.
