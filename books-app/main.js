console.log('this works');

const input = document.querySelector('input');
const button = document.querySelector('button');

const bookContainer = document.querySelector('.books');

function getBookData(isbn){
  console.log(isbn)
  let BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`

  fetch(BOOKS_URL)
  .then((response) => response.json())
  .then((data) => {
    let result = data.items[0].volumeInfo;
    // create the elements
    let image = document.createElement('img');
    let title = document.createElement('h3');
    let description = document.createElement('p');

    // add the data
    title.textContent = result.title;
    image.setAttribute('src', result.imageLinks.thumbnail);
    description.textContent = result.description;

    // append to the DOM
    bookContainer.appendChild(title);
    bookContainer.appendChild(image);
    bookContainer.appendChild(description);
  });
}

function getIsbn(event){
  event.preventDefault()
  let isbn = input.value;
  getBookData(isbn)
}

button.addEventListener('click', getIsbn)