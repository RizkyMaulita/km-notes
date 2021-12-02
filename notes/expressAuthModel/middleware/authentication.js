const User = require('../model/user')
const { verifyToken } = require('../helpers/jwt')

module.exports = (req, res, next) => {
  // console.log(req.headers.authorization)
  const token = req.headers.authorization.split(' ')[1]
  // console.log(token)
  if (token) {
    const decoded = verifyToken(token)
    if (decoded) {
      User.findOne({
        where: {
          id: decoded.id,
          name: decoded.name,
          email: decoded.email
        }
      })
      .then(data => {
        if (data) {
          req.user = decoded // req.loginUser / req.<key tertentu> 
          // jika decoded token sesuai dengan data yang ada di database
          next()
        } else {
          res.status(401).json({ message: 'Invalid auth !' })
        }
      })
      .catch(err => {
        res.status(400).json({ message: err })
      })
    } else {
      res.status(401).json({ message: 'Invalid Auth !' })
    }
  } else {
    res.status(401).json({ message: 'Invalid Auth !' })
  }
}