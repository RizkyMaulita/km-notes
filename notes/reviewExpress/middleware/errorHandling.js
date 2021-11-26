module.exports = (err, req, res, next) => {
  console.log(err)
  if (err.code && err.message) {
    res.status(err.code).json({ message: err.message })
  } else {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}