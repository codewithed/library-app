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
                        <input type="text" name="title" placeholder="title" required>
                        <input type="text" name="author" placeholder="author" required>
                        <input type="text" name="pages" placeholder="pages" required>
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

  bookCard.classList.add('bookCard');
  bookCard.innerHTML = `<p>"${newbook.title}"</p>
                      <p>${newbook.author}</p>
                      <p>${newbook.pages} pages</p>
                      <button id="readStatusBtn">${newbook.readStatus}</button>
                      <button data-link id="remove">Remove</button>`;
  librarySection.appendChild(bookCard);
  myLibrary.push(newbook);

  const removeBtns = document.querySelectorAll('#remove');
  const bookCards = document.getElementsByClassName('bookCard');
  for (let i = 0; i < removeBtns.length; i += 1) {
    removeBtns[i].dataset.link = i;

    // remove the book
    removeBtns[i].addEventListener('click', () => {
      myLibrary.splice(i, 1);
      librarySection.removeChild(bookCards[i]);
    });
  }
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
