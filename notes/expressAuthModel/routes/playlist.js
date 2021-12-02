const express = require('express')
const router = express.Router()
const Playlist = require('../model/playlist')
const User = require('../model/user')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const PlaylistController = require('../controller/playlist')

router.use(authentication)
// membuat playlist baru sesuai dengan user yang lagi login
router.post('/', PlaylistController.createNewPlaylist)

// mengambil playlist sesuai dengan user yang lagi login
router.get('/', PlaylistController.findAllPlaylists)

// mengubah playlist tertentu sesuai dengan user yang lagi login
/*
  untuk mengubah data, biasanya bisa digunakan method 'put' atau 'patch'
  perbedaanya 
    put => mengubah banyak atau semua data nya 
    patch => mengubah sedikit atau just one column dari sebuah data, biasanya seperti active/status 
*/

router.put('/:id', authorization, PlaylistController.updatePlaylist)

module.exports = router