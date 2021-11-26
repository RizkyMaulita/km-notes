const adminMiddleware = (req, res, next) => {
  const { username } = req.headers
  if (username === 'admin') {
    next()  // lolos pemeriksaan
  } else {
    next({
      code: 401,
      message: "Unauthorized because not admin" 
    })
    // res.status(401).json({ message: "Unauthorized because not admin" })
  }
}

const detailMiddleware = (req, res, next) => {
  const { role } = req.headers
  if (role === 'supervisor') {
    next()  // lolos pemeriksaan
  } else {
    // res.status(401).json({ message: "Unauthorized because not supervisor" })
    next({
      code: 401,
      message: "Unauthorized because not supervisor" 
    })
  }
}

module.exports = {
  adminMiddleware,
  detailMiddleware
}