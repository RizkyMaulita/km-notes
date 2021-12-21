const { User, Role } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { Op } = require('sequelize')
const { hashPassword } = require('../helpers/bcrypt')

class AuthController {
  static async login (req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        next({
          code: 400,
          message: `'email' and 'password' is required !`
        })
      } else {
        const retrieviedUser = await User.findOne({
          where: {
            email,
          },
          include: {
            model: Role
          }
        })
        if (retrieviedUser) {
          const checkPass = comparePassword(password, retrieviedUser.password)
          if (checkPass) {
            const { userId, userName, email, roleId, Role } = retrieviedUser
            const token = generateToken({
              userId,
              userName,
              email,
              roleId,
              roleName: Role?.name || null
            })
            // biasanya kita juga nyimpen data di redis 
            res.status(200).json({ token })
          } else {
            next({
              code: 401,
              message: `Invalid email/password !`
            })
          }        
        } else {
          next({
            code: 401,
            message: `Invalid email/password !`
          })
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async register (req, res, next) {
    try {
      const { userName, email, password } = req.body
      if (!userName || !email || !password) {
        next({
          code: 400,
          message: `'userName', 'email', 'password' can't be empty`
        })
        return ;
      }
      const retrieviedUser = await User.findOne({
        where: {
          [Op.or]: {
            userName,
            email
          }
        }
      })
      if (retrieviedUser) {
        next({
          code: 400,
          message: `'username' and 'email' already exist`
        })
        return ;
      }
      const newUser = await User.create({
        userName,
        email,
        password: hashPassword(password),
        roleId: 2
      })
      res.status(201).json({
        message: `Successfully register new account !`,
        data: {
          userId: newUser.userId,
          userName,
          email
        }
      })
    } catch (error) {
      next(error)
    }
  } 
}

module.exports = AuthController