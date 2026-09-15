const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Venue = sequelize.define('Venue', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  site: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  venue_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  region_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'venue',
  timestamps: true,
});

module.exports = Venue;