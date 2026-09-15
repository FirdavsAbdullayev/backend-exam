const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

let Type = sequelize.define('Type', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'type',
  timestamps: true,
});

module.exports = Type;
