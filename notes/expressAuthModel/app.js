require('./config')
const express = require('express')
const app = express()
const PORT = 3003
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const playlistRouter = require('./routes/playlist')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Helloo Express !!!'})
})

app.post('/test', (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'Method Post' })
})

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/playlists', playlistRouter)

app.listen(PORT, () => console.log('Connected on port ', PORT))