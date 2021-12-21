module.exports = (err, req, res, next) => {
  /* 
    next({
      code: 400,
      message: 'Data Not Found'
    })
  */
//  console.log(err)
  if (err.code && err.message) {
    res.status(err.code).json({ message: err.message })
  } else if (err.name === 'SequelizeValidationError') {
    const messages = err.errors.map(error => error.message)
    res.status(400).json({ messages })
  } else {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}