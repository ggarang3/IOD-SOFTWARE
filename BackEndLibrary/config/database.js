// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('library_management_system', 'root', 'Garang2015*', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
