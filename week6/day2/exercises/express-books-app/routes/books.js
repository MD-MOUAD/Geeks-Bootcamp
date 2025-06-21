const express = require("express");
const router = express.Router();

let books = [];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const newBook = { id: Date.now(), title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id == id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  books[bookIndex] = { ...books[bookIndex], title, author };
  res.json(books[bookIndex]);
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = books.length;
  books = books.filter((book) => book.id != id);

  if (books.length === initialLength) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.status(204).send();
});

module.exports = router;
