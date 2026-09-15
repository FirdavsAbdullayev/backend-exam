const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const PaymentMethod = sequelize.define('PaymentMethod', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'payment_method',
  timestamps: true,
});

module.exports = PaymentMethod;