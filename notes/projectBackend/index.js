const env = process.env.NODE_ENV || 'development';
if (env === 'development' || env === 'test') require('dotenv').config();

const express = require('express')
const app = express()
const PORT = +process.env.PORT || 3000
const errorHandler = require('./middleware/errorHandler')
const router = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.status(200).json({ message: 'Hello Express !'}))
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Connected on port ${PORT}`))