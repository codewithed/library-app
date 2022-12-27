const myLibrary = [];

const booksGrid = document.getElementById('books-grid');

// Book constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = () => `The ${title} by ${author} has ${pages} pages and is ${readStatus}`;
}

// creates the form component
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const form = document.createElement('form');
form.classList.add('form');
form.innerHTML = `<form class="form" id="form" method="post" action>
                        <legend>Add New Book</legend>
                        <input type="text" name="title" placeholder="title" required>
                        <input type="text" name="author" placeholder="author" required>
                        <input type="number" name="pages" placeholder="pages" required>
                        <label>Have you read it?</label><input id="checkbox" type="checkbox">
                        <button id='submit' type='submit'>Add</button>
                    </form>`;

// take user's input and store new book into an array
function addBooktoLibrary() {
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const checkBox = document.getElementById('checkbox');

  let readStatus;
  if (checkBox.checked === true) {
    readStatus = 'read';
  } else if (checkBox.checked === false) {
    readStatus = 'unread';
  }
  const newbook = new Book(title, author, pages, readStatus);

  // add newBook to display
  const bookCard = document.createElement('div');

  bookCard.classList.add('book-card');
  bookCard.innerHTML = `<p>"${newbook.title}"</p>
                      <p>${newbook.author}</p>
                      <p>${newbook.pages} pages</p>
                      <button id="readStatusBtn">${newbook.readStatus}</button>
                      <button data-link id="remove">Remove</button>`;
  booksGrid.appendChild(bookCard);
  myLibrary.push(newbook);

  // toggle read status
  // toggle read and unread functionality
  const readStatusBtns = document.querySelectorAll('#readStatusBtn');
  for (let i = 0; i < myLibrary.length; i += 1) {
    readStatusBtns[i].addEventListener('click', () => {
      if (myLibrary[i].readStatus === 'read') {
        myLibrary[i].readStatus = 'unread';
        readStatusBtns[i].textContent = 'Unread';
        readStatusBtns[i].style.backgroundColor = '#22c55e';
      } else if (myLibrary[i].readStatus === 'unread') {
        myLibrary[i].readStatus = 'read';
        readStatusBtns[i].textContent = 'Read';
        readStatusBtns[i].style.backgroundColor = '#f43f5e';
      }
    });
  }

  const removeBtns = document.querySelectorAll('#remove');
  const bookCards = document.getElementsByClassName('book-card');
  for (let i = 0; i < myLibrary.length; i += 1) {
    removeBtns[i].dataset.link = i;

    // remove the book
    removeBtns[i].addEventListener('click', () => {
      myLibrary.splice(i, 1);
      booksGrid.removeChild(bookCards[i]);
    });
  }
}

// displays the form on the screen
const addBtn = document.getElementById('addBookBtn');
addBtn.addEventListener('click', () => {
  modal.appendChild(form);
  modal.classList.add('active');
  overlay.classList.add('active');
});

// creates new book from form data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBooktoLibrary();
  modal.removeChild(form);
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
