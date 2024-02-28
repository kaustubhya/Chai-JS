// 🛑🛑🛑🛑🛑 THIS keyword means "Current Context" i.e. inside a scope.

// 🛑🛑🛑🛑🛑 CONTEXT means "kiske baare mein baat ho rahi hai i.e. on what topic are we talking about"

// Let us see an example

const user = {
  username: "KSD",
  price: 456789,
  welcomeMessage: function() {
    console.log(`Welcome to the website, ${this.username}`)
    // here if we write just ${username} then we get an error, to solve this, we will write ${this.username} which will define the local scope and current context here. 

    // Let us see the scope of this object now
    console.log(this)
  }
}

user.welcomeMessage()
user.username = "Mars"
user.welcomeMessage()

// Now let us see the scope and context, outside of this object
console.log(this)

// Now here current context is empty, 
// 🛑🛑 Remember we are inside the node environment and here in global in node environment, we are referring to an empty object. Hence the current context is empty when we use this.

// 🛑 But when we do the same thing in browser console, we get window object.
// 🛑🛑🛑🛑🛑 In browser, the global object is window object.
// 🛑 In node, the global object is empty.

// using this inside functions
function myboi() {
  console.log(this);
}

myboi()

// Now we get many things inside this function here,

// Now let us see this example:

function myboi() {
  let username = "Cody"
  console.log(this.username);
}

myboi()
// 🛑 Here we get undefined as output, hence we avoid using "this" keyword in this manner inside functions. Just keep it only to objects.

const func = function() {
  let username = "Cody"
  console.log(this.username);
}

func()


// ************************ 

// Arrow Function

// Syntax

// Remove "function" keyword and put "=>" after parenthesis (). Rest all is same.

const myfunc = () => {
  
}

// Let us do some experiments on this arrow function like we did with normal functions

const myArrFunc = () => {
  const username = "JAY"
  console.log(this)
  console.log(this.username)
}

myArrFunc()

// Now when we use "this" keyword with the arrow function, it will give us the current context. Here it is empty.

// Different ways to write Arrow Functions

// 1. Normal Way (Explicit Return => Using "Return" keyword)

const add = (num1, num2) => {
  return num1 + num2;
}

console.log(add(5, 7));

// 2. 🛑🛑 Implicit Return (Not using return keyword and {}, instead use () or nothing)

// Here when our code inside the {} is very small, we remove the  { } and "return" keyword. 
// By doing this, we are telling our code to return whatever it is after => automatically.

const add2 = (num1, num2) => num1 + num2;
// or
// const add2 = (num1, num2) => (num1 + num2);

// Both are same here

console.log(add2(10,20));

// 🛑🛑🛑 For objects, simply using {} and then using objects won't do. You need to wrap it inside the ()

// eg.

const obj = (num1, num2) => {username: "JAY"}
// WRONG WAY ❌❌❌❌ 

console.log(obj(10,20));
// We will get undefined here.


const obj2 = (num1, num2) => ({username: "JAY"})
// CORRECT WAY ✅✅✅✅

console.log(obj2(10,20));
// We get the object here.



