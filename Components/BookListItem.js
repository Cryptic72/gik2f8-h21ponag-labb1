const BookListItem = (book) => {
  let html = `<li
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-neutral-900 last:border-b-0 border-b border-neutral-700 cursor-pointer"
                id=${book.id}>
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};
