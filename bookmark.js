// ==========================================Fetch API isnt working for some reason==========================================
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
showRes = document.getElementById("showRes");
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
  mybook.then((data) => {
    a = data.items[0].volumeInfo.title;
    desc = data.items[0].volumeInfo.description;
    authors = data.items[0].volumeInfo.authors;
    pageCount = data.items[0].volumeInfo.pageCount;
    showRes.innerHTML += `<tr>
    <td>${a}</td>
    <td>${authors}</td>
    <td> <input onblur="changeMe(value)" contenteditable="true" class="col-md-7" id="pagesTag${a}" type="number" > of ${pageCount}</td>
    <td>
    <a type="button" class="btn btn-link" onclick="showPopup()" data-bs-toggle="modal" data-bs-target="#exampleModal${a}">
    Description
  `;
    showPopup = () => {
      alert(desc);
    };
    a.value = "";
    desc.value = "";
    authors.value = "";
    pageCount.value = "";
    changeMe = (value) => {
      pagesTag = document.getElementById(`pagesTag${a}`);
      pagesTag.value = value;
    };
    // pagesTags.innerText += `<p>THIS</p>`;
    // {
    //   pagesTags = document.getElementById(`pagesTag${a}`);
    //   pagesTags.addEventListener("blur", (e) => {
    //     let my_div_text = pagesTags.innerText;
    //     pagesTags.innerHTML = `<p>${my_div_text}</p>`;
    //   });
    // }
  });
};

// getPages = (e) => {
//   myVal = e.target.value;
//   return myVal;
// };
