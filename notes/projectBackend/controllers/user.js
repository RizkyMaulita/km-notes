const { User, Role } = require('../models')

class UserController {
  static async findAll (req, res, next) {
    try {
      // console.log(req.userLogin, '<<< user login')
      const retrieviedUser = await User.findAll({
        include: {
          model: Role
        }
      })
      res.status(200).json({ data: retrieviedUser })
    } catch (error) {
      next(error)
    }
  }

  static async findOne (req, res, next) {
    try {      
      // console.log(req.userLogin, '<<< user login')
      const retrieviedUser = await User.findOne({
        where: {
          userId: Number(req.params.id)
        },
        include: {
          model: Role
        }
      })
      res.status(200).json({ data: retrieviedUser })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController