// models/Borrower.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Borrower = sequelize.define('Borrower', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Borrower;
