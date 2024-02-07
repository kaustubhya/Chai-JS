// IN JS we took an arbitrary date: 1st JANUARY. 1970 and started calculating our date from then.

// Date in JS is calculated in milliseconds (it is the time in milliseconds from Jan 1, 1970 till now)

const myDate = new Date();
console.log(myDate);
// this is some un-readible format

// Let us see the readible format
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

// 🛑🛑 Date is an object in JS

console.log(typeof myDate)


// Creating our own Date in JS

const createDate = new Date(2022, 0, 5)
console.log(createDate.toDateString())


// Creating our own Date and time in JS

const createDateAndTime = new Date(2022, 0, 5, 11, 25)
// 🛑🛑 month here starts from 0
// Format (Year, Month, Date, Hours, Minutes))
console.log(createDate.toLocaleString())
console.log(createDate.toString())
console.log(createDate.toLocaleTimeString())


// Now to get in a specified format (like MM-DD-YYYY) or (DD-MM-YYYY)

console.log("***********************************")

let createDate2 = new Date("01-25-2012")
// MM-DD-YYYY
console.log(createDate2.toLocaleString())
// 🛑🛑 Notice here the month starts from 01.



// Making TimeStamps Now

let timeStamp = Date.now()
console.log(timeStamp)

console.log(createDate2.getTime())
// we get value in milli seconds


console.log(Math.floor(createDate2.getTime())/1000)
  // we get value in seconds


console.log("******************************************")
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay()); // 3 means Wednesday
console.log(newDate.getMonth() + 1); // do +1 as month starts from 0
console.log(newDate.getYear());
// In JavaScript, the getYear() method is deprecated as it returns the year minus 1900. Instead, you should use the getFullYear() method to get the current year.

console.log(newDate.getFullYear());
// there are many more get methods like this



// 🛑🛑 customizing the toLocaleStringFunction
// customize the newDate
const customDate = newDate.toLocaleString('default', {
  year: "numeric",
  // do "ctrl + space" to get various options
  era: "long",
  timeZone: "IST"
})

console.log(customDate)











