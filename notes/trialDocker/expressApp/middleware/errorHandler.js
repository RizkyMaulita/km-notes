module.exports = (err, req, res, next) => {
  /* 
    next({
      code: 400,
      message: 'Data Not Found'
    })
  */
  if (err.code && err.message) {
    res.status(err.code).json({ message: err.message })
  } else {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}