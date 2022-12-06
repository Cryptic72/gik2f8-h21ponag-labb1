'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {

  let existingInfoBox = document.getElementById("bookDetail");
  
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingInfoBox && bookList.length == 10 && existingInfoBox.remove(); // This is so that if the user empties the search field the info box goes away.
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  const books = document.querySelectorAll('.book-list__item');

  // Looping through each book in results window and adding an event listener for mouseover.

  books.forEach(book => {
    book.addEventListener('mouseover', (e) => renderBookDetails(e));
  })
};

async function renderBookDetails(e) {

  // Adds green background to book list item when mousing over.

  e.target.classList.remove('bg-white');
  e.target.classList.add('bg-green-700');

  // Mouse coordinates for placing info box at mouse location.

  const x = (e.clientX + 30) +'px';
  const y = e.clientY + 'px';

  // Gets the root element, the details of book being mouse overed and adds info box with details at mouse cursor.

  const root = document.getElementById('root');

  let details = await getDetails(e.target.id);

  root.insertAdjacentHTML('beforeend', BookInfo(details, x, y));

  // When the mouse leaves the book list item the background is set to white again and the info box is removed.

  e.target.addEventListener("mouseleave",(e) =>{
    e.target.classList.remove('bg-green-700');
    e.target.classList.add('white');
    let existingElement = document.getElementById("bookDetail");
    existingElement && existingElement.remove(); 
});

  /*When the mouse moves the info box follows the mouse. For some reason when dragging the mouse quickly across the book list the info boxes get very "buggy". Have been unable to fix it.
  Errors also show up in console when first mousing over book list item for some reason but it doesn't seem to hinder website functionality.*/

  e.target.addEventListener('mousemove', (e) =>{
    let div = document.getElementById('bookDetail');
    let left = (e.clientX + 30) +'px';
    let top = e.clientY + 'px';
    div.style.left = left;
    div.style.top = top;
  });
  
}