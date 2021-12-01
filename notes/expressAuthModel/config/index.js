const Sequelize = require('sequelize')

const client = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  database: 'db_skilvul_music_player_seq',
  username: 'admin',
  password: 'password'
})

client.authenticate()
.then(() => console.log(`MySQL connected !`))
.catch(err => console.log(err))

module.exports = client