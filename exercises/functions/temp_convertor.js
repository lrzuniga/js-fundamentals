// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius_temp = 28
var fahrenheit_temp = 72

function celsiusToFahrenheit(temp){
  fahrenheit = celsius_temp * ( 9/5 ) + 32;
  alert(celsius_temp + "°C is " + fahrenheit + "°F");
}

function fahrenheitToCelsius(temp){
  celsius = (fahrenheit_temp - 32) * (5/9);
  alert(fahrenheit_temp + "°F is " + celsius +"°C");
}

celsiusToFahrenheit();
fahrenheitToCelsius();