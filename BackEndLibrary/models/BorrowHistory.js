// models/BorrowHistory.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const BorrowHistory = sequelize.define('BorrowHistory', {
  borrowed_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returned_at: {
    type: DataTypes.DATE,
  },
});

export default BorrowHistory;
