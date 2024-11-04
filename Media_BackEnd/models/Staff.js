// models/Staff.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Staff = sequelize.define('Staff', {
  staff_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'staff',
  },
}, {
  tableName: 'staffs',  // Ensure the correct table name is set here
  timestamps: false,     // Disable automatic createdAt and updatedAt columns
});

export default Staff;
