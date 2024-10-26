// controllers/bookController.js
import { Book, Author, Genre, BorrowHistory } from '../models/index.js';

// Fetch all books with authors, genres, and borrow history
export const fetchAllBooks = async (req, res) => {
  try {
    console.log("Fetching all books...");
    const books = await getAllBooks();
    res.json({status: 200, data: books, success: true, message: "Fetched all books successfully."});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// export const getAllBooks = async (req, res) => {
//   try {
//     const books = await Book.findAll({
//       include: [
//         { model: Author, through: { attributes: [] } },
//         { model: Genre, through: { attributes: [] } },
//         { model: BorrowHistory },
//       ],
//     });
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getAllBooks = async (req, res) => {
//   try {
//     console.log("Getting All Books");
//     const books = await findAll({
//       include: [
//         // { model: Author, through: { attributes: [] } },
//         // { model: Genre, through: { attributes: [] } },
//         // { model: BorrowHistory },
//       ],
//     });
//     res.json({status:200,data:books, success: true, message:"Got All Books" });
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Create a new book
export const createBook = async (req, res) => {
  try {
    const { title, description, isbn, published_year, authorIds, genreIds } = req.body;
    const book = await Book.create({ title, description, isbn, published_year });

    // Associate authors and genres with the book
    if (authorIds) await book.setAuthors(authorIds);
    if (genreIds) await book.setGenres(genreIds);

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update book details
export const updateBook = async (req, res) => {
  try {
    const { title, description, isbn, published_year, authorIds, genreIds } = req.body;
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.update({ title, description, isbn, published_year });

    // Update authors and genres
    if (authorIds) await book.setAuthors(authorIds);
    if (genreIds) await book.setGenres(genreIds);

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.destroy();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


