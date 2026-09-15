const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const VenuePhoto = sequelize.define('VenuePhoto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'venue_photo',
  timestamps: true,
});

module.exports = VenuePhoto;