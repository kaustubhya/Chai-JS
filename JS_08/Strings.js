// Strings can be declared or written in ' ' as well as " ".

// Use '+' operator to add (concatenate) two strings

const name = "ksd";
const repoCount = 10;

console.log(name + repoCount + " value");
// This is bad practice i.e. using " " to write strings

// A good practice is to write string by using `` (backticks).

/* 🛑🛑🛑
Advantage of using backticks ` ` is that we can do "string interpolation", i.e. we can include placeholders ${}.

Inside these placeholders, we can include variables.

*/

// eg.
console.log(`Hey there, I am ${name} and my repo count is ${repoCount}`);

// Advantage of using this method is that, we can do or include some variable methods within the placeholder

// eg

console.log(
  `Hey there, I am ${name.toUpperCase()} and my repo count is ${repoCount}`,
);

// Another and a better way to master string declaration is to use it as an object and use it inside a String constructor.

// 🛑🛑  The benifit of this method is that, we will get String output, where each character of a string has a key-value pair, we get a length of string property and many other properties to use since the string here is in the form of an object.

// eg.
let gameName = new String("Lancashire Derby");

console.log(gameName);

// Accessing the key-value pairs in string

console.log(gameName[0]);

console.log(gameName.__proto__);
// Seeing inside the string object
// Used 2 underscores
// Object here is empty
// Write it in the console of the chrome browser to see everything properly.

// Seeing some methods

console.log(gameName.length);
console.log(gameName.toUpperCase());

// Remember that by using all these methods, the original string is not changed, we create a copy of this string and then we change it and we get the modified output.

console.log(gameName.charAt(3));
// 3 is the index of the string

console.log(gameName.indexOf('b'));
// gives the index position of the given character

// Let us now do some more operation on methods
// Let us change our string a bit

gameName = "Rey-Himesssss"

const newString = gameName.substring(0, 4);
console.log(newString);

// Notice we get the substring from indexes -> 0 1 2 3

// 4th index (the upper limit mentioned in our method) is excluded here.

 const newString2 = gameName.slice(-5, -1);
console.log(newString2);
// Works same as substring but we can use negative values here too!!

// Negative values does not work in substring


/*
some more egs

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

*/




const newString3 = "       himess  ";


console.log(newString3);
console.log(newString3.trim());
// removes the extra space from both start and end


const url = "https://kaustubhya.com/ksd%20shukla";

// basically %20 here meant space but since in browsers, they donot accept spaces so they converted it into some characters 

// Let us change it
console.log(url.replace('%20', '-'))
// Find the '%20' part in the url string and replace it with '-'

console.log(url.includes('ksd'));
// This is a boolean method that tells us whether a particular section of string is present inside that string or not. If it is present then we get true, else we get false. 

console.log(url.includes('ram'))

const myName = 'hitesh-hoon-mai';

console.log(myName.split('-'));
// Split my name on the basis of '-'



 