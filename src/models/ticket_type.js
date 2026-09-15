const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const TicketType = sequelize.define('TicketType', {
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
  tableName: 'ticket_type',
  timestamps: true,
});

module.exports = TicketType;