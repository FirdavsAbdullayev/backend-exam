const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const TicketStatus = sequelize.define('TicketStatus', {
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
  tableName: 'ticket_status',
  timestamps: true,
});

module.exports = TicketStatus;