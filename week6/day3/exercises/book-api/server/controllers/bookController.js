
import { getAllBooks, getBookById, createBook } from '../models/bookModel.js';

export const getAll = async (req, res) => {
  const books = await getAllBooks();
  res.json(books);
};

export const getById = async (req, res) => {
  const { bookId } = req.params;
  const book = await getBookById(bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

export const create = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const [newBook] = await createBook({ title, author, publishedYear });
  res.status(201).json(newBook);
};
