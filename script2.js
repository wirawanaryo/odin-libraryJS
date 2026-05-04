// create class book with constructor(author, title, pages)

class Book {
  constructor(author, title, pages) {
    this.bookID = crypto.randomUUID().slice(0, 8);
    this.author = author;
    this.title = title;
    this.pages = pages;
  }
}

//create class library with show library, addbook, and remove book
class library {
  constructor() {
    this.books = [];
  }

  addBookToLibrary(book) {
    this.books.push(book);
  }

  showLibrary() {
    const bookShelf = document.querySelector('.bookShelf');
    // render ulang library
    bookShelf.innerHTML = "";

    for (let i = 0; i < this.books.length; i++) {
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

      bookSpanID.textContent = this.books[i].bookID;
      bookSpanAuthor.textContent = this.books[i].author;
      bookSpanTitle.textContent = this.books[i].title;
      bookSpanPages.textContent = this.books[i].pages;

      bookDiv.appendChild(bookSpanID);
      bookDiv.appendChild(bookSpanAuthor);
      bookDiv.appendChild(bookSpanTitle);
      bookDiv.appendChild(bookSpanPages);

      bookShelf.appendChild(bookDiv);
    }
  }

  get libSize() {
    return this.books.length;
  }

  removeLatest() {
    let removedBook = this.books.pop();
    this.showLibrary();
  }
}

const mylibrary = new library();
const addButton = document.getElementById('addButton');
const inputNewBookDialog = document.getElementById('inputNewBook')
addButton.onclick = () => inputNewBookDialog.showModal();

const form = document.getElementById("bookForm")
const authorField = document.getElementById('authorInput');
const titleField = document.getElementById('titleInput');
const pageField = document.getElementById('pageInput');

function changeValMsg(dom, msg) {
  if (dom.validity.valueMissing) {
    dom.setCustomValidity(msg);
  } else {
    dom.setCustomValidity("");
  }
}

const submitInputButton = document.getElementById('submitInputButton')
submitInputButton.onclick = () => {
  changeValMsg(authorField, "Please input the name of the author, if anonym just fill with anonym");
  changeValMsg(titleField, "Theres no book without title, even if it is just type untitled");

  const bookForm = form;
  const authorInput = authorField.value;
  const titleInput = titleField.value;
  const pageInput = pageField.value;

  if (authorInput && titleInput && pageInput) {
    const newBook = new Book(authorInput, titleInput, pageInput);
    mylibrary.addBookToLibrary(newBook);
    inputNewBookDialog.close();
    bookForm.reset();
    mylibrary.showLibrary();
    console.log(pageInput);

  } else {
    // alert("Please fill all data!");
  }
}

const removeButton = document.getElementById('removeButton');
removeButton.onclick = () => {
  if (mylibrary.libSize > 0) {
    mylibrary.removeLatest();
  } else {
    alert("No More Books!");
  }
}