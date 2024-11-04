// models/CustomerInquiry.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const CustomerInquiry = sequelize.define('CustomerInquiry', {
  inquiry_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  submitted_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'CustomerInquiries', // Explicitly specify the correct table name
  timestamps: true,               // Use Sequelize's automatic timestamps if you need them
});

export default CustomerInquiry;
