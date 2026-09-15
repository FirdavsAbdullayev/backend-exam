const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const DeliveryMethod = sequelize.define('DeliveryMethod', {
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
  tableName: 'delivery_method',
  timestamps: true,
});

module.exports = DeliveryMethod;