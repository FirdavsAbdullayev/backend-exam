const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Flat = sequelize.define('Flat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  entrance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'flat',
  timestamps: true,
});

module.exports = Flat;