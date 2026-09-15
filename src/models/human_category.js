const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const HumanCategory = sequelize.define('HumanCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  finish_age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'human_category',
  timestamps: true,
});

module.exports = HumanCategory;