const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Gender = sequelize.define('Gender', {
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
  tableName: 'gender',
  timestamps: true,
});

module.exports = Gender;