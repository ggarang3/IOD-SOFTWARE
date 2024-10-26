// models/Author.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Author = sequelize.define('Author', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Author;
