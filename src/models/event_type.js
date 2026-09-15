const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const EventType = sequelize.define('EventType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parent_event_type_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'event_type',
  timestamps: true,
});

module.exports = EventType;