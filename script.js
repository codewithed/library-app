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

function addBooktoLibrary(title, author, pages, readStatus) {
  // take user's input and store new book into an array
  const newbook = new Book(title, author, pages, readStatus);
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

const addBtn = document.getElementById('addBookBtn');
addBtn.addEventListener('click', () => {
  const form = document.createElement('div');
  form.classList.add('book-form');
  form.innerHTML = `<form class="form" method="post" action>
                        <legend>Add New Book</legend>
                        <input type="text" name="title" placeholder="title">
                        <input type="text" name="author" placeholder="author">
                        <input type="text" name="pages" placeholder="pages">
                        <div>Have you read it?<input type="checkbox"></div>
                        <button type='submit'>Add</button>
                    </form>`;
  librarySection.append(form);
});
addBooktoLibrary(book1);
displayBooks();
