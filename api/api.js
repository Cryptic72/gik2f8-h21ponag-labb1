const url1 = 'https://gik2f8-labs.herokuapp.com/books';
const url2 = "https://gik2f8-labs.herokuapp.com/books/";

async function getAll() {
  const result = await fetch(url1)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

// Added this to get details for specific book.

async function getDetails(id) {
    const result = await fetch(url2 + id)
      .then((result) => result.json())
      .catch((e) => e);
  
  return result;
  }
