const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, // Database Host / IP Address
  dialect: process.env.DB_DIALECT, // Database type (MySQL, PostgreSQL, etc)
  logging: false, // Set to True to see Queries in the Console
  port: process.env.DB_PORT || 3306, // Database Port
  pool: {
    max: 10, // Maximum number of concurrent connections the database will handle
    min: 0, // Minimum number of concurrent connections the database will handle
    acquire: 30000, // Maximum time (ms) for a connection to get established
    idle: 10000, // Maximum time (ms) a connection can be idle
  },
});

sequelize
  .authenticate()
  .then(() => console.log('MySQL Database connected...'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;