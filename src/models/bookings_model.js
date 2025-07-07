const sequelize = require('../database.js')
const { DataTypes } = require('sequelize')

const Bookings = sequelize('bookings', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  room_id: { type: DataTypes.INTEGER, allowNull: false },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
  is_vip: { type: DataTypes.BOOLEAN, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
})

module.exports = Bookings
