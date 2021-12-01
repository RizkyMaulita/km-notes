const { User, Album } = require('./models')

let data = []

User.findAll({
  limit: 5,
  offset: 1
})
.then(result => {
  data = result.map(user => {
    const { id, name, password, email, createdAt, updatedAt } = user
    return {
      id,
      name,
      password,
      email,
      createdAt,
      updatedAt
    }
  })
  return User.count()
})
.then(totalData => {
  console.log({
    data,
    totalData
  })
})
.catch(err => console.log(err))

// User.findAll({ 
//   attributes: ['id', 'name', 'password', 'email' ],
//   where: {
//     name: 'devi'
//   }
// })
// .then(result => {
//   console.log(result)
//   // const data = result.map(user => {
//   //   const { id, name, password, email } = user
//   //   return {
//   //     id,
//   //     name,
//   //     password,
//   //     email,
//   //   }
//   // })
//   // console.log(data)
// })
// .catch(err => console.log(err))

// User.findAll({ 
//   attributes: ['id', 'name', 'password', 'email' ],
//   where: {
//     name: 'litha'
//   }
// })
// .then(result => {
//   console.log(result, '<<< data tidak ditemukan pakai findAll')
// })
// .catch(err => console.log(err))

// User.findOne({ 
//   attributes: ['id', 'name', 'password', 'email' ],
//   where: {
//     name: 'devi'
//   }
// })
// .then(result => {
//   console.log(result)
// })
// .catch(err => console.log(err))

// User.findOne({ 
//   attributes: ['id', 'name', 'password', 'email' ],
//   where: {
//     name: 'litha'
//   }
// })
// .then(result => {
//   console.log(result, '<<< data tidak ditemukan pakai findOne')
// })
// .catch(err => console.log(err))

// User.create({ name: 'Arvel', email: 'arvel@mail.com', password: '12345' })
// .then(result => console.log(result))
// .catch(err => console.log(err))

// const albums = [
//   { name: 'Album 1', singerId: 1 },
//   { name: 'Album 2' },
//   { name: 'Album 3' }
// ]

// Album.bulkCreate(albums)
// .then(result => console.log(result))
// .catch(err => console.log(err))


// User.update({ name: 'Devi Ayu Lestari'}, { 
//   where: {
//     // name: 'devi',
//     id: 5
//   },
//   // returning: true // not support in MySQL. Only PGSQL support with this
// })
// .then(result => console.log(result))
// .catch(err => console.log(err))

// User.destroy({ 
//   where: { 
//     id: 2
//   }
// }).then(() => console.log('success delete')).catch(err => console.log(err))

// const dataUser = []

// for (let i = 0; i < 100; i++) {
//   dataUser.push({
//     name: `nama ke-${i}`,
//     email: `email_${i}@mail.com`,
//     password: '12345'
//   })
// }

// User.bulkCreate(dataUser)
// .then(() => console.log('success create'))
// .catch(err => console.log(err))