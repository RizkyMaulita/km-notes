const express = require('express')
const { comparePassword } = require('./helpers/bcrpyt')
const { generateToken } = require('./helpers/jwt')
const app = express()
const PORT = 3003
const errorHandler = require('./middleware/errorHandler')
const { User, Role } = require('./models')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello Express !' })
})

app.post('/login', (req, res, next) => {
  const { email, password } = req.body
  User.findOne({
    where: {
      email
    },
    include: {
      model: Role
    }
  })
  .then(data => {
    const { id, email, username, RoleId } = data
    const checkPassword = comparePassword(password, data.password)
    if (checkPassword) {
      const payload = {
        id,
        email,
        username,
        RoleId,
        roleName: Role?.name
      }
      const token = generateToken(payload)
      res.status(200).json({ token })
    } else {
      next({
        code: 401,
        message: 'Invalid auth !'
      })
    }
  })
  .catch(err => next({ code: 400, message: err }))
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Connected on port ${PORT}`))