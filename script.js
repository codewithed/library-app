const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = () => `The ${title} by ${author} has ${pages} ${readStatus}`;
}

function addBooktoLibrary() {
  // take user's input and store new book into an array
  const book = new Book('$title', '$author', '$pages', '$readStatus');
  myLibrary.push(book);
}
