const myLibrary = [];

function Book(author, title, pages ) {
  this.bookID = crypto.randomUUID().slice(0,8);
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary(authorInput,titleInput,pageInput) {
  // take params, create a book then store it in the array
  const newBook = new Book(authorInput,titleInput,pageInput);
  myLibrary.push(Book);
}

const addButton = document.getElementById('addButton');
const inputNewBookDialog = document.getElementById('inputNewBook')
addButton.onclick =() => inputNewBookDialog.showModal();

const submitInputButton = document.getElementById('submitInputButton')
submitInputButton.onclick = () => {
  const bookForm = document.getElementById("bookForm")
  const authorInput = document.getElementById('authorInput').value;
  const titleInput = document.getElementById('titleInput').value;
  const pageInput = document.getElementById('pageInput').value;

  if (authorInput && titleInput && pageInput){        
    addBookToLibrary(authorInput,titleInput,pageInput);
    inputNewBookDialog.close(); 
    bookForm.reset();         
    console.log(myLibrary); 
  } else{
    alert("Please fill all data!");
  }
}
