const client = require('./config')
 
// client.query('SELECT * FROM User', function (error, results, fields) {
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

const createDB = async () => {
  try {
    const firstCheckDB = await queryDB('show databases')

    if (firstCheckDB) {
      console.log(firstCheckDB, '<<< first check db')
    }
    const newDB = await queryDB('CREATE DATABASE IF NOT EXISTS skilvul_music_player_2')

    if (newDB) {
      console.log(newDB, '<<< new db')
    }

    const lastCheckDB = await queryDB('show databases')

    if (lastCheckDB) {
      console.log(lastCheckDB, '<<< last check db')
    }

    return 'success create db'
  } catch (error) {
    return error
  }
}

createDB()
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => client.end())