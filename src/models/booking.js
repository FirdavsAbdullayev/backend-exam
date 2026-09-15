const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_method_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  delivery_method_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'booking',
  timestamps: true,
});

module.exports = Booking;