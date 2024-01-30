// Most of the time is JS, we donot get a preferred result
// Though we get them when the datatypes of both comparing variables are same but it cannot be fully true while comparing different datatypes.

// Some simple Comparisons

console.log(2 > 1)
console.log(2 < 2)
console.log(2 == 2)
console.log(2 != 2)
console.log(2 >= 2)
console.log(2 <= 2)

// Comparing string and number

console.log("2" > 1)
console.log(2 < "1")

// This JS converts "2" and "1" to number and compares them.

// But sometimes we donot get the desired result, so a good practice is to make sure both the comparing operands are of the same datatype. 

console.log("")

// Comparing null now
console.log(null > 0)
console.log(null >= 0)
// Here these comparison operators will convert null to its matching operand (number here) and then compare with it.
// Practically null when converted to number is the same as 0.

console.log(null == 0)
// Here the conversion does not happen with null, hence we get false

console.log("")

// See with undefined now
console.log(undefined > 0)
console.log(undefined >= 0)
console.log(undefined == 0)
// All cases will return false


/*     ******************************************  
== (Equality) checks values only
=== (Strict equality) Checks for both value and datatype
*/

console.log("")
console.log("2" == 2)
console.log("2" === 2)


