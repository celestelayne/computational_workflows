console.log('this works')

// definition
function getBookData(){
  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0679775439')
  .then((response) => response.json())
  .then((data) => {
    let books = data;
    console.log(books.items)

    let title = books.items[0].volumeInfo.title;
  });
}
// invocation
getBookData()