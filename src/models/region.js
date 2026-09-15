const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Seat = sequelize.define('Seat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seat_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  row_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seat_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'seat',
  timestamps: true,
});

module.exports = Seat;