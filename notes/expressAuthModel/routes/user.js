const express = require('express')
const router = express.Router()
const User = require('../model/user')
const { hashPassword } = require('../helpers/bcrypt')

router.get('/', (req, res) => {
  User.findAll()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err }))
})

router.post('/', (req, res) => {
  // console.log(req.body)
  const hash = hashPassword(req.body.password)
  // console.log(hash)
  const payload = {
    name: req.body.name,
    password: hash,
    email: req.body.email
  }
  User.create(payload)
  .then(result => {
    res.status(201).json({ message: 'success regist', result })  
  })
  .catch(err => {
    res.status(400).json({ message: err })
  })
})

module.exports = router