const { DataTypes } = require('sequelize')
const client = require('../config')

const modelName = 'Playlist'
const tableName = 'Playlists'

const Playlist = client.define(modelName, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  userId: DataTypes.INTEGER,
}, {
  tableName,
  paranoid: true,
})

module.exports = Playlist