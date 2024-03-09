// This is an alternative way to perform multiple conditioning statements together when we have to use more than one if-else statements.

// Code is also shorter here.

// Syntax:

/*
switch (key) {
    case value:
    break;


    default:
    break;
}
*/

// Here we are checking out multiple values for a same given key

// 🛑 Key => That Value that we will be checking inside the switch statement every time.

// eg. Key here is a Number

let month = 4;

switch(month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Invalid Month");
}

// Now the theory here is, if any given case (Number here) matches with the key (month) then the code inside that case will be executed.

// 🛑🛑 Also we used break here to exit out of that case when our job is done. If we do not use break then the code will execute all the cases after the matched case (just till before the default case).


// Using cases when key value is String 

const day = "Saturday"

switch (day) {
  case "Sunday":
    console.log("It is Sunday");
    break;
  case "Monday":
    console.log("It is Monday");
    break;
  case "Tuesday":
    console.log("It is Tuesday");
    break;
  case "Wednesday":
    console.log("It is Wednesday");
    break;
  case "Thursday":
    console.log("It is Thursday");
    break;
  case "Friday":
    console.log("It is Friday");
    break;
  default:
    console.log("It is OMG SATURDAY and the Weekend Starts!!");
    
}