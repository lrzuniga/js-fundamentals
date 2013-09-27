// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(children, partner, city, job){

  // refactoring notes:
  // step 1: put each of the 4 types into separate arrays, loop over array contents

  var people = [[2,"Katharine","Toronto","Web Developer"],[3, "Mary", "New York", "Teacher"],[4, "Angelique", "Paris", "D.J."]]

  for (var i = 0; i < people.length; i++){
    alert("You will be a " + people[i][3] + " in " + people[i][2] + ", and married to " + people[i][1] + " with " + people[i][0] + " kids.");
  }
}

tellFortune();

// attempt at the javascript equivalent of 'hashes'
// var person = {
//   name: 'Tom',
//   occupation: 'Developer'
// };

