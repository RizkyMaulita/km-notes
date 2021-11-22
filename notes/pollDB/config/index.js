require('dotenv').config()
const mysql      = require('mysql2');

const client = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

client.connect();

module.exports = client