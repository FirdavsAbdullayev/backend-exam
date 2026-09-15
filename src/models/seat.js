const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Seat = sequelize.define('Seat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seat_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  row_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sector_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seat_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'seat',
  timestamps: true,
});

module.exports = Seat;