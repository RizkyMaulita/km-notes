const express = require('express')
const router = express.Router()
const User = require('../model/user')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

router.post('/login', (req, res) => {
  // console.log(req.body)
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(data => {
    if (data) {
      const checkPass = comparePassword(req.body.password, data.password)
      if (checkPass) {
        const token = generateToken({
          id: data.id,
          name: data.name,
          email: data.email 
        })
        res.status(200).json({ message: 'success login', token }) 
      } else {
        res.status(401).json({ message: 'Invalid Auth !' })
      }
    } else {
      res.status(401).json({ message: 'Invalid Auth !' })
    }
  })
  .catch(err => res.status(400).json({ message: err }))
})

module.exports = router