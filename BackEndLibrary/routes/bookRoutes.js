// routes/bookRoutes.js
import express from 'express';
import { fetchAllBooks, createBook, updateBook, deleteBook } from '../controller/bookController.js';

const router = express.Router();

router.get('/books', fetchAllBooks);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
