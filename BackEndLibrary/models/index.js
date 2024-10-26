// models/index.js
import Book from './bookModel.js';
import Author from './AuthorModel.js';
import Genre from './GenreModel.js';
import Borrower from './BorrowerModel.js';
import BorrowHistory from './BorrowHistory.js';

// Many-to-Many relationship between Books and Authors
Book.belongsToMany(Author, { through: 'BookAuthors' });
Author.belongsToMany(Book, { through: 'BookAuthors' });

// Many-to-Many relationship between Books and Genres
Book.belongsToMany(Genre, { through: 'BookGenres' });
Genre.belongsToMany(Book, { through: 'BookGenres' });

// One-to-Many relationship between Borrowers and BorrowHistory
Borrower.hasMany(BorrowHistory);
BorrowHistory.belongsTo(Borrower);

// One-to-Many relationship between Books and BorrowHistory
Book.hasMany(BorrowHistory);
BorrowHistory.belongsTo(Book);

export { Book, Author, Genre, Borrower, BorrowHistory };
