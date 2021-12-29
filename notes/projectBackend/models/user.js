'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'roleId',  // depends on roleId in User
        targetKey: 'roleId' // depends on roleId in Role
      })
    }
  };
  User.init({
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^\S+$/,
          msg: `Username can't contain whitespace`
        },
        notEmpty: {
          msg: `Username can't be empty`
        }
      },
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Wrong email format`
        }
      },
      unique: true
    },
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(model) {
        model.password = hashPassword(model.password)
        if (!model.roleId) {
          model.roleId = 2
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};