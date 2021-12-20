const { User, Role } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

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
}

module.exports = AuthController