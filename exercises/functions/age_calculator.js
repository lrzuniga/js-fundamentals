// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var current_year = (new Date()).getFullYear()

function age(birth_year){
  var possible_age1 = current_year - birth_year; 
  var possible_age2 = current_year - birth_year - 1;
  alert("You are either "+ possible_age1 +" or " + possible_age2);
};

years = [1967, 1980, 1942];

for (var i=0; i < years.length; i++){
  age(years[i]);
};
