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
async function getBook() {
  base =
    "https://www.googleapis.com/books/v1/volumes?q=meditations+inauthor:marcus&key=AIzaSyBR9sGZNXJjnB-TZhYcXtfGsosmCAwcLYU";
  const response = await fetch(base);
  const result = response.json();
  console.log(result);
  return result;
}

mybook = getBook();
mybook.then((data) => console.log(data.items[0].volumeInfo.title));
