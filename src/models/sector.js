const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Sector = sequelize.define('Sector', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'sector',
  timestamps: true,
});

module.exports = Sector;