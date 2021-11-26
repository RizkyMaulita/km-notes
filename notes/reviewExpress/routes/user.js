const express = require('express')
const userRoutes = express.Router()
const { adminMiddleware, detailMiddleware } = require('../middleware/authentication')
const UserController = require('../controller/user')

userRoutes.use(adminMiddleware) // kalau dari adminMiddleware next() nya kosong, maka applikasi akan menjalankan kode yang dibawahnya
userRoutes.get('/', UserController.findUsers)

userRoutes.get('/expect', (req, res) => {
  res.status(200).json({ message: 'expected' })
})

userRoutes.get('/:id', detailMiddleware, UserController.findDetailUser)

module.exports = userRoutes