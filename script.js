const myLibrary = [];

const librarySection = document.getElementById('library-section');

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = () => `The ${title} by ${author} has ${pages} pages and is ${readStatus}`;
}

const book1 = new Book('loveIsWar', 'ice.k3', '21', 'read');

function addBooktoLibrary(newbook) {
  // take user's input and store new book into an array
  myLibrary.push(newbook);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `<p>${book.title}</p>
                      <p>${book.author}</p>
                      <p>${book.pages} pages</p>
                      <button>${book.readStatus}</button>
                      <button>Remove</button>`;
    librarySection.appendChild(bookCard);
  });
}

addBooktoLibrary(book1);
displayBooks();
