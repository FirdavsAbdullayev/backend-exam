const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const CustomerAddress = sequelize.define('CustomerAddress', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  house: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  post_index: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'customer_address',
  timestamps: true,
});

module.exports = CustomerAddress;