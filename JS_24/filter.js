// Now before we start to understand more about filters, let us take a look at a for each loop example.

const cars = ["audi", "porsche", "bmw", "mercedes", "honda"]

cars.forEach( (item) => {
  console.log(item)
})

// This prints out all the values in the array

// Now let us store the result of the for each loop in a variable.

const answer = cars.forEach( (item) => {
    console.log(item)
})

console.log(answer)

// Now here we can see that though the loop prints out all the items of the array, it gives us undefined when the variable is printed.

// Let us look at another case

const answer2 = cars.forEach( (item) => {
  // console.log(item)
  return answer
})

console.log(answer2)

// Now we get undefined as the result of the for each loop even after we returned the result that we stored in a variable.

// So the question is, how can we work on the individual items of the array when we are getting undefined each time?

// ANS => We can use the filter method.

// Syntax and an example

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => (num > 5)) 

// here we can write (num > 5) or num > 5.
// Both are correct ways.

console.log(newNums)

// Now here we see that we used the same code as forEach but here unlike forEach, filter() actually returned us the values.

// Here it was implicit return, let us see when we do explicit return. 

const newNums2 = myNums.filter( (num) => {
  // num > 5
  // We see no output here. Since it is an explicit return, we need to use return statement with {}

  // hence, do like this,: 
  return num > 5
})

console.log(newNums2)


// Let us now talk about the syntax of the filter method, which is widely used in the real world.

// We saw that we have stored it in a variable.

// In case of arrays

/*
array_Name.filter( (// callback function: insert looping variable name) => {
  // we used explicit return here, hence we will use the return keyword

  return condition (if the condition is true, then return the value)
})

*/


// Now trying to implement the same example using the forEach loop

const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

const num = [];

numbers.forEach( (item) => {
  if(item == "six" || item == "one") {
    num.push(item)
  }
})

console.log(num)

// Now let us take an example where we use filter in real world scenarios while working with database data.


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// 1. Get books whose genre is history

const ans = books.filter( (item) => item.genre === "History")

console.log(ans)

// 2. Get books whose publish date > 2000

const ans2 = books.filter( (item) => {
  return item.publish > 2000
})

console.log(ans2)

// 3. Get books whose publish date > 1920 and edition < 2000

const ans3 = books.filter( (item) => {
  return item.publish > 1920 && item.edition < 2000
})

console.log(ans3)

