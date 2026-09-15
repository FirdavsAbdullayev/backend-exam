const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Lang = sequelize.define('Lang', {
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
    allowNull: false,
  },
}, {
  tableName: 'lang',
  timestamps: true,
});

module.exports = Lang;