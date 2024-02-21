// Objects Destructuring

const course = {
  name: "JavaScript Tutorial",
  price: "800 inr",
  instructor: "Hitesh Choudhary"
}

// Now a normal method would involve us to access the values of the object by doing course.name, course.price, course.instructor etc. But if we want to do it multiple times, we can destructure the object.

const {instructor} = course
// here from course object we took out the instructor property

console.log(instructor)

// If the property name is too long, we can shorten it by doing the following. Doing this will also give us the same output.

const {instructor : ins} = course
console.log(ins)
// we shortened instructor to ins, we can give any name we want


// Destructuring in Props (React concept)

const navbar = () => {
  
}

navbar(company = "hero honda")
// Here we called the navbar and gave it a property company, which has the value (name) "hero honda".

// now in the navbar function, we have (), inside this there are props.

// i.e. (props). Now since we gave the props a property company, we can do it like this, to call it => (props.company) in the navbar function. 

// But a shortcut and more efficient way here is to use destructuring. 
// eg. do navbar ({company})
// {} means destructuring.

const navbar2 = ({company}) => {

}

navbar2(company = "hero honda")

