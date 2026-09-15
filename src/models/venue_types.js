const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const VenueType = sequelize.define('VenueType', {
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
  tableName: 'venue_type',
  timestamps: true,
});

module.exports = VenueType;