const myLibrary = [];

const librarySection = document.querySelector('.library-section');

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = () => `The ${title} by ${author} has ${pages} ${readStatus}`;
}

function addBooktoLibrary() {
  // take user's input and store new book into an array
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `<p>${book.tile}</p>
                      <p>${book.author}</p>
                      <p>${book.pages} pages</p>
                      <button>${book.readStatus}</button>
                      <button>Remove</button>`;
    librarySection.appendChild(bookCard);
  });
}
