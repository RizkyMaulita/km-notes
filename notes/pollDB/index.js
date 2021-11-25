const client = require('./config')
const dataSinger = require('./data/singer.json')
const fs = require('fs')
// client.query('SELECT User.name, User.email FROM User', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// client.query('SELECT * FROM Singer', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// client.end()

//----------------------------------------------------------
// client.query(`show databases`, function (error, result) {
//   if (error) throw error
//   else {
//     console.log(result)
//     client.query(`CREATE DATABASE IF NOT EXISTS skilvul_music_player `, function (error, res) {
//       if (error) throw error
//       else {
//         console.log(res)
//         client.query(`show databases`, function (err, database) {
//           if (err) throw err
//           else {
//             console.log(database)
//             client.end();
//           }
//         })
//       }
//     })
//   }
// })

//----------------------------------------

function queryDB (query) {
  return new Promise((resolve, reject) => {
    client.query(query, function (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

// const createDB = async () => {
//   try {
//     const firstCheckDB = await queryDB('show databases')

//     if (firstCheckDB) {
//       console.log(firstCheckDB, '<<< first check db')
//     }
//     const newDB = await queryDB('CREATE DATABASE IF NOT EXISTS skilvul_music_player_2')

//     if (newDB) {
//       console.log(newDB, '<<< new db')
//     }

//     const lastCheckDB = await queryDB('show databases')

//     if (lastCheckDB) {
//       console.log(lastCheckDB, '<<< last check db')
//     }

//     return 'success create db'
//   } catch (error) {
//     return error
//   }
// }

// createDB()
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(() => client.end())

//---------------------------------------------------------------
// console.log(dataSinger)

// let values = []

// dataSinger.forEach(singer => {
//   values.push(`('${singer.name}')`)
// })

// console.log(values.join(','))

// const insertSinger = async () => {
//   try {
//     await queryDB(`INSERT INTO Singer (name) VALUES ${values.join(',')};`)
//     return 'success insert db'
//   } catch (error) {
//     return error
//   }
// }

// insertSinger()
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(() => client.end())

//---------------------------------------------------------------

const dataUser = fs.readFileSync('./data/user.csv', 'utf-8').split('\n').slice(1).map(user => user.split(','))

// console.log(dataUser)
let valueUser = []

dataUser.forEach(user => {
  const name = user[0]
  const email = user[1]
  const password = user[2]
  valueUser.push(`('${name}', '${email}' , '${password}')`)
})

// console.log(valueUser.join(','))

const insertUser = async () => {
  try {
    await queryDB(`INSERT INTO User (name, email, password) VALUES ${valueUser.join(',')};`)
    return 'success insert db'
  } catch (error) {
    return error
  }
}

insertUser()
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => client.end())