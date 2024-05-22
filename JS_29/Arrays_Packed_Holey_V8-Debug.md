# INTRODUCTION

Arrays in JavaScript are generally of 2 types, 

1. Continous
2. Holey (Having Holes in them)

Arrays are internally optimized in every languages.

In JavaScript, there are 3 types of optimizations:

1. SMI (Small Integer)
2. Packed element
3. Double (float, string, function etc.)

Continous and Holey can both have these 3 types of optimizations. 

Based on what kinds of elements there are in an array and where the elements are located, the javascript optimizes them accordingly.

eg.
Strings have different optimizations

Numbers have different optimizations

Numbers at index 2 have different optimizations
etc.

Say we have an array having elements at positions 0, 1, 3, 4 and holes at position 2, their optimizations are also different (depending on whether they are numbers or strings).

We can see these optimizations via `JSVU`

## JSVU

JSVU - JavaScript (engine) Version Updater. JSVU makes it easier to install recent versions of various JavaScript engines without having to compile them from source.

Note: jsvu requires Node.js v8.9.0+!

Install the jsvu CLI:

`npm install jsvu -g`
Modify your dotfiles (e.g. ~/.bashrc) to add ~/.jsvu to your PATH:

`export PATH="${HOME}/.jsvu:${PATH}"`

Then, run jsvu:
`jsvu`

On first run, jsvu prompts you for your operating system and architecture, and the list of JavaScript engines you wish to manage through jsvu. It then downloads and installs the latest version of each of the engines you selected.

To update the installed JavaScript engines later on, just run jsvu again.

## Key Points
Now we know that in JavaScript, there are different methods used with Arrays like ForEach, Map etc. 

When we talk about the optimization of these methods, it also greatly depends greatly on what kind of elements are present in an array.

# Some Array Types Representation:

`const arr = [1,2,3,4,5]`
// PACKED_SMI_ELEMENTS

`const arr2 = [1,2,,4,5]`
// HOLEY


### PACKED_SMI_ELEMENTS 
- First type of array
- Most Optimized Type
- Limitation - We can only put integer elements in this array

If we try to push a decimal element into this array then it will become a `PACKED_DOUBLE_ELEMENTS` array from a PACKED_SMI_ELEMENTS array.

If we try to push a string element into this array then it will become a `PACKED_ELEMENTS` array from a PACKED_SMI_ELEMENTS array.

All these types, each have different optimizations.

🛑 PACKED_SMI_ELEMENTS is at the topmost tier. Once it gets downgraded or get converted into PACKED_DOUBLE_ELEMENTS or PACKED_ELEMENTS, it cannot go back to PACKED_SMI_ELEMENTS array even if we delete the decimal or string elements from the integer array. The compiler cannot do such types of optimizations.

Now let us have an array -> arr[1,2,3,4,5,6,'7']

This is a PACKED_ELEMENTS array as it has both integers and strings. It is from index 0 to 6.

Now if we do arr[10] = 11 i.e. insert 11 at index 10, then array would look like, arr[1,2,3,4,5,6,'7','','','',11]

This becomes a HOLEY_ELEMENTS array. These empty 'holes' make the array less optimized.

When we try to access an empty position (hole), we get 'undefined'.

# How does an array checks for an element inside it?

1. Bound Check - First the array calculates its bounds, i.e., starting and ending index.

2. hasOwnProperty(arr, 9) (basic check) - Checks if there is an element inside the array within the index given as argument.

3. hasOwnProperty(arr.prototype, 10) (prototype check) - Checks if there is an  element inside the array within the index's prototype given as argument.

4. hasOwnProperty(Object.prototype, 10) - Now since javascript is made of objects, next it will check in the object's prototype for the element.

🛑 hasOwnProperty() -> This is a very expensive check in JavaScript.

So if the array was continous we would have returned the value within 2 checks atmost. But for holes we need all 4 checks. Hence, we know that holes are very expensive to check in JavaScript and we should avoid holes in JavaScript arrays.


eg. of continous
```javascript

const arrThree = [1,2,3,4,5]
console.log(arrThree[8]);
// Output -> Out of Bounds


console.log(arrThree[2]);
// Output -> 3

```

Optimization list for continous (most to least)
1. PACKED SMI ELEMENTS
2. PACKED DOUBLE ELEMENTS
3. PACKED ELEMENTS

Optimization list for continous (most to least)
1. HOLEY SMI ELEMENTS
2. HOLEY DOUBLE ELEMENTS
3. HOLEY PACKED ELEMENTS

There are more than 30 variations of optimizations.

Let us see an example:

```javascript

const arr = new Array[3];
// Here we initialized an array with 3 empty spaces, we get HOLEY SMI ELEMENTS as the optimization

arr[0] = '1'  // We have now HOLEY PACKED ELEMENTS
arr[1] = '2'  // We have now HOLEY PACKED ELEMENTS
arr[2] = '3'  // We have now HOLEY PACKED ELEMENTS

// And the optimization cannot go back up now so this technique is not pretty optimized




// Better Optimized Approach for same task
const arr = [];
// Now this is a PACKED SMI ELEMENTS after we initialized this array
arr.push('1')  // We have now PACKED ELEMENTS
arr.push('2')  // We have now PACKED ELEMENTS
arr.push('3')  // We have now PACKED ELEMENTS


// Outputs in both cases are same



// Some important cases
const arr = [1,2,3,4,5] // PACKED SMI ELEMENTS

arr.push(NaN) // becomes PACKED DOUBLE ELEMENTS

arr.push(Infinity) // becomes PACKED DOUBLE ELEMENTS
```

Also for all these, when we are doing computation with arrays, do prefer the in-built methods (like for, for-in, forEach, for-of loops etc.) more rather than trying to create custom methods for the same methods. These in-built methods are built in such a way that they will allow us in getting optimized results more often.

