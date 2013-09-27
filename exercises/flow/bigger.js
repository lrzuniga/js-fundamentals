// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNumb(x,y){
  if( x > y ){
    alert("The greater number of " + x + " and " + y + " is " + x);
  }else if( x < y ){
    alert("The greater number of " + x + " and " + y + " is " + y);
  }else{
    alert( x + " is equal to " + y);
  }
}

greaterNumb(1,2);
greaterNumb(2,1);
greaterNumb(2,2);