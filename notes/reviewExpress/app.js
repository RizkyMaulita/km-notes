const express = require('express')
const app = express()
const PORT = 3000 // port di suatu PC harus unique
const userRoutes = require('./routes/user')
const errorHandling = require('./middleware/errorHandling')

app.get('/', (req, res) => {
  res.send({ message: 'Hello Express' })
})

/* 
  request query =>
    - ditandai dengan ?
    - tidak perlu di define di project kita
    - langsung hit saja di browser / postman 
      ?key=value
      ?key=value&key2=value2

  request param =>
    - ditandai dengan : di dalam project
    - sedangkan saat hit tidak perlu ada :
*/

// const errorHandling = (err, req, res, next) => {
//   console.log(err)
//   if (err.code && err.message) {
//     res.status(err.code).json({ message: err.message })
//   } else {
//     res.status(500).json({ message: 'Internal Server Error' })
//   }
// }

app.use('/users', userRoutes) // localhost:port/users
app.use(errorHandling)  // dijalankan ketika next(value) dan value nya ada isinya

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})