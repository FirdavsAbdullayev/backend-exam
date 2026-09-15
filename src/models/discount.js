const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Discount = sequelize.define('Discount', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, {
  tableName: 'discount',
  timestamps: true,
});

module.exports = Discount;