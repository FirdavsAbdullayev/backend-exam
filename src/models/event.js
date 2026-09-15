const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  finish_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  finish_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  info: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  event_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  human_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lang_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, {
  tableName: 'event',
  timestamps: true,
});

module.exports = Event;