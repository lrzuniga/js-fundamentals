// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
  var circumference = 2 * 3.14* radius;
  alert("The circumference is " + circumference);
}

function calcArea(radius){
  var area = 3.14 * (radius*radius);
  alert("The area is " + area);
}

calcCircumference(13);
calcArea(13);