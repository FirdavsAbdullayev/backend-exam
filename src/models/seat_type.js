const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const SeatType = sequelize.define('SeatType', {
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
  tableName: 'seat_type',
  timestamps: true,
});

module.exports = SeatType;