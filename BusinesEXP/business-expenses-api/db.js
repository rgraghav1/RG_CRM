const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expenses_db', 'raghav', 'pass123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

