const sequelize = require('../database.js')
const { DataTypes } = require('sequelize')

const Rooms = sequelize('rooms', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  room_number: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL, allowNull: false },
})

module.exports = Rooms
