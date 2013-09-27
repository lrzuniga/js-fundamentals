// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language){
  if(language == "en"){
    alert("Hello, World");
  }else if(language == "fr"){
    alert("Bonjour Monde");
  }else if(language == "es"){
    alert("Hola Mundo");
  }else{
    alert("What?");
  }
}

helloWorld("en");
helloWorld("es");
helloWorld("fr");
helloWorld("sw");
