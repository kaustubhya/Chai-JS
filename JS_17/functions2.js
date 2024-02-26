// So far we have seen functions where the number of arguments is fixed

// But what if the number of arguments in a function keeps on changing continously

// An example of this scenario is the Add to cart functionality, where we can add items to the cart and remove items from the cart. Here the item price (say) is the argument which is increasing and decreasing continously.

// Now a solution to it is using rest operator or spread operator 

// Using rest here

function myCartItems(num1, num2, ...num3) {
  return num3;
} 


// 🛑🛑 INTERVIEW QUESTION:
console.log(myCartItems(100,200,300,400,500,600,700,800,900));

// here we are returning num3. 
// num1 = 100, num2 = 200, num3 = [300,400,500,600,700,800,900]

// In loops video we will see how to extract these values from the array.


// Passing Objects in Functions

const user = {
  name: "KSD",
  price: 12345679
}

function myFunc(anyNameHere) {
  console.log(`Username is ${anyNameHere.name} and Price is ${anyNameHere.price}`)
}

myFunc(user);

// When we defined the function and passed the parameter anyName here, then we didn't know if it was an object or not. It was only till the time we passed user as an argument that the function knew that it was an object.

// Also be careful of any spelling errors here, match it with the function parameters passed and those present inside the object. Any mismatch can give incorrect data.


// Now instead of declaring object beforehand, we can declare and initialize it while calling the function.

// eg.

function myFunc2(anyNameHere) {
  console.log(`Username is ${anyNameHere.name} and Price is ${anyNameHere.price}`)
}

myFunc2({
  name: "JAI",
  price: 14
});



// Passing Arrays in functions

const myArr = [1,2,3,4,5,6,7,8,9]

function myArrFunc1(anyArrName) {
  return anyArrName[3];
}

console.log(myArrFunc1(myArr));

// Alternate way
function myArrFunc2(anyArrName) {
  return anyArrName[3];
}

console.log(myArrFunc2([10,20,30,40,50,60,70,80,90]));

// The parameter anyArrName is working in the same way as the object parameter anyNameHere. It gets its data type defined only when the function is called.

