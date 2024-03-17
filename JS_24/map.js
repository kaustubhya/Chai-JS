// Now a map is a higher order function.

// It behaves and works like a for each loop, but only difference is it returns the values when it is stored in a variable unlike the for each loop.

// In terms of working, unlike the filter() which only returns the values which fulfill its conditions, the map returns all the values just like the forEach loop.

// Let us look at an example and see the map's syntax:

const myNum = [1,2,3,4,5,6,7,8,9,10]

const ans = myNum.map( (item) => {
  return item += 50;
  // explicit return 
  // Every item incremented by 50
})

console.log(ans)

// In general cases, maps can be more efficient than forEach loop.


// Now we executed the same example using forEach loop 

const forEachArray = [];

const forEachAns = myNum.forEach( (item) => (
  forEachArray.push(item += 10)
))

console.log(forEachArray)

// 🛑🛑 Chaining Method - A way of using multiple methods (like map, filter etc.) one after the other

const newNums = [1,2,3,4,5,6,7,8,9,10]

// const newAns = newNums.map().map().filter()

// Something like this

const newAns = newNums
  .map( (num) => num * 10)
  .map( (num2) => num2 + 5)
  .filter( (num3) => {
    return num3 >= 40 
  });

console.log(newAns)