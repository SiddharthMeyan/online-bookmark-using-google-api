// ==========================================Fetch API isnt working for somereason==========================================
// getBook = () => {
//   base =
//     "https://www.googleapis.com/books/v1/volumes?q=meditations+inauthor:marcus&key=AIzaSyBR9sGZNXJjnB-TZhYcXtfGsosmCAwcLYU";
//   //   base = "https://api.github.com/users";
//   fetch(base)
//     .then((res) => res.json())
//     .then((result) => {
//       return result;
//     });
// };

// ==========================================So we would use async / await==========================================
base = `https://www.googleapis.com/books/v1/volumes?q=`;
query = document.getElementById("search");
bookname.addEventListener("change", (e) => {
  searchBook = e.target.value;
});

author.addEventListener("change", (e) => (searchAuthor = e.target.value));

reset = () => {
  bookname.value = "";
  author.value = "";
};

async function getBook() {
  url = `${base}${searchBook}+inauthor:${searchAuthor}&key=AIzaSyBR9sGZNXJjnB-TZhYcXtfGsosmCAwcLYU`;
  const response = await fetch(url);
  const result = response.json();
  console.log(result);
  return result;
}

searchBooks = () => {
  mybook = getBook();
  mybook.then((data) => data.items[0].volumeInfo.title);
};

displayBooks = () => {
  myBooks = searchBooks();
  console.log(myBooks);
};
