// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var max_age = 75;

function calculateSupply(age, daily_amount){

  var to_last = (max_age - age) * 365 * daily_amount;

  alert("You will need " + to_last + " to the ripe old age of " + max_age);
  console.log("To_Last value: "+to_last);
}

calculateSupply(22,2);
