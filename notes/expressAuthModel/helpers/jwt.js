const jwt = require('jsonwebtoken')

const generateToken = (data) => {
  return jwt.sign(data, 'SK1LVULT3CH41MP4CT')
}

const verifyToken = (token) => {
  return jwt.verify(token, 'SK1LVULT3CH41MP4CT')
}

module.exports = {
  generateToken,
  verifyToken
}