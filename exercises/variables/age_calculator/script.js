//The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

age = function(){
  
  var current_year = new Date().getFullYear()
  var birth_year = 1967;
  var age1 = current_year - birth_year;
  var age2 = current_year - birth_year - 1;
  alert("They are eigher " + age1 + " or " + age2);
}

age();