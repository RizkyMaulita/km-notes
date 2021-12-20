const router = require('express').Router()
const UserController = require('../controllers/user')
const authentication = require('../middleware/authentications')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/', UserController.findAll)

router.use('/:id', authorization)
router.get('/:id', UserController.findOne)

// router.get('/:id', authorization, UserController.findOne)
// router.put('/:id', authorization, UserController.findOne)

module.exports = router