// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN". (2 * pi * radius)
// Calculate the area based on the radius, and output "The area is NN". (pi * radius squared)


geometrizer = function() {
  var radius = 12;
  var circumference = 2*3.14 *radius;
  var area = (3.14*radius*radius);

  alert("The circumference is " + circumference);
  alert("The area is "+ area);
}

geometrizer();