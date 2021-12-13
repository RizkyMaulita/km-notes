const env = process.env.NODE_ENV || 'development';
// const uppercasedEnv = env.toUpperCase();

if (env === 'development' || env === 'test') require('dotenv').config();

const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME
const host = process.env.DB_HOST
const dialect = 'mysql'

// console.log(username, password, database, host , '<<<<')
module.exports = {
  "development": {
    // username: 'root',
    // password: '123456',
    // database: 'db_skilvul_ecommerce',
    // host: 'db_mysql',
    // dialect: 'mysql'
    username,
    password,
    database,
    host,
    dialect,
  },
  "test": {
    username,
    password,
    database,
    host,
    dialect,
    logging: false
  },
  "production": {
    username,
    password,
    database,
    host,
    dialect
  }
}