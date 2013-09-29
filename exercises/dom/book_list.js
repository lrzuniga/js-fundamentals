// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.


var book = {
  title: ["Winnie the Poo", "Moby Dick", "Salem Road"],
  author:["George Orwell", "Herman Melville", "Poosh Mandeer"],
  alreadyRead: ["true", "true", "false"]
};


for ( i = 0 ; i < book.length ; i++){
  document.write("<p>Book: " + book.title[i] + "</p>");
  document.text("<p>Author: " + book.author[i] + "</p>");
}

var book = [
  {
    title: "Winnie the Poo",
    author: "Goerge Orwell".
    alreadyRead: true
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    alreadyRead: true
  },
  {
    title: "Salem Road",
    author: "Poosh Mandeer",
    alreadyRead: false
  }
];


var book = [
{
  title: "Book Title", 
  author: "Book Author", 
  alreadyRead: true
}, 
{
  title: "Moby Dick", 
  author: "Herman Melville",
  alreadyRead: true
}, 
{ 
  title: "Salem Road", 
  author: "Poosh Mandeer", 
  alreadyRead: false
}
];