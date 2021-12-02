const Playlist = require('../model/playlist')

class PlaylistController {
  static createNewPlaylist (req, res) {
    console.log(req.user, '<<<<')
    const payload = {
      name: req.body.name,
      // userId: decoded.id
      userId: req.user.id
    }
    Playlist.create(payload)
      .then(result => {
        res.status(201).json({ 
          message: 'Success create new playlist !', 
          result 
        })
      })
      .catch(err => res.status(400).json({ message: err }))
  }

  static findAllPlaylists (req, res) {
    // res.status(200).json(req.user) 
    const userId = req.user.id
    Playlist.findAll({
      where: {
        userId
      }
    })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err }))
  }

  static updatePlaylist (req, res) {
    const { id } = req.params
  
    const payload = {
      name: req.body.name
    }
    Playlist.update(payload, {
      where: {
        id: Number(id)
      }
    })
    .then(() => res.status(200).json({ message: 'Success update data' }))
    .catch(err => res.status(400).json({ message: err }))
  }
}

module.exports = PlaylistController