// models/Book.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Book = sequelize.define("Book", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  published_year: DataTypes.INTEGER,
  isbn: {type: DataTypes.STRING, unique: true},});


// const Book = sequelize.define("Book", {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.TEXT,
//   },
//   isbn: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   published_year: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

export default Book;
