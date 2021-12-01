const express = require('express')
const router = express.Router()
const Playlist = require('../model/playlist')
const User = require('../model/user')
const { verifyToken } = require('../helpers/jwt')

router.post('/', (req, res) => {
  // console.log(req.headers.authorization)
  const token = req.headers.authorization.split(' ')[1]
  // console.log(token)
  const decoded = verifyToken(token)
  if (decoded) {
    // console.log(decoded)
    User.findOne({
      where: {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email
      }
    })
    .then(data => {
      if (data) {
        const payload = {
          name: req.body.name,
          userId: decoded.id
        }
        Playlist.create(payload)
          .then(result => {
            res.status(201).json({ 
              message: 'Success create new playlist !', 
              result 
            })
          })
          .catch(err => res.status(400).json({ message: err }))
      } else {
        res.status(401).json({ message: 'Invalid auth !' })
      }
    })
    .catch(err => res.status(400).json({ message: err }))
  } else {
    res.status(401).json({ message: 'Invalid Auth !' })
  }
})

module.exports = router