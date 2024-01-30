const accountId = 12345;  // Declared as a constant, cannot be reassigned

let accountEmail = "kaustubhya123@gmail.com";  // Declared with 'let', can be reassigned

var accountPassword = "Doraemon";  // Declared with 'var', can be reassigned

accountCity = "Bhilai";  // This implicitly creates a global variable 'accountCity', be cautious about using global variables

let accountState;

// accountId = 5;  // This would result in an error because you cannot reassign a constant variable

accountEmail = "JaiShreeRam@google.com";  // Valid, as 'accountEmail' is declared with 'let'

accountPassword = "Mandir yahin banega";  // Valid, as 'accountPassword' is declared with 'var'

accountCity = "haridwar";  // Valid, updates the value of 'accountCity'

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.log(accountCity);


// use only const and let and not var as it will not have any issues with the block scope and functional scope.