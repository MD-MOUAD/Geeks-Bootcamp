import db from '../config/db.js';

export const getAllBooks = () => db('books');
export const getBookById = (id) => db('books').where({ id }).first();
export const createBook = (book) => db('books').insert(book).returning('*');
