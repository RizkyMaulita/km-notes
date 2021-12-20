const router = require('express').Router()
const AuthController = require('../controllers/auth')

// /auth/login
// /auth/forgotPassword
// /auth/changePassword
// /auth/signup

router.post('/login', AuthController.login) 

module.exports = router