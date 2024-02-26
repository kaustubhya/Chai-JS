// To say in brief about functions, a function is a packet containing some lines of code which we can call from anywhere and use them whenever that packet (lines of code) is needed in an operation.

// eg. See this code when used without functions:

console.log("K");
console.log("S");
console.log("D");
console.log("B");
console.log("O");
console.log("I");

// here we do the repetition of the same lines of code again and again whenever we need to print KSDBOI, and this is not a good way to do it.


// Now let us see this with functions:

function printName() {
  console.log("K");
  console.log("S");
  console.log("D");
  console.log("B");
  console.log("O");
  console.log("I");

}

// this is the definition of a function, where "function" is the keyword, "printName" is the name of the function, and the "()" is the parameter. {} is the scope of the function.



// Now we can call the function whenever we want:
printName();

// "printName" is the reference of the function and () executes this function reference

// If we typed just "printName" (without any parenthesis) then we would not get any output.


// Let us create some basic functions:

// Adding 2 numbers:

function add2Numbers(number1, number2) {
  // 🛑🛑 In functions, we do not need to give datatypes of the input parameters
  console.log(number1 + number2);
}

add2Numbers(8, 10);

// Now here we did not specify the datatype of the function parameters, so javascript here will automatically assume that the input parameters are numbers.

// Let us try to alter the input parameters:

add2Numbers(8, "10")
// Here instead of adding, we got string concatenation as we entered "10", JS assumed 8 is also a string


add2Numbers("8", "10")
// Normal string concatenation

add2Numbers(8, "a")

add2Numbers(8, null)

// Now in later lectures we need to specify the datatypes of the input parameters when writing functions to avoid such errors. Use if - else statements to check the datatypes of the input parameters.


// 🛑🛑🛑 Parameters and Arguments:

// Parameters are the names of the variables that we use inside the function definition.

// eg. function add2Numbers(number1, number2). Here number1 and number2 are the parameters.


// Arguments are the values that we use when we call the function.

// eg. add2Numbers(8, null). Here 8 and null are the arguments.


// 🛑 Difference between console.log and return

function myFunc(num1, num2) {
  console.log(num1 + num2);
}

const ans = myFunc(2, 3);
console.log("Answer: ", ans);
// Answer:  undefined => Output

// Here console.log does not mean that the function is not returning anything, it just prints the output.

// But if we use return, then the function will return the value of the expression that we have written inside it

function myFunc2(num1, num2) {

  // 2 ways to use return 
  // 1
  // let result = num1 + num2;
  // return result;


  // 2

  return num1 + num2;
}

const ans2 = myFunc2(2, 3);
console.log("Answer: ", ans2);
// Output => Answer:  5

// 🛑🛑 Keep in mind that we should not put any code after the return statement.

// eg. function myFunc2(num1, num2) {

//       return num1 + num2;
//       console.log("Hello"); //🛑 This line will not be printed and gives the message: "Unreachable code detected"
//     }


// Now to look at some other ways to print functions:

// 1. String Interpolation

function func(userName) {

  if(userName === undefined) {
    return `Please Enter a Valid UserName`;
  }
  return `${userName} just logged in`;
}

func("KSD"); // Here we only called the function, and it returned the value, it did not print it, so we need to print it here

// 2 ways

// 1.
const myAns = func("KSD");
console.log(myAns);

// 2. 
console.log(func("KSD"));

//  🛑 Interview Question:

// Here if we do:
console.log(func()); // What will be output here ???

// Output => undefined just logged in

// To handle this, we will use and if-else statement: ↓ (See in the below function)

/*
function func(userName) {

  🛑 if(userName === undefined) {
    return `Please Enter a Valid UserName`;
  }
  return `${userName} just logged in`;
}
*/




// Now in production grade code, you may see it like this:

/*
function func(userName) {

  🛑 if(!undefined) {
    return `Please Enter a Valid UserName`;
  }
  return `${userName} just logged in`;
}
*/

// Generally values like "", undefined etc. are falsy values, and if we use them in an if statement, it will not execute the code inside the if statement, since they are false.

// So to work with this, we use "!" before undefined which is a falsy value. 
// ! converts true to false and false to true (as in this case.

// So if values inside if is not undefined (!undefined), then we go inside if statement, and execute the code inside it. Here we return the message.

// If we donot want to go down this path, we can use "default" values.
// eg.


function funcdef(userName = "Sameer") { // Sameer is the default value of the parameter userName
  return `${userName} just logged in`;
}

// See the differences in output
console.log(funcdef()); // Prints default value of the parameter userName
console.log(funcdef(""));
console.log(funcdef("Gatti"));

