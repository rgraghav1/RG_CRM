const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const BusinessExpense = sequelize.define('BusinessExpense', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  expense_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'business_expenses',
  timestamps: false,
});

module.exports = BusinessExpense;

