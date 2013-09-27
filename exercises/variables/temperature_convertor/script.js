// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

temp_convert = function(){
  var celsius = 19;
  var fahrenheit = 30;
  var fahrenheit_to_celsius = (fahrenheit - 32) * (5 / 9);
  var celsius_to_fahrenheit = (celsius * 9/5 + 32);
  alert(celsius +" °C is " + celsius_to_fahrenheit + " °F");
  alert(fahrenheit + " °F is " + fahrenheit_to_celsius + " °C")
};

temp_convert();