const myLibrary = [];

const librarySection = document.getElementById('library-section');

// Book constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = () => `The ${title} by ${author} has ${pages} pages and is ${readStatus}`;
}

// creates the form component
const form = document.createElement('form');
form.classList.add('book-form');
form.innerHTML = `<form class="form" id="form" method="post" action>
                        <legend>Add New Book</legend>
                        <input type="text" data-id="title" name="title" placeholder="title" required>
                        <input type="text" data-id="author" name="author" placeholder="author" required>
                        <input type="text" data-id="pages" name="pages" placeholder="pages" required>
                        <div>Have you read it?<input data-id="readStatus" type="checkbox"></div>
                        <button id='submit' type='submit'>Add</button>
                    </form>`;

// take user's input and store new book into an array
function addBooktoLibrary() {
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const newbook = new Book(title, author, pages);

  // add newBook to display
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  bookCard.innerHTML = `<p>${newbook.title}</p>
                      <p>${newbook.author}</p>
                      <p>${newbook.pages} pages</p>
                      <button>${newbook.readStatus}</button>
                      <button>Remove</button>`;
  librarySection.appendChild(bookCard);
  myLibrary.push(newbook);
}

// displays the form on the screen
const addBtn = document.getElementById('addBookBtn');
addBtn.addEventListener('click', () => {
  librarySection.append(form);
});

// creates new book from form data

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBooktoLibrary();
  librarySection.removeChild(form);
});
