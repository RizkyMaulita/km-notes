const dataUsers = require('../users.json')

class UserController {
  static findUsers (req, res) {
    const { name, sex } = req.query
    let result = dataUsers
  
    if (name) {
      result = result.filter(user => user.name === name)
    }
  
    if (sex) {
      result = result.filter(user => user.sex === sex)
    }
  
    res.status(200).json(result)
  }

  static findDetailUser (req, res, next) {
    const { id } = req.params
    console.log(req.query)
    const result = dataUsers.find(user => user.id === Number(id))
    if (result) {
      res.status(200).json(result)
    } else {
      next({
        code: 404,
        message: 'User Not Found'
      })
    }
  }
}

module.exports = UserController