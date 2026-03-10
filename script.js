const addButton = document.getElementById('addButton');
const inputNewBookDialog = document.getElementById('inputNewBook')

addButton.onclick =() => inputNewBookDialog.showModal();



const myLibrary = [];

function Book(author, title, pages ) {
  this.bookID = crypto.randomUUID().slice(0,8);
  this.author = author;
  this.title = title;
  this.pages = pages;


}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}


