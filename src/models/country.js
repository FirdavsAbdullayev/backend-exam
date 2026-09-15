const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'country',
  timestamps: true,
});

module.exports = Country;