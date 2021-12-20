module.exports = (req, res, next) => {
  console.log(req.params, '<<< params')
  if (Number(req.params.id) !== Number(req.userLogin?.userId) && req.userLogin?.roleName !== 'admin') {
    next({
      code: 403,
      message: 'Forbidden to get detail user'
    })
  } else {
    next()
  }
}