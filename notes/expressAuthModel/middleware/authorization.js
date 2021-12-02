const Playlist = require('../model/playlist')

module.exports = (req, res, next) => {
  // console.log(req.params) // { id: '1' }
  const { id } = req.params
  // res.status(200).json({ dataUser: req.user, id }) 
  // ketika ingin mengupdate sebuah data, kita harus check terlebih dahulu apakah data tersebut ada atau tidak.
  // dan jika ada datanya, kita check apakah user yang lagi login boleh mengubah data tersebut.
  Playlist.findOne({    // findOne akan mereturn sebuah object atau null (jika datanya tidak ditemukan)
    where: {
      id: Number(id)
    }
  })
  .then(data => {
    if (data) {
      // res.status(200).json({
      //   dataPlaylist: data,
      //   dataUser: req.user
      // })
      if (data.userId === req.user.id) { // jika data nya itu merupakan data punya user yang lagi login
        // res.status(200).json(data)
        next()
      } else {
        res.status(403).json({ message: 'Data Bukan Punya Kamu' })
      }
    } else {
      res.status(404).json({ message: 'Data Playlist Not Found' })
    }
  })
  .catch(err => res.status(400).json({ message: err }))
}