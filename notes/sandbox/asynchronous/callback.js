function sayHello () {
  return "Hello, Guys !!!"
}

function sayName () {
  setTimeout(() => {
    console.log("this is the first message")
  }, 5000);
  return "function say name run !"
}

function sayHello2 () {
  setTimeout(() => {
    console.log("this is time out for say hello 2")
  }, 500);
  return `Hello !!!`
}

// console.log(sayName())
// console.log(sayHello2());
// console.log(sayHello());

// for (let i = 0; i < 5; i++) {
//   console.log('indeks ke-', i)
//   setTimeout(() => {
//     console.log('Proses untuk indeks ke-', i, ' telah selesai')
//   }, 500)
// }

const fs = require('fs')

fs.readFile('./data.json', 'utf-8', function (err, data) {
  if (err) {
    console.log('ERROR !!! ')
    console.log(err)
  } else {
    console.log('Proses pembacaan file berhasil !!!')
    console.log(data)
  }
  console.log('ini finally -------')
})


