const allBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
    alreadyRead: true,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS._SL1500_.jpg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${book.title} written by ${book.author}</p>`;
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";
  div.appendChild(img);

  if (book.alreadyRead) {
    div.style.color = "red";
  }

  section.appendChild(div);
});
