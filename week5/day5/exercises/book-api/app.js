import express from "express";
const app = express();
app.use(express.json());

let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

app.post("/api/books", (req, res) => {
  const newId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;
  const book = {
    id: newId,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(book);
  res.status(201).json(book);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API running on port ${PORT}`);
});
