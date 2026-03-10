const myLibrary = [];

function Book(author, title, pages) {
  this.bookID = crypto.randomUUID().slice(0,8);
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary(authorInput,titleInput,pageInput) {
  // take params, create a book then store it in the array
  const newBook = new Book(authorInput,titleInput,pageInput);
  myLibrary.push(newBook);
}

function showLibrary(library) {
  const bookShelf = document.querySelector('.bookShelf');
  bookShelf.innerHTML = "";
  for (let i = 0; i < library.length; i++) {      
    const bookDiv = document.createElement('div');
    const bookSpanID = document.createElement('span');
    const bookSpanAuthor = document.createElement('span');
    const bookSpanTitle = document.createElement('span');
    const bookSpanPages = document.createElement('span');

    bookDiv.classList.add('book');
    bookSpanID.classList.add("bookdata");
    bookSpanAuthor.classList.add("bookdata");
    bookSpanTitle.classList.add("bookdata");
    bookSpanPages.classList.add("bookdata");

    bookSpanID.textContent = library[i].bookID;
    bookSpanAuthor.textContent = library[i].author;
    bookSpanTitle.textContent = library[i].title;
    bookSpanPages.textContent = library[i].pages;

    bookDiv.appendChild(bookSpanID);
    bookDiv.appendChild(bookSpanAuthor);
    bookDiv.appendChild(bookSpanTitle);
    bookDiv.appendChild(bookSpanPages);
    
    bookShelf.appendChild(bookDiv);
}
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
    showLibrary(myLibrary);      
    console.log(pageInput);    
    
  } else{
    alert("Please fill all data!");
  }
}





