const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (token) {
    const decoded = verifyToken(token)
    if (decoded) {
      const { userId, userName, email } = decoded
      User.findOne({
        where: { userId, userName, email }
      })
      .then(data => {
        if (data) {
          // jika misalkan auth login simpan di redis, maka harus check data di redis juga
          req.userLogin = decoded
          next()
        } else {
          next({
            code: 401,
            message: 'Invalid Auth'
          })
        }
      })
      .catch(err => next({ code: 400, message: err.message }))
    } else {
      next({
        code: 401,
        message: 'Invalid Auth !'
      })
    }
  } else {
    next({
      code: 401,
      message: 'Invalid Auth !'
    })
  }
}