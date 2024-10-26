// models/Genre.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Genre = sequelize.define('Genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Genre;
