// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
  if( score > 80){
    alert("A");
    console.log("score was: " + score + ", grade was A");
  }else if(score > 70){
    alert("B");
    console.log("score was: " + score + ", grade was B");
  }else if(score > 60){
    alert("C");
    console.log("score was: " + score + ", grade was C");
  }else if(score > 50){
    alert("D");
    console.log("score was: " + score + ", grade was D");
  }else{
    alert("F");
    console.log("score was: " + score + ", grade was F");
  }
}

assignGrade(92);
assignGrade(88);
assignGrade(72);
assignGrade(61);
assignGrade(55);
assignGrade(43);
