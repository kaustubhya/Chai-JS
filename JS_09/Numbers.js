const score = 456;
console.log(score);
// here computer figures out in itself that this is a number

const score2 = new Number(777);
console.log(score2);
// Here we specifically tell the computer that this is a number

// Now this method (the second one) has some internal methods, such as valueOf() and toString() etc.

// Let us convert this Number to string now

const strScore = score2.toString();
console.log(strScore);
console.log(typeof strScore);

const strScoreLength = score2.toString().length;
console.log(strScoreLength);

const myNum = new Number(123.13467893);
console.log(myNum.toFixed(3))

const aNumber = 123.756798;
// 🛑🛑 Let us see the toPrecision() method now
// This returns the rounded value upto the number you have specified (from the left to right)

// see different examples where I put different values in precision
console.log(aNumber.toPrecision(3));
console.log(aNumber.toPrecision(2));
console.log(aNumber.toPrecision(5));


// Now we add commas in a big number in US and Indian style

const bigNum = 100000000000;
console.log(bigNum.toLocaleString()); // US STYLE
console.log(bigNum.toLocaleString('en-IN')); // INDIAN STYLE



