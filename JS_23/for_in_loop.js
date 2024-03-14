// Let us see, 'for in' loop with objects in javascript.

// It (this loop) can also be used with other datatypes.

const myObject = {
  js: "javascript",
  ts: "typescript",
  java: "java",
  cpp: "c++",
  py: "python",
};

// key

for (const index in myObject) {
  console.log(index);
}

// value

for (const index in myObject) {
  console.log(myObject[index]);
}

// key and value

for (const key in myObject) {
  console.log(`key => ${key} & value => ${myObject[key]}`);
}


// 'for in' loop + Arrays

const arr = ["js", "py", "cpp", "md"];

for(const index in arr) {
  console.log(index)
}

// 🛑🛑 We notice here that with arrays, when we use 'for of' loop, we get the values i.e. elements of the array as output. 

// But when we use 'for in' loop, we get the keys i.e. indexes of the array as output.

// Hence use this modification in 'for-in' loop to get the values of the array as output.

for(const index in arr) {
  console.log(arr[index])
}


// Now if we used for in loop with maps, then we will not get any output as Maps are not iteratable, so normal way of using for in will not work out for maps.

// See below (we get no output here)

const map2 = new Map();

map2.set("IN", "India")
map2.set("US", "United States of America")
map2.set("UK", "United Kingdom")
map2.set("DE", "Germany")
map2.set("DE", "Germany")

for(const index in map2) {
  console.log(index)
}