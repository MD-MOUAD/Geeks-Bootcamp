import express from 'express';
import { getAll, getById, create } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getAll);
router.get('/books/:bookId', getById);
router.post('/books', create);

export default router;
