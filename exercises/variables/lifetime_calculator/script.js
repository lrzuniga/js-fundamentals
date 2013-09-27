// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

life = function(){
  var age = 46;
  var max_age = 65;
  var daily = 4;
  var lifetime = (max_age - age) * 365 * daily;
  alert("You will need " + lifetime + " to last you until the ripe old age of " + max_age);
}

life();