const { DataTypes } = require('sequelize')
const client = require('../config')

const modelName = 'User'
const tableName = 'Users'

const User = client.define(modelName, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  tableName,
  paranoid: true,
  // createdAt: false / 'created_at',
  // updatedAt: false / 'updated_at'
})

module.exports = User