const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const CustomerCard = sequelize.define('customer_card', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  card_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'customer_cards',
});

module.exports = CustomerCard;